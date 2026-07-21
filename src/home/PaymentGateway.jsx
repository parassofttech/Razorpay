import React from 'react'

const PaymentGateway = () => {
  return (
    <div>
      <h1 class="text-2xl font-bold overflow-x-hidden text-center relative top-14 mb-10 p-3">
      Accept Payment with Razorpay Payments Suits
    </h1>

   

    <section class="w-full   overflow-x-hidden relative top-20 mt-6 mb-6">
      <div
        class="flex w-270 flex-col lg:flex-row mx-auto justify-evenly md:items-center mt-7 mb-7 border rounded-2xl p-7 border-gray-300">

        <img src="/src/assets/razor_transaction.png" alt="" class=" w-85 sm:w-120 rounded-2xl"/>

        <div class="w-2/5">
          <h1 class="text-4xl font-bold pl-2 mt-4">Supercharge Your business with the all-powerfull <span
              class="text-blue-500">Payment Gateway</span> </h1>
          <ul class="flex flex-col mt-2 gap-2">
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>100+
              Payment Methods</li>
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>Industry
              Leading Success Rate</li>
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>Superior
              Checkout Experiance</li>
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>Easy
              to Intigrate</li>
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>Instante
              Settlements from 1 day</li>
            <li class="font-bold opacity-60 flex gap-2"><img src="/src/assets/icons8-check-mark-48.png" width="18"/>In-depth
              Reporting and Insights</li>
          </ul>
          <div class="mt-4">
            <button
              class="mx-2 mt-4 px-4 py-3 bg-blue-800 hover:bg-blue-700 rounded text-white font-bold text-xs">Sign Up
              Now</button>
            <button
              class="mx-2 mt-4 px-4 py-3 text-blue-800 hover:text-blue-700 rounded font-bold text-sm">Know more </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default PaymentGateway
