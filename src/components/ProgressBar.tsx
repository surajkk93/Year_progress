import React from 'react';

interface ProgressBarProps {
  progress: number;
  height?: string;
  animated?: boolean;
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 'h-3',
  animated = true,
  showPercentage = false,
  className = '',
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const formattedProgress = clampedProgress.toFixed(2);

  return (
    <div className={`w-full ${className}`}>
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${height}`}>
        <div
          className={`bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-full rounded-full ${
            animated ? 'transition-all duration-1000 ease-out' : ''
          }`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-300 font-medium">
          {formattedProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;