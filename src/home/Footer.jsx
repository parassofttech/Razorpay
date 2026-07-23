import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className="w-full relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row flex-wrap justify-between items-center gap-12">
          
          {/* Left Text Container */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 leading-tight">
              Join the 5,000,000+ businesses using Razorpay
            </h2>
            <p className="text-sm sm:text-base text-gray-700 opacity-85 leading-relaxed">
              We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payments experience for your customers.
            </p>
            <p className="text-sm sm:text-base text-gray-700 opacity-85 leading-relaxed">
              Focus on your business while we simplify the complexity of your payments.
            </p>
          </div>

          {/* Right Vertical Scrolling Container */}
          <div className="relative w-full md:w-5/12 h-80 flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-inner">
            <div 
              id="scroll-container"
              className="w-full h-full flex flex-col items-center overflow-y-auto space-y-4 p-4 scrollbar-none"
            >
              <img src="/src/assets/company1.jpg" alt="Partner Company 1" className="w-64 h-auto object-cover rounded-lg shadow-sm" />
              <img src="/src/assets/company2.jpg" alt="Partner Company 2" className="w-64 h-auto object-cover rounded-lg shadow-sm" />
              <img src="/src/assets/company3.jpg" alt="Partner Company 3" className="w-64 h-auto object-cover rounded-lg shadow-sm" />
            </div>

            {/* Top Fade Gradient */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-linear-to-b from-gray-50 to-transparent z-10"></div>

            {/* Bottom Fade Gradient */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-linear-to-t from-gray-50 to-transparent z-10"></div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Footer;