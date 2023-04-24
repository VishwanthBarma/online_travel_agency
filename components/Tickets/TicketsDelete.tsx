import React from 'react'

export default function Ticket({ticketsAvailable} : any) {
    const {departFromPlace, departFromTime, goingToPlace, goingToTime, departureDate} = ticketsAvailable;
  return (
    <div className='bg-neutral-800 p-3 rounded-xl flex flex-col text-center m-2'>
        <div className='bg-neutral-900 p-1 mb-1 rounded-xl'>
            <button className='font-bold text-red-500'>REMOVE</button>
        </div>
        <div className='flex justify-around mb-2'>
            <div>
                <h1 className='font-semibold text-neutral-500'>Depart From : </h1>
                <h1 className='font-bold text-xl text-sky-500'>{departFromPlace}</h1>
                <h1 className='font-bold text-2xl'>{departFromTime}</h1>
            </div>
            <div>
                <h1 className='font-semibold text-neutral-500'>Going To : </h1>
                <h1 className='font-bold text-xl text-sky-500'>{goingToPlace}</h1>
                <h1 className='font-bold text-2xl'>{goingToTime}</h1>
            </div>
        </div>
        <span className="w-full p-0.5 bg-neutral-700 lg:w-1/3 rounded-2xl"></span>
        <div>
            <h1 className='font-semibold text-lg text-neutral-400'>Departure Date</h1>
            <h1 className='font-bold text-2xl text-green-500'>{departureDate}</h1>
        </div>
    </div>
  )
}
