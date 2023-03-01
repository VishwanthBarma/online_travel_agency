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

      <h1 className="text-3xl text-sky-500 font-bold underline">
        Hello world!
      </h1>
    </>
  )
}
