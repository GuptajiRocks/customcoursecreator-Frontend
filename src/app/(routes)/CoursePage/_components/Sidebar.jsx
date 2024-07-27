"use client";
import React, { useState } from 'react';
import { Rating } from '@mui/material';

const Sidebar = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    hello: 'Hi there! How can I help you today?',
    help: 'Sure! What do you need help with?',
    course: 'This course covers the basics of Blender 3D. Let me know if you have specific questions!',
    instructor: 'The instructor for this course is Ryan Curtis, a freelance 3D artist.',
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', text: input }];

    const response = predefinedResponses[input.toLowerCase()] || 'Sorry, I did not understand that.';
    newMessages.push({ sender: 'bot', text: response });

    setMessages(newMessages);
    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Chat Section */}
      <div className="text-black bg-white p-5 rounded-2xl shadow-md mb-5">
        <h3 className="text-xl font-bold mb-3">Chat with Bot</h3>
        <div className="h-64 overflow-y-auto mb-3 border border-gray-300 rounded p-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${
                message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded-xl p-2 w-44 mr-2" // Adjust width here
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-xl"
          >
            Send
          </button>
          </div>
      </div>

      {/* Rating Section */}
      <div className="text-black bg-white p-5 rounded-2xl shadow-md mb-5">
        <h3 className="text-xl font-bold mb-3">Rating</h3>
        <div className="flex items-center">
          <Rating name="read-only" value={4.8} readOnly />
          <span className="ml-2 text-sm text-gray-400 whitespace-nowrap">(2,492 Students)</span>
        </div>
      </div>

      {/* Publisher Section */}
      <div className="text-black bg-white p-5 rounded-2xl shadow-md mb-5">
        <h3 className="text-xl font-bold mb-3">Publisher</h3>
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Ryan Curtis"
          />
          <div className="ml-3">
            <p className="font-semibold">Ryan Curtis</p>
            <p className="text-gray-400 text-sm">3D Artist</p>
          </div>
        </div>
        <p className="text-gray-600 mb-3">
          Hey! My name is Ryan, I'm 26 and a freelance 3D Artist with around 5 years of experience.
        </p>
        <ul className="text-gray-600 text-sm">
          <li>⭐ 4.8 instructor rating</li>
          <li>📄 889 Reviews</li>
          <li>👨‍🎓 4,887 Students</li>
          <li>📚 6 Courses</li>
        </ul>
      </div>

      {/* Next Courses Section */}
      <div className="text-black bg-white p-5 rounded-2xl shadow-md mb-5">
        <h3 className="text-xl font-bold mb-3">Next Videos</h3>
        <div className="mb-3 flex items-center">
          <img
            className="w-16 h-16 rounded-2xl mr-3"
            src="https://via.placeholder.com/150"
            alt="Stylized Character"
          />
          <div>
            <h4 className="font-semibold">Stylized Character</h4>
            <p className="text-gray-400">By Julie Tinker</p>
            <div className="flex items-center">
              <Rating name="read-only" value={4.8} readOnly size="small" />
            </div>
          </div>
        </div>
        <div className="mb-3 flex items-center">
          <img
            className="w-16 h-16 rounded-2xl mr-3"
            src="https://via.placeholder.com/150"
            alt="Geometry Nodes"
          />
          <div>
            <h4 className="font-semibold">Geometry Nodes</h4>
            <p className="text-gray-400">By Adam Smith</p>
            <div className="flex items-center">
              <Rating name="read-only" value={4.7} readOnly size="small" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
