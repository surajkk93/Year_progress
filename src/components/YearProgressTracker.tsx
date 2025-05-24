import React, { useEffect, useState } from 'react';
import { useYearProgress } from '../utils/dateCalculator';
import ProgressBar from './ProgressBar';
import NumberCounter from './NumberCounter';
import TimeRemainingDisplay from './TimeRemainingDisplay';
import { BarChart2, Calendar, Clock } from 'lucide-react';

const YearProgressTracker: React.FC = () => {
  const { progress, timeRemaining } = useYearProgress();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);
  
  const getCurrentYear = () => new Date().getFullYear();
  
  return (
    <div className={`max-w-3xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Calendar className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-bold text-white">{getCurrentYear()} Progress</h2>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <BarChart2 className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">
                <NumberCounter value={progress} className="text-xl" /> %
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Year Progress</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <NumberCounter value={progress} className="font-bold" />%
              </span>
            </div>
            <ProgressBar 
              progress={progress} 
              height="h-4" 
              animated={true} 
              className="mb-2" 
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Jan 1, {getCurrentYear()}</span>
              <span>Dec 31, {getCurrentYear()}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-indigo-500" />
                  Elapsed
                </h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    <NumberCounter value={progress} />
                  </span>
                  <span className="ml-1 text-gray-600 dark:text-gray-300">% of {getCurrentYear()}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-pink-500" />
                  Remaining
                </h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                    <NumberCounter value={100 - progress} />
                  </span>
                  <span className="ml-1 text-gray-600 dark:text-gray-300">% of {getCurrentYear()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <TimeRemainingDisplay timeRemaining={timeRemaining} />
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Updated in real-time</span>
              <span>Days in {getCurrentYear()}: {timeRemaining.totalDays + Math.ceil(progress * 365 / 100)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearProgressTracker;