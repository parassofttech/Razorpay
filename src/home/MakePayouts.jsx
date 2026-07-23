import React from 'react';
import OnloneMoney from '../assets/Online-Mony Transfer.webp'
import PayNetwork from '../assets/payment-network.webp'
import PayRequest from '../assets/payment-request.webp'
import PayReversal from '../assets/paymentReversal.webp'
import PayOperation from '../assets/paymentOperation.webp'
import ArrowRight from '../assets/arrow-upper-right.png'
const MakePayouts = () => {
  return (
    <div>
      <section className="w-full relative my-16">
        <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 border border-gray-200 shadow-md rounded-xl">

          <h2 className="text-2xl font-bold mb-6 text-gray-900">Make Payouts</h2>

          {/* Navigation Filter Buttons */}
          <nav className="flex mt-4 mb-8 gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
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

          {/* Horizontal Scrolling Cards Container */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-none">
            <div className="flex items-center gap-6 min-w-max">

              {/* Card 1 */}
              <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={OnloneMoney} alt="Online Money Transfer" className="w-full h-48 object-cover" />
                  <div className="flex gap-4 items-center p-4 pb-2">
                    <h3 className="text-lg font-medium text-gray-900">Payment Gateway</h3>
                    <img src={ArrowRight} alt="Arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="px-4 text-sm text-gray-600 opacity-80 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={PayNetwork} alt="Payment Network" className="w-full h-48 object-cover" />
                  <div className="flex gap-4 items-center p-4 pb-2">
                    <h3 className="text-lg font-medium text-gray-900">Payment Gateway</h3>
                    <img src={ArrowRight} alt="Arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="px-4 text-sm text-gray-600 opacity-80 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={PayRequest} alt="Payment Request" className="w-full h-48 object-cover" />
                  <div className="flex gap-4 items-center p-4 pb-2">
                    <h3 className="text-lg font-medium text-gray-900">Payment Gateway</h3>
                    <img src={ArrowRight} alt="Arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="px-4 text-sm text-gray-600 opacity-80 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={PayReversal} alt="Payment Reversal" className="w-full h-48 object-cover" />
                  <div className="flex gap-4 items-center p-4 pb-2">
                    <h3 className="text-lg font-medium text-gray-900">Payment Gateway</h3>
                    <img src={ArrowRight} alt="Arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="px-4 text-sm text-gray-600 opacity-80 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.
                  </p>
                </div>
                <div className="p-4 pt-0">
                  <button className="text-blue-700 text-sm font-bold cursor-pointer hover:underline">Sign Up →</button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  <img src={PayOperation} alt="Payment Operation" className="w-full h-48 object-cover" />
                  <div className="flex gap-4 items-center p-4 pb-2">
                    <h3 className="text-lg font-medium text-gray-900">Payment Gateway</h3>
                    <img src={ArrowRight} alt="Arrow" className="opacity-55 w-3 h-3" />
                  </div>
                  <p className="px-4 text-sm text-gray-600 opacity-80 mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat molestiae.
                  </p>
                </div>
                <div className="p-4 pt-0">
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

export default MakePayouts;