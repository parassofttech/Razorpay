import React from 'react';

const Feature = () => {
  return (
    <div>
      <section className="w-full flex justify-center flex-col bg-blue-600 relative top-0 text-white py-16">
        
        {/* Section Header */}
        <div className="m-auto flex flex-col justify-evenly text-center items-center max-w-xl px-4">
          <h2 className="text-3xl font-bold pt-4">Features</h2>
          <p className="opacity-85 pt-3 leading-relaxed">
            Improve your business with all the right tools to accept online payments and provide the best customer experience.
          </p>
        </div>

        {/* Features Cards Container */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10">
          
          {/* Feature 1 */}
          <div className="flex flex-col bg-blue-700/40 p-6 rounded-xl border border-blue-500/30">
            <div className="flex flex-col gap-4 mb-4">
              <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center p-2 shadow-inner">
                <img src="/src/assets/rocket.png" alt="Rocket Icon" className="w-6 h-6 invert" />
              </div>
              <h3 className="text-xl font-bold">Instant Activation</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Get onboarded quickly with seamless verification and start accepting payments right away.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col bg-blue-700/40 p-6 rounded-xl border border-blue-500/30">
            <div className="flex flex-col gap-4 mb-4">
              <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center p-2 shadow-inner">
                <img src="/src/assets/integration.png" alt="Integration Icon" className="w-6 h-6 invert" />
              </div>
              <h3 className="text-xl font-bold">Easy Integration</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Integrate plugins easily with your website or app using well-documented developer tools.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col bg-blue-700/40 p-6 rounded-xl border border-blue-500/30">
            <div className="flex flex-col gap-4 mb-4">
              <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center p-2 shadow-inner">
                <img src="/src/assets/system.png" alt="API Icon" className="w-6 h-6 invert" />
              </div>
              <h3 className="text-xl font-bold">API Driven</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Build custom workflows and automate your financial operations seamlessly with robust APIs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col bg-blue-700/40 p-6 rounded-xl border border-blue-500/30">
            <div className="flex flex-col gap-4 mb-4">
              <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center p-2 shadow-inner">
                <img src="/src/assets/bank-account.png" alt="Payment Methods Icon" className="w-6 h-6 invert" />
              </div>
              <h3 className="text-xl font-bold">100+ Payment Methods</h3>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Allow your customers to pay using credit/debit cards, UPI, net banking, wallets, and more.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom Transition Slope Image */}
      <div className="w-full overflow-hidden leading-none">
        <img src="/src/assets/600_down_slop.jpg" alt="Slope Shape" className="w-full block -mt-1" />
      </div>
    </div>
  );
};

export default Feature;