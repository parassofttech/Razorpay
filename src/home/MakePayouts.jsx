import React from 'react'

const MakePayouts = () => {
  return (
    <div>
      <section class="w-full sticky top-26.25 mt-15 mb-15">
      <div class="Accept w-270 mt-15 mb-15 p-15 m-auto bg-gray-50 border-gray-900 shadow-md">

        <h1 class="text-2xl font-bold">Make Payouts</h1>

        <nav class="Accept_nav flex mt-4 mb-4 gap-4 justify-between overflow-x-auto whitespace-nowrap">

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Top
              Products</button>
          </li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">On
              Website/App</button></li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Plugins</button>
          </li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">On Social
              Media</button></li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">In Store</button>
          </li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">Cross
              Border</button>
          </li>

          <li><button class="font-bold opacity-55 hover:text-black hover:opacity-100 cursor-pointer">With Smart
              Ad-Ons</button></li>
        </nav>

        <div class="w-full m-auto overflow-x-auto ">
          <div class="flex items-center gap-4 mb-6 
        min-w-max">

            <Cards class="w-65 border border-gray-300 shadow-md ">
              <img src="/src/assets/Online-Mony Transfer.webp" class="h-65"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-65  border border-gray-300 shadow-md ">
              <img src="/src/assets/payment-network.webp" class="h-65"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-65  border border-gray-300 shadow-md ">
              <img src="/src/assets/payment-request.webp" class="h-65"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-65  border border-gray-300 shadow-md">
              <img src="/src/assets/paymentReversal.webp" class="h-65"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-65  border border-gray-300 shadow-md ">
              <img src="/src/assets/paymentOperation.webp" class="h-65"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default MakePayouts
