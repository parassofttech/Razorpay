import React from 'react'

const Ecommmerce = () => {
  return (
    <div>
      <section class="w-full relative top-12.5 mt-15 mb-15">
      <div class="Accept w-280 mt-15 pb-15 p-4 bg-white m-auto  border-gray-900 shadow-md">

        <h1 class="text-2xl font-bold">Start Business Banking</h1>

        <nav class="Accept_nav w-full  flex mt-4 mb-4 gap-4 justify-between whitespace-nowrap overflow-x-auto">

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


        <div class="flex  mb-6 
        w-full">

          <Cards class="w-full e-commerce ">


            <div class="flex overflow-hidden   mt-7 mb-6">
              <div class="e_com_text bg-white w-[40%] m-10 p-6 rounded-2xl">
                <h1 class="text-4xl font-bold pl-2 mt-4 text-black">Empower your <span class="text-green-500">e-commerce
                    business</span>
                </h1>
                <p class="pl-2 mt-6 mb-6  text-black opacity-70">Streamline payment management with a unified dashboard,
                  enabling both online and in-person payment collection while enhancing conversion rates and minimizing
                  fraud.</p>
                <button
                  class="mx-2 mt-7  p-3 px-4 bg-blue-800 hover:bg-blue-700 rounded text-white font-bold text-xs cursor-pointer">See
                  Solution</button>
              </div>

            </div>
          </Cards>






        </div>
        </div>
    </section>
    </div>
  )
}

export default Ecommmerce
