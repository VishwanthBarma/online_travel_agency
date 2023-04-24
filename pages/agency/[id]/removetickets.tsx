import React, { useState } from 'react'
import { supabase } from './../../../utils/supabaseClient';
import Ticket from '@/components/Tickets/Ticket';
import TicketsDelete from '@/components/Tickets/TicketsDelete';


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

export default function RemoveTickets({ ticketsAvailable }: any) {
  const [departFrom, setDepartFrom] = useState({
    place: '',
    time: '',
  });
  const [goingTo, setGoingTo] = useState({
    place: '',
    time: '',
  });
  const [departureDate, setDepartureDate] = useState('');

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { departFrom, goingTo, departureDate };
    const response = await fetch('/api/tickets/removetickets', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = response.json();
    console.log(result);
    
    setDepartFrom({place: '', time: ''});
    setGoingTo({place: '', time: ''});
    setDepartureDate('');
  }

  return (
    <div className='p-12'>
      <h1 className='font-bold text-xl text-sky-500 mb-5'>Remove Tickets</h1>
      <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
        <label className='font-semibold'>
          Depart From :
          <input className='p-2 mr-5 rounded-xl mx-2 outline-none bg-neutral-800 font-bold' type="text" value={departFrom.place} placeholder='Place'
           onChange={(e) => setDepartFrom({...departFrom, place: e.target.value})}></input>
           <a className='font-semibold mr-2'>Time</a>
          <input className='p-2 outline-none bg-neutral-800 rounded-xl' type="time" value={departFrom.time} placeholder='Time'
            onChange={(e) => setDepartFrom({...departFrom, time: e.target.value})}></input>
        </label>

        <label className='font-semibold ml-7'>
          Going To :
          <input className='p-2 mr-5 rounded-xl mx-2 outline-none bg-neutral-800 font-bold' type="text" value={goingTo.place} placeholder='Place'
           onChange={(e) => setGoingTo({...goingTo, place: e.target.value})}></input>
           <a className='font-semibold mr-2'>Time</a>
          <input className='p-2 outline-none bg-neutral-800 rounded-xl' type="time" value={goingTo.time} placeholder='Time'
            onChange={(e) => setGoingTo({...goingTo, time: e.target.value})}></input>
        </label>

        <label className='font-semibold'>
          Departure Date :
          <input className='p-2 outline-none bg-neutral-800 rounded-xl ml-2' type="date" value={departureDate} placeholder='Time'
            onChange={(e) => setDepartureDate(e.target.value)}></input>
        </label>

        <button type="submit" className='bg-neutral-800 rounded-xl p-2 text-sky-500 font-bold hover:bg-opacity-80'>Search</button>
      </form>

      <div className='mt-4'>
        <h1 className='font-bold mb-3'>Tickets</h1>
        {
          ticketsAvailable.map((item: any) => (
            <TicketsDelete key={item.id} ticketsAvailable={item}/>
          ))
        }
      </div>
    </div>
  )
}

async function deleteTicket(){
    
}

export async function getServerSideProps(){
    const { data } = await supabase.from('ticketsAvailable').select('*');
    return{
      props: {
        ticketsAvailable: data,
      },
    }
  }

