import React from 'react';
import { TimeRemaining } from '../utils/dateCalculator';
import { Clock } from 'lucide-react';

interface TimeRemainingDisplayProps {
  timeRemaining: TimeRemaining;
  className?: string;
}

const TimeRemainingDisplay: React.FC<TimeRemainingDisplayProps> = ({ 
  timeRemaining, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex items-center space-x-2">
        <Clock className="h-5 w-5 text-indigo-500" />
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Time Remaining</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <TimeBlock value={timeRemaining.days} label="Days" />
        <TimeBlock value={timeRemaining.hours} label="Hours" />
        <TimeBlock value={timeRemaining.minutes} label="Minutes" />
        <TimeBlock value={timeRemaining.seconds} label="Seconds" />
      </div>
    </div>
  );
};

interface TimeBlockProps {
  value: number;
  label: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <span className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
};

export default TimeRemainingDisplay;