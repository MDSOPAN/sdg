import React from 'react';
import { Smartphone, TrendingUp, Droplets, Thermometer, Sun } from 'lucide-react';

export const AppMockup: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl max-w-sm mx-auto">
        {/* Phone frame */}
        <div className="bg-gray-800 rounded-2xl p-1">
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Status bar */}
            <div className="bg-green-600 px-4 py-3 flex justify-between items-center text-white text-sm">
              <span className="font-semibold">Lettuce Grow</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                <div className="w-4 h-4 bg-white rounded-full opacity-40"></div>
              </div>
            </div>

            {/* App content */}
            <div className="p-4 space-y-4">
              {/* Header */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800">My Garden Dashboard</h3>
                <p className="text-sm text-gray-500">Growing strong! 🌱</p>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Droplets className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-xs text-blue-700 font-medium">Moisture</span>
                  </div>
                  <p className="text-lg font-bold text-blue-800">78%</p>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Thermometer className="w-4 h-4 text-orange-600 mr-1" />
                    <span className="text-xs text-orange-700 font-medium">Temp</span>
                  </div>
                  <p className="text-lg font-bold text-orange-800">72°F</p>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <Sun className="w-4 h-4 text-yellow-600 mr-1" />
                    <span className="text-xs text-yellow-700 font-medium">Light</span>
                  </div>
                  <p className="text-lg font-bold text-yellow-800">12h</p>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-xs text-green-700 font-medium">Growth</span>
                  </div>
                  <p className="text-lg font-bold text-green-800">+15%</p>
                </div>
              </div>

              {/* Plant status */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Current Plants</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">🥬 Buttercrunch Lettuce</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Ready in 3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">🌿 Basil</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Growing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};