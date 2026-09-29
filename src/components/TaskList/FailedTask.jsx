import React from 'react'

const FailedTask = () => {
  return (
      <div className='h-full shrink-0 w-[350px] p-5 bg-[#A1CB35] rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-white px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm '>01 sep 2026</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Hiuiiii</h2>
           <p className='text-sm mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam repellat deserunt natus placeat culpa!
           </p>
           <div className='mt-2'>
                 <button className='w-full bg-red-500 text-white rounded-xl py-1 mt-4 '>Failed</button>
           </div>
       </div>
  )
}

export default FailedTask