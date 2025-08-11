import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};