import React from 'react';
import { Check, Star } from 'lucide-react';



export const PricingCard = ({
  title,
  price,
  period,
  features,
  popular = false,
  buttonText,
  delay = 0,
}:any) => {
  return (
    <div
      className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
        popular ? 'ring-4 ring-green-500 scale-105' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
          <Star className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-5xl font-bold text-green-600">{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature:any, index:any) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 transform hidden hover:scale-105 ${
          popular
            ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};