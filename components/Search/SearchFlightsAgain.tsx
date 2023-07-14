import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

function SearchFlightsAgain({departure_date, arrival_city, departure_city}: any) {
    const [departureCity, setDepartureCity] = useState(departure_city);
    const [arrivalCity, setArrivalCity] = useState(arrival_city);
    const [departureDate, setDepartureDate] = useState(departure_date);
  
    const router = useRouter();
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const queryParams = new URLSearchParams();
      queryParams.append('departure_city', departureCity);
      queryParams.append('arrival_city', arrivalCity);
      queryParams.append('departure_date', departureDate);
  
      router.push(`/search-results?${queryParams.toString()}`);
    }

  return (
    <div className='bg-neutral-800 px-2 py-4 rounded-xl shadow-xl shadow-black'>
        <form onSubmit={handleSubmit} className='flex items-center space-x-2 justify-between'>
            <div className='flex flex-col space-y-1'>
                <h1 className='uppercase font-semibold text-xs'>Departure City</h1>
                <input
                value={departureCity} 
                type="text"
                onChange={(e) => setDepartureCity(e.target.value)}
                className='bg-neutral-900 p-1 rounded-xl outline-none'
                ></input>
            </div>
            <div className='flex flex-col space-y-1'>
                <h1 className='uppercase font-semibold text-xs'>Arrival City</h1>
                <input
                value={arrivalCity}
                type="text"
                onChange={(e) => setArrivalCity(e.target.value)}
                className='bg-neutral-900 p-1 rounded-xl outline-none'
                ></input>
            </div>

            <div className='flex flex-col space-y-1'>
                <h1 className='uppercase font-semibold text-xs'>Departure Date</h1>
                <input
                value={departureDate} 
                type="date"
                onChange={(e) => setDepartureDate(e.target.value)}
                className='bg-neutral-900 p-1 rounded-xl outline-none'
                ></input>
            </div>
            <button type="submit" className='bg-sky-500 h-8 px-3 font-semibold rounded-xl'>Search</button>

        </form>
    </div>
  )
}

export default SearchFlightsAgain