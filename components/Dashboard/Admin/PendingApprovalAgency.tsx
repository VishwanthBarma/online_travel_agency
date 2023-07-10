import React from 'react'
import PendingApprovalItem from './PendingApprovalItem'

function PendingApprovalAgency({data}: any) {
  return (
    <div className='bg-neutral-800 rounded-xl p-2 flex flex-col'>
        <h1 className='font-semibold text-sky-500'>Pending Approval Agencies</h1>
        <span className='w-full ma h-1 bg-neutral-900 rounded-3xl my-1'></span>
        <div className='max-h-80 overflow-y-scroll'>
            {
                data.length != 0 ?
                data.map((item: any, index: any) => <PendingApprovalItem data={item} index={index + 1}/>)
                :
                <h1 className='font-semibold text-center'>No Data</h1>
            }
        </div>
    </div>
  )
}

export default PendingApprovalAgency