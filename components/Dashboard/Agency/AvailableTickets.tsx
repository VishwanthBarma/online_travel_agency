import React from 'react'
import AvailableTicketsItem from './AvailableTicketsItem';
import SoldTickets from './SoldTickets';

function AvailableTickets() {
  return (
    <div className='bg-neutral-800 rounded-xl p-2 flex flex-col'>
        <h1 className='font-semibold text-sky-500'>Available Tickets</h1>
        <span className='w-full ma h-1 bg-neutral-900 rounded-3xl my-1'></span>
        <div className='max-h-80 overflow-y-scroll'>
            <AvailableTicketsItem />
            <AvailableTicketsItem />
            <AvailableTicketsItem />
            <AvailableTicketsItem />
            <AvailableTicketsItem />
            <AvailableTicketsItem />
        </div>
    </div>
  )
}

export default AvailableTickets;