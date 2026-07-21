import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="w-full h-20 overflow-x-hidden fixed top-0 right-0 bg-white z-50 shadow transition-shadow duration-300">
      <div class="relative flex justify-between items-center  mx-auto">

        <div class="flex items-center">
          <a href="/">
          <img src="/src/assets/Razorpay_logo-removebg-preview.png"
              class="h-24 bg-none"/> 
              </a>
        </div>

        <ul class=" hidden md:flex space-x-7">
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Payment</a>
            <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-700 hidden group-hover:block"></div>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Banking</a>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Payroll</a>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Engages</a>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Partners</a>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Resources</a>
          </li>
          <li class="text-black hover:text-blue-700 font-bold relative">
            <a href="/">Pricing</a>
          </li>
        </ul>

        <div class="flex items-center space-x-7">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
            class="w-7 h-5"/>
          <a href="/src/main.jsx" class="text-blue-700 border px-4 py-1.5 rounded font-bold cursor-pointer">Log in</a>
          <button
            class="text-white bg-blue-800 px-4 py-3 rounded text-xs font-bold hover:bg-blue-700 cursor-pointer">Sign
            Up</button>
        </div>

        <div class="flex items-center">
          <button
            class="hidden absolute right-20 text-blue-700 border px-4 py-1.5 rounded font-bold cursor-pointer">Login
            -</button>
        </div>

        <div class="hidden flex-col absolute right-7 space-y-1">
          <div class="bg-blue-800 h-1"></div>
          <div class="bg-blue-800 h-1"></div>
          <div class="bg-blue-800 h-1"></div>
        </div>

      </div>
    </nav>
    </div>
  )
}

export default Navbar
