import AdminWidgets from '@/components/Dashboard/Admin/AdminWidgets'
import ApprovedAgency from '@/components/Dashboard/Admin/ApprovedAgency'
import PendingApprovalAgency from '@/components/Dashboard/Admin/PendingApprovalAgency'
import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-col space-y-5 p-12'>
        <h1 className='font-bold text-2xl'>Admin DashBoard</h1>
        {/* Widgets */}
        <AdminWidgets />
        <PendingApprovalAgency />
        <ApprovedAgency />
    </div>
  )
}

export default Dashboard