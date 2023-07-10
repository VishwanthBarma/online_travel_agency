import React from 'react'
import SoldTicketsItem from './SoldTicketsItem'

function SoldTickets() {
  return (
    <div className='bg-neutral-800 rounded-xl p-2 flex flex-col'>
        <h1 className='font-semibold text-sky-500'>Sold Tickets</h1>
        <span className='w-full h-1 bg-neutral-900 rounded-3xl my-1'></span>
        <div className='max-h-80 overflow-y-scroll'>
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
            <SoldTicketsItem />
        </div>
    </div>
  )
}

export default SoldTickets