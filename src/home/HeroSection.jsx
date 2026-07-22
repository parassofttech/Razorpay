import React from 'react';
import HeroImage from '../assets/razorpay-hero-removebg-preview.png'
import WaveShape from '../assets/slops.jpg'
import Co1 from '../assets/co1.jpg'
import Co2 from '../assets/co2.jpg'
import Co3 from '../assets/co3.jpg'
import Co4 from '../assets/co4.jpg'
import Co5 from '../assets/co5.jpg'
import Co6 from '../assets/co6.jpg'
import Co7 from '../assets/co7.jpg'
import Co8 from '../assets/co8.jpg'
import Co9 from '../assets/co9.jpg'
import Co10 from '../assets/co10.jpg'
const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full overflow-x-hidden relative pt-32 pb-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Power your finance, grow your business
            </h1>
            <p className="mt-6 mb-8 text-sm sm:text-base text-white/75 leading-relaxed">
              Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.
            </p>
            <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold text-sm cursor-pointer transition-colors shadow-lg">
              Sign Up Now
            </button>
          </div>

          {/* Right Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={HeroImage }
              className="w-full max-w-md md:max-w-lg object-contain" 
            />
          </div>

        </div>
      </section>

      {/* Slopes / Transition Image */}
      <div className="w-full overflow-hidden leading-none">
        <img src={WaveShape} alt="Wave Shape" className="w-full block -mb-1" />
      </div>

      {/* Company Logos Ticker Section */}
      <section className="relative mx-auto max-w-7xl px-4 h-20 flex bg-white justify-center items-center my-6 overflow-hidden">
        
        {/* Horizontal Scrolling Container */}
        <div 
          id="scroll-horizontally" 
          className="w-full h-full flex items-center space-x-12 overflow-x-auto whitespace-nowrap scrollbar-none"
        >
          <img src={Co1} alt="Company Logo" className="h-20 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co2} alt="Company Logo" className="h-20 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co3} alt="Company Logo" className="h-20 w-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co4} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co5} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co6} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co7} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co8} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co9} alt="Company Logo" className="h-20 w-auto object-contain   hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src={Co10} alt="Company Logo" className="h-20 w-auto object-contain  hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>

        {/* Left Fade Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-white to-transparent z-10"></div>

        {/* Right Fade Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white to-transparent z-10"></div>

      </section>
    </div>
  );
};

export default HeroSection;