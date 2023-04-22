import React, { useState } from 'react'

type ticket = {
  departFrom : {
    place : string,
    time : TimeRanges,
  },
  goingTo : {
    place : string,
    time : TimeRanges,
  },
  departureDate : Date,
}

export default function UploadTickets() {
  const [departFrom, setDepartFrom] = useState({
    place: '',
    time: '',
  });
  const [goingTo, setGoingTo] = useState({
    place: '',
    time: '',
  });
  const [departureDate, setDepartureDate] = useState(null);

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { departFrom };
    const response = await fetch('/api/tickets/uploadtickets', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    });
    setDepartFrom({place: '', time: ''});
  }

  return (
    <div className='p-12'>
      <h1 className='font-semibold'>Upload Tickets</h1>
      <form onSubmit={handleSubmit}>
        <label>
          departFrom:
          <input className='text-black' type="text" value={departFrom.place} placeholder='Place'
           onChange={(e) => setDepartFrom({...departFrom, place: e.target.value})}></input>
          {/* <input className='text-black' type="time" value={departFrom.time} placeholder='Time' */}
           {/* onChange={(e) => setDepartFrom({...departFrom, time: e.target.value})}></input> */}
        </label>

        <button type="submit">Upload</button>
      </form>
    </div>
  )
}
