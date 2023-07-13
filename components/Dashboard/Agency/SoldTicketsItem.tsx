import React, { useState } from 'react'

function SoldTicketsItem({data, index}: any) {
    const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className='flex flex-col border-b-2 border-neutral-900'>
        <div className='flex items-center p-2'>
            <h1 className='w-1/6 text-neutral-400'>{index}</h1>
            <div className='flex w-3/6'>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500'>From</h1>
                    <h1 className=''>{data.departure_city}</h1>
                </div>
                <h1 className='w-1/5'>-</h1>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500'>To</h1>
                    <h1 className=''>{data.arrival_city}</h1>
                </div>
            </div>
            <h1 className='w-1/6'>{data.price}$</h1>
            {
                !moreClicked?
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>More</button>
                :
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>Less</button>
            }
            
        </div>
        <div>
            {
                moreClicked &&
                <div className='flex p-2 justify-around bg-neutral-900 rounded-xl m-1'>
                    <div>
                        <h1 className='font-semibold'>Hima Charan Gangula</h1>
                        <h1 className='text-neutral-500 text-sm'>himacharan128@gmail.com</h1>
                        <h1 className='text-neutral-400 text-sm'>9966440677</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold '>Transaction Details</h1>
                        <h1 className='text-neutral-400 text-sm'>jaklfjl234jkhksan298</h1>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default SoldTicketsItem