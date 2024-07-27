"use client";
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 15px 0;
        }
        .faq-question {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #2d3748;
        }
        .faq-answer {
          margin-top: 10px;
          color: #4a5568;
        }
        .faq-icon {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'How long does it take to learn?',
      answer:
        'This course is designed to be completed in about 56 hours. However, the actual time may vary depending on the pace at which you proceed through the lessons and exercises.',
    },
    {
      question: 'How much does Blender cost?',
      answer: 'Blender is free and open-source software. You can download and use it without any cost.',
    },
    {
      question: 'What do I need to start this course?',
      answer:
        'You need a computer capable of running Blender, and basic computer skills. A basic understanding of 3D modeling concepts is helpful but not necessary.',
    },
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
      <style jsx>{`
        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default FAQ;
