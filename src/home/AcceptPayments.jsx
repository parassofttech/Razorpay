import React from 'react';

const AcceptPayments = () => {
  return (
    <div>
      <section className="w-full relative my-16">
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 border border-gray-200 shadow-md rounded-xl">

          <h1 className="text-2xl font-bold mb-6">Accept Payments</h1>

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
                <img src="https://framerusercontent.com/images/3cSJPdGfjMEVOYrlPmARHxpG2kE.svg" alt="Payment Gateway" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payment Gateway</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img src="/src/assets/RBI-Authorized.jpg" alt="RBI Authorized" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payment Gateway</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img src="/src/assets/razorpay-transaction-boy.png" alt="Transaction Boy" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payment Gateway</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img src="/src/assets/paymentOperation.webp" alt="Payment Operation" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payment Gateway</h2>
                    <img src="/src/assets/arrow-upper-right.png" alt="arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="text-sm opacity-80 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.</p>
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-72 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between">
                <img src="/src/assets/razorpay-girl.png" alt="Razorpay Support" className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h2 className="text-lg font-semibold">Payment Gateway</h2>
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

export default AcceptPayments;