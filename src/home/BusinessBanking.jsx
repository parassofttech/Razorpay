import React from 'react';

const BusinessBanking = () => {
  return (
    <div>
      <section className="w-full relative my-16">
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 border border-gray-200 shadow-md rounded-xl">

          <h1 className="text-2xl font-bold mb-6">Start Business Banking</h1>

          {/* Navigation Filter Buttons */}
          <nav className="w-full flex mt-4 mb-8 gap-4 justify-start md:justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
            <li>
              <button className="font-bold text-black opacity-100 cursor-pointer pb-1 border-b-2 border-blue-600">Top Products</button>
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

          {/* Cards Scroll Container */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-none">
            <div className="flex items-center gap-6 min-w-max">

              {/* Card 1 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5610AQExGXiquSnDkQ/image-shrink_1280/image-shrink_1280/0/1714288675410/Edu1_628x12006jpg?e=2147483647&v=beta&t=vdtE7h13lI4-Ch933r3DS1tLg5sWq9PFx-0mLn6CTwc" 
                  alt="Business Banking 1" 
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Business Account</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5610AQHzo1jL90Be4Q/image-shrink_1280/image-shrink_1280/0/1719476674043/628x1200png?e=2147483647&v=beta&t=QPTkJhQbfxGCghW8itGgbtI0B5z-g4XWikZNEhSasKo" 
                  alt="Business Banking 2" 
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Current Account</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img 
                  src="https://framerusercontent.com/images/21lqn2bUVk3xwk14e3sAVQg6Dg.webp" 
                  alt="Business Banking 3" 
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payouts</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img 
                  src="https://razorpay.com/docs/build/browser/assets/images/ip-onboarding.jpg" 
                  alt="Business Banking 4" 
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payroll</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img 
                  src="https://framerusercontent.com/assets/DPjy2nCb6T1lkiO8qIe8K8Gwc.png" 
                  alt="Business Banking 5" 
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">X-Corporate Cards</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BusinessBanking;