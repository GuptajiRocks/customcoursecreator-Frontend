// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="p-5 rounded-2xl overflow-hidden">
      <div className="relative pb-56 h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Blender 3D Fundamentals"
        ></iframe>
      </div>
      <div className="mt-5 text-black">
        <h2 className="text-3xl font-bold mb-3">Blender 3D Fundamentals</h2>
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Ryan Curtis"
          />
          <div className="ml-3">
            <p className="font-semibold">Ryan Curtis</p>
            <p className="text-gray-400">Publisher</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-5">
          <button className="text-gray-900 flex items-center">
            <i className="fas fa-thumbs-up mr-1"></i> 982
          </button>
          <button className="text-gray-900 flex items-center">
            <i className="fas fa-share mr-1"></i> Share
          </button>
        </div>
        <p className="text-gray-900">
          Welcome to the exciting world of Blender 3D! In this comprehensive course, we will dive into the fundamentals of Blender, equipping you with the essential knowledge and skills to create stunning 3D projects. Whether you're a beginner eager to explore the realm of 3D modeling or an experienced artist looking to expand your capabilities, this course will guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
