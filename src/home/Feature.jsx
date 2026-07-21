import React from 'react'

const Feature = () => {
  return (
    <div>
      <section class="w-full flex justify-center flex-col bg-blue-600 relative top-0 text-white">
      <div class="m-auto flex flex-col justify-evenly text-center items-center max-w-100 ">
        <h1 class="text-2xl font-bold pt-4">Features</h1>
        <p class="opacity-75 pt-3 p-3">Inprove your business with all the right tools to accept online payments and
          provide
          the best customer
          experiance</p>
      </div>
      <div class="Accept w-270 m-auto flex flex-wrap items-center justify-evenly gap-4 pt-5">
        <li class="w-62.5">


          <div class="flex flex-col gap-7 p-2">
            <div class="bg-blue-800 rounded-[50%] w-10"><img src="/src/assets/rocket.png" width="40px"
                class="p-2 invert-100"/>
            </div>
            <h1 class="text-[20px] font-bold">Instante Activation</h1>
          </div>


          <p class="p-2 opacity-80 pb-7">Share Payment via an Email, SMS, messenger, chatbord etc. and get paid
            immidiatly.</p>
        </li>


        <li class="w-62.5">


          <div class="flex flex-col gap-7 p-2">
            <div class="bg-blue-800 rounded-[50%] w-10"><img src="/src/assets/integration.png" width="40px"
                class="p-2 invert-100"/>
            </div>
            <h1 class="text-[20px] font-bold">Easy Integrate</h1>
          </div>


          <p class="p-2 opacity-80 pb-7">Share Payment via an Email, SMS, messenger, chatbord etc. and get paid
            immidiatly.</p>
        </li>

        <li class="w-62.5">


          <div class="flex flex-col gap-7 p-2">
            <div class="bg-blue-800 rounded-[50%] w-10"><img src="/src/assets/system.png" width="40px"
                class="p-2 invert-100"/>
            </div>
            <h1 class="text-[20px] font-bold">API Driven</h1>
          </div>


          <p class="p-2 opacity-80 pb-7">Share Payment via an Email, SMS, messenger, chatbord etc. and get paid
            immidiatly.</p>
        </li>


        <li class="w-62.5">


          <div class="flex flex-col gap-7 p-2">
            <div class="bg-blue-800 rounded-[50%] w-10"><img src="/src/assets/bank-account.png" width="40px"
                class="p-2 invert-100"/>
            </div>
            <h1 class="text-[20px] font-bold">100+ Payment Methods</h1>
          </div>


          <p class="p-2 opacity-80 pb-7">Share Payment via an Email, SMS, messenger, chatbord etc. and get paid
            immidiatly.</p>
        </li>
      </div>
    </section>
    <img src="/src/assets/600_down_slop.jpg" class="w-full relative -top-1.5"/>
    </div>
  )
}

export default Feature
