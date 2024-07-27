// components/CourseDetails.js
import React from 'react';

const CourseDetails = () => {
  const details = [
    { icon: 'fas fa-book', label: 'Lessons', value: '128' },
    { icon: 'fas fa-clock', label: 'Duration', value: '56h 28m' },
    { icon: 'fas fa-level-up-alt', label: 'Skill level', value: 'Beginner' },
    { icon: 'fas fa-eye', label: 'Views', value: '12,620' },
  ];

  return (
    <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {details.map((detail, index) => (
        <div key={index} className="bg-white p-5 rounded-2xl shadow-md flex items-center">
          <i className={`${detail.icon} text-xl  mr-3`}></i>
          <div>
            <strong>{detail.label}:</strong> 
            <span className="text-gray-700"> {detail.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
