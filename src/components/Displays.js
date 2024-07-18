// import React from 'react'

// const Displays = (ipAddress, location, timezone, isp) => {
//   return (
//     <div className='w-4/5 rounded-lg absolute top-52 
//     md:top-32 left-10 md:left-40 bg-white z-10 flex 
//     flex-col sm:flex-row container gap-4 md:gap-16 p-4'>
        
//         <div className='md:border-r-2 w-full border-slate-300
//         flex flex-col gap-2 items-center'>
//             <p className='text-sm text-slate-400 font-semibold'>
//                 IP Address
//             </p>
//             <p className='md:text-2xl text-black font-bold'>
//                 {ipAddress}
//             </p>
//         </div>

//         <div className='md:border-r-2 w-full border-slate-300
//         flex flex-col gap-2 items-center'>
//             <p className='text-sm text-slate-400 font-semibold'>
//                 Location
//             </p>
//             <p className='md:text-2xl text-black font-bold'>
//                 {location}
//             </p>
//         </div>

//         <div className='md:border-r-2 w-full border-slate-300
//         flex flex-col gap-2 items-center'>
//             <p className='text-sm text-slate-400 font-semibold'>
//                 Timezone
//             </p>
//             <p className='md:text-2xl text-black font-bold'>
//                 {timezone}
//             </p>
//         </div>

//         <div className='w-full flex flex-col gap-2 
//         items-center '>
//             <p className='text-sm text-slate-400 font-semibold'>
//                 ISP
//             </p>
//             <p className='md:text-2xl text-black font-bold'>
//                 {isp}
//             </p>
//         </div>
//     </div>
//   )
// }

// export default Displays

import React from 'react';

const Displays = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className='w-4/5 rounded-lg absolute top-52 md:top-32 left-10 md:left-40 bg-white z-10 flex flex-col sm:flex-row container gap-4 md:gap-16 p-4'>
      <div className='md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center' key='ip'>
        <p className='text-sm text-slate-400 font-semibold'>IP Address</p>
        <p className='md:text-2xl text-black font-bold'>{ipAddress}</p>
      </div>

      <div className='md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center' key='location'>
        <p className='text-sm text-slate-400 font-semibold'>Location</p>
        <p className='md:text-2xl text-black font-bold'>{location}</p>
      </div>

      <div className='md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center' key='timezone'>
        <p className='text-sm text-slate-400 font-semibold'>Timezone</p>
        <p className='md:text-2xl text-black font-bold'>{timezone}</p>
      </div>

      <div className='w-full flex flex-col gap-2 items-center' key='isp'>
        <p className='text-sm text-slate-400 font-semibold'>ISP</p>
        <p className='md:text-2xl text-black font-bold'>{isp}</p>
      </div>
    </div>
  );
};

export default Displays;
