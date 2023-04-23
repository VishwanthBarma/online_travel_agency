import Ticket from '@/components/Tickets/Ticket';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Dashboard() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='p-12'>
      <div>
        <h1 className='text-xl font-bold'>Agency Name</h1>
        <h1 className='text-xs font-semibold text-gray-400'>registered on 14-02-2021</h1>
      </div>

      <div className='flex space-x-5 my-4'>
        <Link href={{
          pathname: '/agency/[id]/addtickets',
          query: { id: id }
        }}>
            <button className='text-green-500'>Add Tickets</button>
        </Link>
        <Link href={{
          pathname: '/agency/[id]/removetickets',
          query: { id: id }
        }}>
          <button className='text-rose-500'>Remove Tickets</button>
        </Link>
      </div>

      <div>
        <h1 className='font-bold mb-3'>Tickets</h1>
        <Ticket />
      </div>
    </div>
  )
}
