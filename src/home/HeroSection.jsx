import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <section class="w-full overflow-x-hidden relative pt-24 pb-16  bg-blue-950">
      <div class="flex justify-evenly w-270 mx-auto mt-7 mb-7 flex-col md:flex-row">
        <div class="w-2/5">
          <h1 class="sm:text-4xl font-bold pl-2 mt-4 text-white">Power your finance, grow your business</h1>
          <p class="pl-2 mt-6 mb-6 text-sm px-28 text-white opacity-75">Streamline payment management with a unified dashboard,
            enabling
            both online and in-person payment collection while enhancing conversion rates and minimizing fraud.</p>
          <button
            class="mx-2 mt-7 px-4 py-3 bg-blue-800 hover:bg-blue-700 rounded text-white font-bold text-xs">Sign Up
            Now</button>
        </div>
      <div>
          <img src="/src/assets/razorpay-hero-removebg-preview.png" alt="" class="w-4/12 sm:w-130 md:w-full bg-cover"/>
      </div>
      </div>
    </section>



    <img src="/src/assets/slops.jpg" class="w-full relative "/>

     <section
      class="relative top-7 mx-auto  h-15 flex bg-white justify-evenly items-center mb-7 mt-3 overflow-hidden">
      <div id="scroll-horizontally"
        class="w-full h-full flex items-center overflow-x-scroll whitespace-nowrap no-scrollbar">
        <img src="/src/assets/co1.jpg" class="w-75"/>
        <img src="/src/assets/co2.jpg" class="w-75"/>
        <img src="/src/assets/co3.jpg" class="w-75"/>
        <img src="/src/assets/co4.jpg" class="w-75"/>
        <img src="/src/assets/co5.jpg" class="w-75"/>
        <img src="/src/assets/co6.jpg" class="w-75"/>
        <img src="/src/assets/co7.jpg" class="w-75"/>
        <img src="/src/assets/co8.jpg" class="w-75"/>
        <img src="/src/assets/co9.jpg" class="w-75"/>
        <img src="/src/assets/co10.jpg" class="w-75"/>
      </div>

      <div class="pointer-events-none absolute left-0 top-0 h-full w-8 bg-linear-to-r from-white to-transparent z-10">
      </div>

      <div class="pointer-events-none absolute right-0 top-0 h-full w-8 bg-linear-to-l from-white to-transparent z-10">
      </div>

    </section>
    </div>


  )
}

export default HeroSection
