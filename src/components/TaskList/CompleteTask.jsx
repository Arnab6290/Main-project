import React from 'react'

const CompleteTask = () => {
  return (
      <div className='h-full shrink-0 w-[350px] p-5 bg-[#2BBBD7] rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-white px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm '>01 sep 2026</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Hiuiiii</h2>
           <p className='text-sm mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam repellat deserunt natus placeat culpa!
           </p>
           <div className='mt-2'>
                 <button className='w-full bg-green-500 text-white py-1 mt-6 rounded-xl'>Completed</button>
           </div>
       </div>
  )
}

export default CompleteTask