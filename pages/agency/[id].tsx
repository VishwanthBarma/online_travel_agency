import { AgencyContext } from '@/context/AgencyContext';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'

function Dashboard() {
  const router = useRouter();
  const { id } = router.query;
  const { userData, userRole, fetchUserData }: any = useContext(AgencyContext);

  useEffect(() => {
    if(userRole != "agent"){
      router.push("/");
    }
  }, [userRole]);

  const is_verified = userData?.is_verified;

  return (
    <div className='p-12'>
      <div className='flex space-x-5 items-center'>
        <h1 className='text-xl font-bold'>{userData?.agency_name}</h1>
        {
          is_verified?
          <h1 className='text-xs font-semibold text-green-400 border-2 border-green-500 rounded-3xl px-4 py-1'>Approved</h1>
          :
          <h1 className='text-xs font-semibold text-yellow-400 border-2 border-yellow-500 rounded-3xl px-4 py-1'>Approval Pending</h1>
        }
      </div>

      {
        is_verified ?
        <>
          <div className='flex flex-col justify-center items-center text-center bg-neutral-800 mt-16 p-10 rounded-3xl space-y-1'>
            <h1 className='font-semibold text-rose-500'>Account Verification Required</h1>
            <p className='text-sm font-semibold'>Your account is pending verification by the admin.</p>
            <p className='text-sm font-semibold'>Please wait for the admin to verify your account.</p>
          </div>
        </>
        :
        <>
          <div className='flex space-x-5 my-4'>
            <Link href={{
              pathname: '/agency/[id]/uploadtickets',
              query: { id: id }
            }}>
                <button className='text-green-500'>Upload Tickets</button>
            </Link>
            <Link href={{
              pathname: '/agency/[id]/removetickets',
              query: { id: id }
            }}>
              <button className='text-rose-500'>Remove Tickets</button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default Dashboard;
