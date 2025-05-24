import React, { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  value,
  duration = 1000,
  decimals = 2,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValueRef = useRef(0);
  const startTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const formatNumber = (num: number) => num.toFixed(decimals);

  useEffect(() => {
    previousValueRef.current = displayValue;
    startTimeRef.current = performance.now();
    
    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTimeRef.current;
      const relativeProgress = runtime / duration;
      
      if (relativeProgress < 1) {
        const newValue = previousValueRef.current + (value - previousValueRef.current) * relativeProgress;
        setDisplayValue(newValue);
        animationFrameRef.current = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animateCount);
    
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, duration]);

  return <span className={className}>{formatNumber(displayValue)}</span>;
};

export default NumberCounter;