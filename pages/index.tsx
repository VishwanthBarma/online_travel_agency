import SearchFlights from '@/components/Flight/SearchFlights'
import Head from 'next/head'

export default function Home() {
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

