import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface HowItWorksStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  delay?: number;
}

export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  icon: Icon,
  step,
  title,
  description,
  delay = 0,
}) => {
  return (
    <div
      className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -top-4 -left-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
        {step}
      </div>
      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto mt-4">
        <Icon className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed text-lg">{description}</p>
    </div>
  );
};