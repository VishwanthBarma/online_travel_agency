import SearchFlights from '@/components/Flight/SearchFlights'
import { AgencyContext } from '@/context/AgencyContext'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'

export default function Home() {
  const { userRole, user }: any = useContext(AgencyContext);
  const router = useRouter();

  useEffect(() => {
    const id = user?.id;
    if(userRole == "agent"){
      router.push({
        pathname: `/agency/[id]`,
        query: { id }
      })
    }
    
    if(userRole == "admin"){
      router.push("/admin")
    }
  }, []);

  return (
    <>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="Online Flight Ticket Booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col items-center justify-center mt-32 p-12'>
        <h1 className="text-4xl font-bold">
          Group Fair Tickets
        </h1>
            
        <SearchFlights />
      </div>
      
    </>
  )
}

