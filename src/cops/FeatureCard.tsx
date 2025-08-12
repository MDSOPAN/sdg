import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';


export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  tooltip="",
  underlined=""
}:any) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${tooltip.length != 0 ? "relative":""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {tooltip.length != 0 && <p className='Tooltip'>{tooltip}</p>}
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title == "Beginner Brilliant" ? <u>{title}</u>:title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}{underlined.length!=0 && <u>{underlined}</u>}</p>
    </div>
  );
};