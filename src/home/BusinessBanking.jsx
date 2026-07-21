import React from 'react'

const BusinessBanking = () => {
  return (
    <div>
       <section class="w-full sticky top-33.7 mt-15 mb-15">
      <div class="Accept w-270 mt-15 mb-15 p-15 m-auto bg-gray-50 border-gray-900 shadow-md">

        <h1 class="text-2xl font-bold">Start Business Banking</h1>

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

            <Cards class="w-60 border border-gray-300 shadow-md ">
              <img
                src="https://media.licdn.com/dms/image/v2/D5610AQExGXiquSnDkQ/image-shrink_1280/image-shrink_1280/0/1714288675410/Edu1_628x12006jpg?e=2147483647&v=beta&t=vdtE7h13lI4-Ch933r3DS1tLg5sWq9PFx-0mLn6CTwc"
                class="h-60 w-60"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-60  border border-gray-300 shadow-md ">
              <img
                src="https://media.licdn.com/dms/image/v2/D5610AQHzo1jL90Be4Q/image-shrink_1280/image-shrink_1280/0/1719476674043/628x1200png?e=2147483647&v=beta&t=QPTkJhQbfxGCghW8itGgbtI0B5z-g4XWikZNEhSasKo"
                class="h-60 w-60"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-60  border border-gray-300 shadow-md ">
              <img src="https://framerusercontent.com/images/21lqn2bUVk3xwk14e3sAVQg6Dg.webp" class="h-60"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>

            <Cards class="w-60  border border-gray-300 shadow-md">
              <img src="https://razorpay.com/docs/build/browser/assets/images/ip-onboarding.jpg" class="h-60"/>
              <div class="flex gap-4 items-center p-2">
                <h1 class="text-[18px] font-medium">Payment Gateway</h1>
                <img src="/src/assets/arrow-upper-right.png" class="opacity-55 w-2.5 h-2.5"/>
              </div>
              <p class="p-2 opacity-80 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos placeat
                molestiae.</p>
              <button class="text-blue-800 text-s font-bold p-3">Sign Up </button>
            </Cards>


            <Cards class="w-60  border border-gray-300 shadow-md ">
              <img src="https://framerusercontent.com/assets/DPjy2nCb6T1lkiO8qIe8K8Gwc.png" class="h-60"/>
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

export default BusinessBanking
