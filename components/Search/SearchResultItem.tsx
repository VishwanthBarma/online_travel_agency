import { capitalize } from 'lodash';
import React, { useState } from 'react'

function SearchResultItem({data, index}: any) {
    const [editClicked, setEditClicked] = useState(false);
    const departure_date = new Date(data.departure_datetime);
    const arrival_date = new Date(data.arrival_datetime);

    const options:  Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

  return (
    <div className='flex items-center p-2 font-medium bg-neutral-800 rounded-xl'>
            <h1 className='w-20 text-neutral-400'>{index}</h1>
            <div className='flex flex-1'>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Departure</h1>
                    <h1 className='font-semibold text-yellow-500'>{capitalize(data.departure_city)}</h1>
                    <h1 className='font-semibold text-sm'>{departure_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{departure_date.toLocaleTimeString()}</h1>
                </div>
                <h1 className='w-1/5'>-</h1>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Arrival</h1>
                    <h1 className='font-semibold text-yellow-500'>{capitalize(data.arrival_city)}</h1>
                    <h1 className='font-semibold text-sm'>{arrival_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{arrival_date.toLocaleTimeString()}</h1>
                </div>
            </div>
            <h1 className='w-1/6 font-bold text-green-500 text-center'>{data.price}$</h1>
            {
                !editClicked?
                <button onClick={() => setEditClicked(!editClicked)} className='w-1/6 font-normal text-sky-500'>Edit</button>
                :
                <button onClick={() => setEditClicked(!editClicked)} className='w-1/6 font-normal text-neutral-300'>Close</button>
            }


        </div>
  )
}

export default SearchResultItem