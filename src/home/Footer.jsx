import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="w-full relative top-0">
      <div class="  flex flex-wrap bg-white p-6 justify-evenly items-center  ">
        <div class="text_container w-[45%] flex flex-col justify-evenly h-100 ">
          <h1 class="p-2 text-2xl font-bold text-blue-900">Join the 5000000+ business using Razorpay</h1>
          <p class="opacity-75">We make it easer for you to focus on building great products while we works on
            simplifing your payments. Become one of us by joinning thousents of our happy users and simplify the online
            payments experiance for your customers.</p>
          <p class="opacity-75">Focus on your business while we will simplifing the complexity of your payments.</p>
        </div>

        <div class="scrolled_ver relative w-[50%] h-100 flex bg-white justify-evenly items-center">
          <div id="scroll-container"
            class="w-full h-full flex flex-col items-center overflow-y-auto whitespace-nowrap no-scrollbar">

            <img src="/src/assets/company1.jpg" class="var_img w-75"/>
            <img src="/src/assets/company2.jpg" class="var_img w-75"/>
            <img src="/src/assets/company3.jpg" class="var_img w-75"/>

          </div>
          <div
            class="pointer-events-none absolute top-0 left-0 w-full h-6 bg-linear-to-b from-white to-transparent z-10">
          </div>
          <div
            class="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-linear-to-t from-white to-transparent z-10">
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Footer
