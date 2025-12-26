import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image: Warm modern interior, beige/cream/wood */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80"
          alt="Modern Warm Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-7xl md:text-9xl font-thin tracking-tighter lowercase animate-fade-in-up">
          luxterra
        </h1>
        <p className="mt-6 text-white/80 text-sm md:text-base font-light tracking-[0.2em] uppercase">
          Florida's Premier Real Estate
        </p>
      </div>

      {/* Scroll indicator (Optional but good for UX) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;