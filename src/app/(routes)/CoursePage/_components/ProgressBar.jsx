// components/ProgressBar.js

import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-10 h-2 bg-gray-300 rounded-full">
      <div
        className="h-2 bg-green-500 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
