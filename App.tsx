import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Properties from './components/Properties';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Properties />
      <Footer />
    </div>
  );
}

export default App;