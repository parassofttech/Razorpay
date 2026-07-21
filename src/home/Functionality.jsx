import React from 'react'

const Functionality = () => {
  return (
    <div>
      <section class="w-full mt-7 relative top-20">
      <div class="Accept w-270 m-auto flex flex-wrap items-center justify-evenly gap-4">
        <li class="w-75">
          <div class="flex gap-7 p-2">
            <h1 class="text-[20px] font-bold">Payment Links</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/icons8-link-30.png" width="40px" class="p-2"/>
            </div>
          </div>
          <p class="p-2 opacity-80 pb-7">Share Payment via an Email, SMS, messenger, chatbord etc. and get paid
            immidiatly.</p>
          <button class="text-blue-800 font-bold text-l p-3  cursor-pointer">Know more </button>
        </li>

        <li class="w-75">
          <div class="flex gap-7 p-2">
            <h1 class="text-[20px] font-bold">Payment Pages</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/payment-method.png" width="40px"
                class="p-2 invert"/></div>
          </div>
          <p class="p-2 opacity-80 pb-7">Take your store online instantly with zero coding. Accepting international &
            domestic payments</p>
          <button class="text-blue-800 font-bold text-l p-3 cursor-pointer">Know more </button>
        </li>

        <li class="w-75">
          <div class="flex gap-7 p-2">
            <h1 class="text-[20px] font-bold">Payment Buttons</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/pay-per-click.png" width="40px"
                class="p-2 invert"/></div>
          </div>
          <p class="p-2 opacity-80 pb-7">Create Copy & Collect with Payment Button. Collect one time or subscription
            payments & more</p>
          <button class="text-blue-800 font-bold text-l p-3 cursor-pointer">Know more </button>
        </li>

        <li class="w-75">
          <div class="flex gap-7 p-2">
            <h1 class="text-[20px] font-bold">Subscription</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/icons8-exchange-rupee-64.png" width="40px"
                class="p-2 "/></div>
          </div>
          <p class="p-2 opacity-80 pb-7">Subscription plans with automated recurring transactions an variout payment
            modes.</p>
          <button class="text-blue-800 font-bold text-l p-3 cursor-pointer">Know more </button>
        </li>

        <li class="w-75">
          <div class="flex gap-28 p-2">
            <h1 class="text-[20px] font-bold">Route</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/icons8-usb-connector-50.png" width="40px"
                class="p-2 "/></div>
          </div>
          <p class="p-2 opacity-80 pb-7">Split incoming payments outo-maticaly to vendor's accounts, manage marketplace
            money flow...</p>
          <button class="text-blue-800 font-bold text-l p-3 cursor-pointer">Know more </button>
        </li>

        <li class="w-75">
          <div class="flex gap-28 p-2">
            <h1 class="text-[20px] font-bold">Smart Collect</h1>
            <div class="bg-blue-700 rounded-[50%]"><img src="/src/assets/icons8-usb-connector-50.png" width="40px"
                class="p-2 "/></div>
          </div>
          <p class="p-2 opacity-80 pb-7">Automaticaly reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual
            Accounts & UPI IDs.</p>
          <button class="text-blue-800 font-bold text-l p-3 cursor-pointer">Know more </button>
        </li>
      </div>
    </section>
    </div>
  )
}

export default Functionality
