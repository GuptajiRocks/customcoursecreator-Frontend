// components/RightSidebar.js
"use client";
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

const RightSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [preview, setPreview] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handlePreviewClick = () => {
    setPreview(true);
  };

  return (
    <div className="text-white p-4 rounded-2xl h-full flex flex-col">
      <div className="flex items-center mb-4">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="mr-2">
         
          <circle cx="100" cy="100" r="100" fill="#4A90E2" />

          <path d="M50 50 Q50 100 100 100 Q150 100 150 50" fill="none" stroke="white" stroke-width="10" />

          <path d="M50 50 L50 150 L100 150" fill="none" stroke="white" stroke-width="10" />

          <path d="M150 50 Q175 50 175 75 Q175 100 150 100 Q175 100 175 125 Q175 150 150 150 L100 150" fill="none" stroke="white" stroke-width="10" />
        </svg>
        <h1 className="text-2xl font-bold ml-2">Unified Learning Platform</h1>
      </div>
      <div className="flex items-center mb-4">
        <Link href="/dashboard" className="flex items-center text-blue-500">
          Back to Dashboard
        </Link>
      </div>
      <ProgressBar />
      <h2 className="text-xl font-bold mb-4">Blender 3D Fundamentals</h2>
      <ul className="flex-grow">
        <li className="mb-2 flex items-center justify-between">
          <span className="text-green-400">1. Introduction</span>
          <button
            className="text-sm text-blue-500"
            onClick={handlePreviewClick}
          >
            Preview
          </button>
        </li>
        <li className="mb-2 cursor-pointer" onClick={() => toggleSection('section1')}>
          <span>2. Downloading Blender</span>
          {expandedSections.section1 && (
            <div className="pl-4 mt-2">
              <p>Details about downloading Blender...</p>
            </div>
          )}
        </li>
        <li className="mb-2 cursor-pointer" onClick={() => toggleSection('section2')}>
          <span>3. Settings and Preferences</span>
          {expandedSections.section2 && (
            <div className="pl-4 mt-2">
              <p>Details about settings and preferences...</p>
            </div>
          )}
        </li>
        <li className="mb-2 cursor-pointer" onClick={() => toggleSection('section3')}>
          <span>4. Blender Interface</span>
          {expandedSections.section3 && (
            <div className="pl-4 mt-2">
              <p>Details about Blender interface...</p>
            </div>
          )}
        </li>
        <li className="mt-4 font-semibold cursor-pointer" onClick={() => toggleSection('section4')}>
          Basics of Blender 3D
        </li>
        {expandedSections.section4 && (
          <ul className="pl-4 mt-2">
            <li className="mb-2 cursor-pointer">Mesh Modeling</li>
            <li className="mb-2 cursor-pointer">Mesh Editing Operations</li>
            <li className="mb-2 cursor-pointer">Most Common Modifiers</li>
            <li className="mb-2 cursor-pointer">Orthographic References</li>
          </ul>
        )}
      </ul>

      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">Introduction Preview</h2>
            <p>This is a preview of the Introduction section...</p>
            <button
              className="mt-4 text-blue-500"
              onClick={() => setPreview(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
