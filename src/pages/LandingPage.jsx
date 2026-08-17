import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DevicesGrid from '../components/DevicesGrid';
import Services from '../components/Services';
import Process from '../components/Process';
import Tracking from '../components/Tracking';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <DevicesGrid />
        <Services />
        <Process />
        <Tracking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
