import React from 'react'

function AdminWidgets({
    clients,
    agencies,
    approvedAgencies,
    pendingAgencies
}: any) {
  return (
    <div className='flex justify-between text-center'>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Total</h1>
            <h1 className='font-semibold text-sky-500'>Clients</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>{clients}</h1>
        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Total</h1>
            <h1 className='font-semibold text-sky-500'>Agencies</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>{agencies}</h1>
        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Approved</h1>
            <h1 className='font-semibold text-sky-500'>Agencies</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>{approvedAgencies}</h1>

        </div>
        <div className='bg-neutral-800 p-2 rounded-xl h-24 w-1/5 flex flex-col justify-center'>
            <h1 className='font-semibold text-sky-500'>Pending</h1>
            <h1 className='font-semibold text-sky-500'>Agencies</h1>
            <h1 className='font-semibold text-yellow-500 bg-neutral-900 rounded-lg m-1 p-1'>{pendingAgencies}</h1>

        </div>
    </div>
  )
}

export default AdminWidgets