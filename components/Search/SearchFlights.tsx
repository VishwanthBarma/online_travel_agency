import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'

function SearchFlights() {
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
    <div className='text-black bg-neutral-800 mt-10 w-full h-60 rounded-2xl shadow-neutral-900 shadow-2xl'>
      <form className='flex flex-col p-4 space-y-4 text-white' onSubmit={handleSubmit}>
        <div className='flex justify-around'>
          <label className='flex flex-col font-semibold uppercase'>
            Deaprture City
            <input
             type='text' 
             className='bg-neutral-900 outline-none rounded-3xl p-2 mt-1' 
             value={departureCity}
             onChange={(e) => setDepartureCity(e.target.value)}></input>
          </label>
          <label className='flex flex-col font-semibold uppercase'>
            Arrival City
            <input type='text' 
            className='bg-neutral-900 outline-none rounded-3xl p-2 mt-1' 
            value={arrivalCity} 
            onChange={(e) => setArrivalCity(e.target.value)}></input>
          </label>
        </div>
        <div className='flex justify-center text-center'>
          <label className='font-semibold uppercase'>
              Departure Date
              <input type='date' 
              className='bg-neutral-900 rounded-3xl p-2 ml-2' 
              value={departureDate} 
              onChange={(e) => setDepartureDate(e.target.value)}></input>
          </label>
        </div>
        <div className='flex justify-center'>
          <button type="submit" className='font-semibold bg-sky-500 p-2 rounded-3xl px-6 text-white mt-3'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchFlights;