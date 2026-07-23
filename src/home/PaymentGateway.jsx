import React from 'react';

const PaymentGateway = () => {
  return (
    <div>
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-center my-10 p-3 text-gray-900">
        Accept Payment with Razorpay Payment Suite
      </h2>

      {/* Main Content Section */}
      <section className="w-full my-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">

          {/* Left Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/src/assets/razor_transaction.png" 
              alt="Razorpay Transaction Illustration" 
              className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover shadow-sm"
            />
          </div>

          {/* Right Text & Features Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Supercharge your business with the all-powerful <span className="text-blue-600">Payment Gateway</span>
            </h3>

            {/* Feature List */}
            <ul className="flex flex-col gap-3 mb-8 w-full">
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                100+ Payment Methods
              </li>
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                Industry Leading Success Rate
              </li>
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                Superior Checkout Experience
              </li>
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                Easy to Integrate
              </li>
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                Instant Settlements from 1 day
              </li>
              <li className="font-semibold text-gray-700 opacity-80 flex items-center gap-3">
                <img src="/src/assets/icons8-check-mark-48.png" alt="Check" className="w-4 h-4" />
                In-depth Reporting and Insights
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-bold text-sm transition-colors shadow-md cursor-pointer">
                Sign Up Now
              </button>
              <button className="px-5 py-3 text-blue-700 hover:text-blue-600 font-bold text-sm cursor-pointer hover:underline">
                Know more →
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default PaymentGateway;