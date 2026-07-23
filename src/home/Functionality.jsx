import React from 'react';

const Functionality = () => {
  return (
    <div>
      <section className="w-full my-16 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Payment Links</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/icons8-link-30.png" alt="Link Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Share payment links via email, SMS, messenger, chatbot, etc., and get paid immediately.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Payment Pages</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/payment-method.png" alt="Pages Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Take your store online instantly with zero coding. Accept international & domestic payments easily.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Payment Buttons</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/pay-per-click.png" alt="Button Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Create, copy, and collect with Payment Buttons. Collect one-time or subscription payments & more.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Subscription</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/icons8-exchange-rupee-64.png" alt="Subscription Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Setup subscription plans with automated recurring transactions across various payment modes.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Route</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/icons8-usb-connector-50.png" alt="Route Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Split incoming payments automatically to vendor accounts and manage marketplace money flow effortlessly.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Smart Collect</h3>
                <div className="bg-blue-600 rounded-full p-2.5 flex items-center justify-center">
                  <img src="/src/assets/icons8-usb-connector-50.png" alt="Smart Collect Icon" className="w-6 h-6 invert" />
                </div>
              </div>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Automatically reconcile incoming NEFT, RTGS, IMPS, and UPI payments using Virtual Accounts & UPI IDs.
              </p>
            </div>
            <button className="text-blue-700 font-bold text-sm cursor-pointer hover:underline text-left">
              Know more →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Functionality;