import React from 'react'
import AvailableTicketsItem from './AvailableTicketsItem';
import SoldTickets from './SoldTickets';

function AvailableTickets({data}: any) {
  return (
    <div className='bg-neutral-800 rounded-xl p-2 flex flex-col'>
        <h1 className='font-semibold text-sky-500'>Available Tickets</h1>
        <span className='w-full ma h-1 bg-neutral-900 rounded-3xl my-1'></span>
        <div className='overflow-y-scroll max-h-screen max-h'>
          {
            data.length != 0?
            data.map((item: any, index: any) => <AvailableTicketsItem data={item} index={index + 1}/>)
            :
            <h1 className='font-semibold text-center'>No Data</h1>
          }
        </div>
    </div>
  )
}

export default AvailableTickets;