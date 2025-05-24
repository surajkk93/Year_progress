import React from 'react';
import YearProgressTracker from './components/YearProgressTracker';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400">
        Year Progress Tracker
      </h1>
      <YearProgressTracker />
      <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Track your time in {new Date().getFullYear()} with precision</p>
      </footer>
    </div>
  );
}

export default App;