import React from 'react'
import AvailableTicketsItem from './AvailableTicketsItem';

function AvailableTickets() {
  return (
    <div className='bg-neutral-800 rounded-xl p-2 flex flex-col'>
        <h1 className='font-semibold'>Available Tickets</h1>
        <span className='w-full h-1 bg-neutral-900 rounded-3xl my-1'></span>
        <div>
            <AvailableTicketsItem />
            <AvailableTicketsItem />
            <AvailableTicketsItem />
        </div>
    </div>
  )
}

export default AvailableTickets;