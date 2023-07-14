import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

function SearchFlightsAgain() {
    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");
    const [departureDate, setDepartureDate] = useState("");
  
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
    <div className='bg-neutral-700 px-2 py-4 rounded-xl'>
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
            <button type="submit" className='bg-sky-500 h-8 px-2 font-semibold rounded-xl'>Search Again</button>

        </form>
    </div>
  )
}

export default SearchFlightsAgain