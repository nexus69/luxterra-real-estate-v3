import React, { useState } from 'react';
import { Property } from '../types';
import { ArrowUpRight } from 'lucide-react';

const properties: Property[] = [
  {
    id: 1,
    price: '$2,850,000',
    address: '1090 Brickell Ave',
    city: 'Miami, FL',
    beds: 3,
    baths: 3.5,
    sqft: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'sale',
  },
  {
    id: 2,
    price: '$4,100,000',
    address: '550 Market Street',
    city: 'Palm Beach, FL',
    beds: 4,
    baths: 5,
    sqft: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'sale',
  },
  {
    id: 3,
    price: '$12,500/mo',
    address: '300 Biscayne Blvd',
    city: 'Miami, FL',
    beds: 2,
    baths: 2,
    sqft: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'rent',
  },
  {
    id: 4,
    price: '$1,950,000',
    address: '777 Ocean Drive',
    city: 'Miami Beach, FL',
    beds: 2,
    baths: 2.5,
    sqft: 1550,
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'sale',
  },
   {
    id: 5,
    price: '$3,200,000',
    address: '88 Design District',
    city: 'Miami, FL',
    beds: 3,
    baths: 3,
    sqft: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1600210491892-db9d4aa2c7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'sale',
  },
  {
    id: 6,
    price: '$8,500/mo',
    address: '450 Alton Road',
    city: 'Miami Beach, FL',
    beds: 1,
    baths: 1.5,
    sqft: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    type: 'rent',
  },
];

const Properties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');

  const filteredProperties = properties.filter(p => p.type === activeTab);

  return (
    <section id="properties" className="bg-white py-24 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 relative">
          <span className="text-violet-500 text-sm font-medium tracking-widest uppercase mb-4">
            Properties
          </span>
          <h2 className="text-4xl md:text-5xl text-neutral-900 font-light tracking-tight text-center">
            Our recent listings
          </h2>

          {/* Top Right Button (Absolute on desktop, relative on mobile) */}
          <div className="mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
             <button className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-neutral-900 hover:text-violet-500 transition-colors">
                More templates
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
             </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-8 md:space-x-12 border-b border-neutral-100">
            <button
              onClick={() => setActiveTab('sale')}
              className={`pb-4 text-sm font-medium tracking-widest uppercase transition-all ${
                activeTab === 'sale'
                  ? 'text-violet-500 border-b-2 border-violet-500'
                  : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              For sale
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`pb-4 text-sm font-medium tracking-widest uppercase transition-all ${
                activeTab === 'rent'
                  ? 'text-violet-500 border-b-2 border-violet-500'
                  : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              For rent
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProperties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src={property.imageUrl}
                  alt={property.address}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-violet-100 text-violet-600 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">
                    For {property.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col items-start">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  {property.price}
                </h3>
                <p className="text-neutral-500 text-sm font-light mb-1">
                  {property.address}
                </p>
                <div className="flex items-center gap-4 mt-3 text-neutral-400 text-xs tracking-wide">
                  <span>{property.beds} Beds</span>
                  <span className="text-violet-400">•</span>
                  <span>{property.baths} Baths</span>
                  <span className="text-violet-400">•</span>
                  <span>{property.sqft.toLocaleString()} Sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;