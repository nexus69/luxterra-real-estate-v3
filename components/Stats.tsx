import React from 'react';
import { StatItem } from '../types';

const statsData: StatItem[] = [
  { value: '127+', label: 'Deals completed' },
  { value: '1k', label: 'Clients assisted' },
  { value: '31+', label: 'Homes evaluated' },
  { value: '38%', label: 'Client satisfaction' }, // 38% seems low for "Client satisfaction", maybe prompt meant 98%? Sticking to prompt "38%".
];

const Stats: React.FC = () => {
  return (
    <section className="bg-black py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Group */}
        <div className="text-center mb-20">
          <span className="block text-violet-500 text-sm font-medium tracking-widest uppercase mb-4">
            At a glance
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-light tracking-tight">
            Providing clarity, every step forward
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center px-4 md:border-r border-neutral-800 last:border-r-0`}
            >
              <span className="text-5xl md:text-6xl text-white font-bold mb-3 block">
                {stat.value}
              </span>
              <span className="text-neutral-400 text-xs md:text-sm uppercase tracking-wider font-light">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;