import React from 'react';

const Ecommmerce = () => {
  return (
    <div>
      <section className="w-full relative my-16">
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 border border-gray-200 shadow-md rounded-xl">

          <h1 className="text-2xl font-bold mb-6">Empower Your Business</h1>

          {/* Navigation Filter Buttons */}
          <nav className="w-full flex mt-4 mb-8 gap-4 justify-start md:justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Top Products</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">On Website/App</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Plugins</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">On Social Media</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">In Store</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Cross Border</button>
            </li>
            <li>
              <button className="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">With Smart Add-Ons</button>
            </li>
          </nav>

          {/* E-commerce Feature Banner Card */}
          <div className="w-full mb-6">
            <div className="w-full bg-blue-950 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Empower your <span className="text-green-400">e-commerce business</span>
                </h2>
                <p className="mt-6 mb-8 text-sm sm:text-base text-white/75 leading-relaxed">
                  Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.
                </p>
                <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold text-xs cursor-pointer transition-colors shadow-md">
                  See Solution
                </button>
              </div>

              {/* Optional Right Graphic Space */}
              <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                {/* Add an illustrative image here if desired */}
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Ecommmerce;