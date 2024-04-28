// const Hero = () => {
//   return (
//     <div className="relative bg-cover bg-center bg-gray-900 h-96 flex items-center p-4 justify-center" style={{backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1663088562177-12a59e716381?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
//       <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
//       <div className="z-10 text-center text-white">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">Empower Small Businesses</h1>
//         <p className="text-lg sm:text-xl md:text-2xl mb-8">Join us in supporting small businesses around the globe. Together, we can make a difference.</p>
//         <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-xl">Get Involved</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react'

const Hero = () => {
  return (
    <div className="w-[90%] md:w-full rounded-lg h-96 flex overflow-hidden mb-4">
        <div className="w-[80%] h-full bg-[#245449] px-4 py-[18%] md:px-10 md:py-[9%]">
            <h3 className="text-2xl tracking-wider mb-6 text-green-50 md:text-4xl">
                Empower Small Businesses.
            </h3>
            <p className='text-xs font-light text-green-100 mb-12'>Join us in supporting small businesses around the globe. Together, we can make a difference.</p>
            <div className='flex justify-start items-center space-x-4 '>
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#E96D2F] hover:scale-110 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-lg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
 </div>
                <p className='mr-6 text-green-100 text-xs font-light'>Get Involved</p>
            </div>

        </div>
        <div className='w-full h-full '>
            <img src='https://plus.unsplash.com/premium_photo-1663088562177-12a59e716381?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'className='h-full object-cover md:w-full'/>
        </div>
    </div>
  )
}

export default Hero;