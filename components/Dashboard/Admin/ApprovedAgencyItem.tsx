import { supabase } from '@/utils/supabaseClient';
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';

function ApprovedAgencyItem({data, index}: any) {
    const [moreClicked, setMoreClicked] = useState(false);
    const [cancelApproval, setCancelApproval] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    
    const handleCancelApproval = async() => {
        setIsloading(true);

        const { error } = await supabase
        .from('agency_table')
        .update({ is_verified: "False" })
        .eq('agency_id', data.agency_id)

        if(error){
            console.log(error);
        }else{
            setCancelApproval(true);
            console.log("Agency Approval Cancelled")
        }
        setIsloading(false);
    }

  return (
    <div className='flex flex-col border-b-2 border-neutral-900'>
        <div className='flex items-center p-2 font-medium'>
            <h1 className='w-1/6 text-neutral-400'>{index}</h1>
            <div className='w-2/6'>
                <h1 className='font-semibold'>{data.agency_name}</h1>
                <h1 className='text-sm text-neutral-500'>{data.email}</h1>
            </div>
            {
                !moreClicked?
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>More</button>
                :
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 text-sky-500'>Less</button>
            }

            {
                cancelApproval?
                <div className='w-2/6 flex justify-center items-center space-x-1'>
                    <h1 className='text-rose-500'>Cancelled</h1>
                    <AiFillCheckCircle className='text-rose-500'/>
                </div>
                :
                <button onClick={handleCancelApproval} disabled={isLoading} className='w-2/6 text-rose-500 p-1 rounded-lg font-medium flex items-center justify-center'>
                    {isLoading ? 
                        (<svg
                        className="animate-spin h-6 w-6 text-white p-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm5-5.291l3 1.647A7.962 7.962 0 0020 12h-4a7.96 7.96 0 00-2 5.291z"
                        />
                        </svg>)
                        :
                        ('Cancel Approval')
                    }
                </button>
            }
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