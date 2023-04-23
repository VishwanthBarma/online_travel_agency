import React from 'react'

export default function Ticket() {
  return (
    <div className='bg-neutral-800 p-3 rounded-xl flex flex-col text-center'>
        <div className='flex justify-around mb-2'>
            <div>
                <h1 className='font-semibold text-neutral-500'>Depart From : </h1>
                <h1 className='font-bold text-xl text-sky-500'>Hyderabad</h1>
                <h1 className='font-bold text-2xl'>12:20</h1>
            </div>
            <div>
                <h1 className='font-semibold text-neutral-500'>Going To : </h1>
                <h1 className='font-bold text-xl text-sky-500'>Dubai</h1>
                <h1 className='font-bold text-2xl'>23:30</h1>
            </div>
        </div>
        <span className="w-full p-0.5 bg-neutral-700 lg:w-1/3 rounded-2xl"></span>
        <div>
            <h1 className='font-semibold text-lg text-neutral-400'>Departure Date</h1>
            <h1 className='font-bold text-2xl text-rose-500'>22-12-2023</h1>
        </div>
    </div>
  )
}
