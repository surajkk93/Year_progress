import { useEffect, useState } from 'react';

export interface TimeRemaining {
  totalDays: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateYearProgress = (): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  
  const yearDuration = endOfYear.getTime() - startOfYear.getTime();
  const elapsedTime = now.getTime() - startOfYear.getTime();
  
  return (elapsedTime / yearDuration) * 100;
};

export const calculateTimeRemaining = (): TimeRemaining => {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  
  const totalMilliseconds = endOfYear.getTime() - now.getTime();
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  
  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;
  const days = totalDays;
  
  return {
    totalDays,
    days,
    hours,
    minutes,
    seconds
  };
};

export const useYearProgress = (updateInterval = 1000): {
  progress: number;
  timeRemaining: TimeRemaining;
} => {
  const [progress, setProgress] = useState(calculateYearProgress());
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(calculateYearProgress());
      setTimeRemaining(calculateTimeRemaining());
    }, updateInterval);
    
    return () => clearInterval(timer);
  }, [updateInterval]);
  
  return { progress, timeRemaining };
};