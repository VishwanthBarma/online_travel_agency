import React, { useState } from 'react'

function ApprovedAgencyItem() {
    const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className='flex flex-col border-b-2 border-neutral-900'>
        <div className='flex items-center p-2 font-medium'>
            <h1 className='w-1/6 text-neutral-400'>01</h1>
            <div className='w-2/6'>
                <h1 className='font-semibold'>Agency Name</h1>
                <h1 className='text-sm text-neutral-500'>agencyemail@gmail.com</h1>
            </div>
            {
                !moreClicked?
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>More</button>
                :
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>Less</button>
            }
            <button className='w-2/6 text-rose-500 p-1 rounded-lg font-medium'>Cancel Approval</button>
        </div>
        <div>
            {
                moreClicked &&
                <div className='flex p-2 justify-center bg-neutral-900 rounded-xl m-1'>
                    <h1>More Agency Details</h1>
                </div>
            }
        </div>
    </div>
  )
}

export default ApprovedAgencyItem