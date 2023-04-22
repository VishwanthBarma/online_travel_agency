import React from 'react'

export default function Dashboard() {
  return (
    <div className='p-12'>
      <div>
        <h1 className='text-xl font-bold'>Agency Name</h1>
        <h1 className='text-xs font-semibold text-gray-400'>registered on 14-02-2021</h1>
      </div>

      <div className='flex space-x-5 my-4'>
        <button className='text-green-500'>Add Tickets</button>
        <button className='text-rose-500'>Remove Tickets</button>
      </div>

    </div>
  )
}
