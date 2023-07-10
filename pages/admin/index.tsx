import AdminWidgets from '@/components/Dashboard/Admin/AdminWidgets'
import ApprovedAgency from '@/components/Dashboard/Admin/ApprovedAgency'
import PendingApprovalAgency from '@/components/Dashboard/Admin/PendingApprovalAgency'
import { supabase } from '@/utils/supabaseClient'
import React from 'react'

function Dashboard({pendingAgencies, approvedAgencies}: any) {
  return (
    <div className='flex flex-col space-y-5 p-12'>
        <h1 className='font-bold text-2xl'>Admin DashBoard</h1>
        {/* Widgets */}
        <AdminWidgets
          clients={0} //TODO: update clients
          agencies={pendingAgencies.length + approvedAgencies.length}
          approvedAgencies={approvedAgencies.length}
          pendingAgencies={pendingAgencies.length}
          />
        <PendingApprovalAgency data={pendingAgencies}/>
        <ApprovedAgency data={approvedAgencies}/>
    </div>
  )
}

export default Dashboard;

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('agency_table')
    .select('*')
    .order('agency_id', { ascending: true });

  if (error) {
    console.error('Error fetching table data:', error);
    return {
      props: {
        pendingAgencies: [],
        approvedAgencies: [],
      },
    };
  }

  const pendingAgencies = data.filter((item) => item.is_verified === false);
  const approvedAgencies = data.filter((item) => item.is_verified === true);

  return {
    props: {
      pendingAgencies,
      approvedAgencies,
    },
  };
}