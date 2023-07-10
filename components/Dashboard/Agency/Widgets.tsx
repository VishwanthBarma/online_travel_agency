import React from 'react'

function Widgets() {
  return (
    <div className='flex justify-between text-center'>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Upload</h1>
            <h1 className='font-semibold text-sky-500'>Tickets</h1>
        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Remove</h1>
            <h1 className='font-semibold text-sky-500'>Tickets</h1>
        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Available</h1>
            <h1 className='font-semibold text-sky-500'>Tickets</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>230</h1>

        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Sold</h1>
            <h1 className='font-semibold text-sky-500'>Tickets</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>230</h1>

        </div>
    </div>
  )
}

export default Widgets;