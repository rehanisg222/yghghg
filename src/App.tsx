import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Companies from './components/Companies';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Modern Day Alchemy | Digital Marketing ROI Experts";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Companies />
      </main>
      <Footer />
    </div>
  );
}

export default App;