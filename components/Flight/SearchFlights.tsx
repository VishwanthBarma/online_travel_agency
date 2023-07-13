import React, { FormEvent, useState } from 'react'

function SearchFlights() {
  const [departFrom, setDepartFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(departFrom + goingTo + departureDate);

    // TODO: Logic for searching the Flight with specified details.

    setDepartFrom("");
    setGoingTo("");
    setDepartureDate("");
  }

  return (
    <div className='text-black bg-white mt-10 w-full h-60 rounded-2xl shadow-neutral-700 shadow-2xl'>
      <form className='flex flex-col p-4 space-y-4' onSubmit={handleSubmit}>
        <div className='flex justify-around'>
          <label className='flex flex-col font-semibold'>
            Depart From
            <input type='text' className='bg-neutral-800 bg-opacity-10 outline-none rounded-3xl p-2 mt-1' value={departFrom}
             onChange={(e) => setDepartFrom(e.target.value)}></input>
          </label>
          <label className='flex flex-col font-semibold'>
            Going To
            <input type='text' className='bg-neutral-800 bg-opacity-10 outline-none rounded-3xl p-2 mt-1' value={goingTo} 
            onChange={(e) => setGoingTo(e.target.value)}></input>
          </label>
        </div>
        <div className='flex justify-center text-center'>
          <label className='font-semibold'>
              Departure Date
              <input type='date' className='bg-neutral-800 bg-opacity-10 rounded-3xl p-2 ml-2' value={departureDate} 
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