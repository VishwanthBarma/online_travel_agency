import React, { useState } from 'react'

function AvailableTicketsItem() {
    const [editClicked, setEditClicked] = useState(false);
    const [departFrom, setDepartFrom] = useState({
        place: '',
        time: '',
      });
    const [goingTo, setGoingTo] = useState({
        place: '',
        time: '',
      });
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = () => {

    }

  return (
    <div className='flex flex-col border-b-2 border-neutral-900'>
        <div className='flex items-center p-2 font-medium'>
            <h1 className='w-1/6 text-neutral-400'>01</h1>
            <div className='flex w-3/6'>
                <div className='w-2/5'>
                    <h1 className='text-sm text-neutral-500'>From</h1>
                    <h1 className='font-semibold'>Hyderabad</h1>
                </div>
                <h1 className='w-1/5'>-</h1>
                <div className='w-2/5'>
                    <h1 className='text-sm text-neutral-500'>To</h1>
                    <h1 className='font-semibold'>Delhi</h1>
                </div>
            </div>
            <h1 className='w-1/6 font-bold text-green-500'>2300$</h1>
            {
                !editClicked?
                <button onClick={() => setEditClicked(!editClicked)} className='w-1/6 font-normal text-sky-500'>Edit</button>
                :
                <button onClick={() => setEditClicked(!editClicked)} className='w-1/6 font-normal text-neutral-300'>Close</button>
            }


        </div>
        <div>
            {
                editClicked &&
                <div className='flex p-2 justify-center bg-neutral-900 rounded-xl m-1'>
                    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>

                        <label className='text-sm'>
                        Depart From :
                        <input className='p-2 mr-5 rounded-xl mx-2 outline-none bg-neutral-800 font-bold' type="text" value={departFrom.place} placeholder='Place'
                        onChange={(e) => setDepartFrom({...departFrom, place: e.target.value})}></input>
                        <a className='mr-2'>Time</a>
                        <input className='p-2 outline-none bg-neutral-800 rounded-xl' type="time" value={departFrom.time} placeholder='Time'
                            onChange={(e) => setDepartFrom({...departFrom, time: e.target.value})}></input>
                        </label>

                        <label className='text-sm ml-7'>
                        Going To :
                        <input className='p-2 mr-5 rounded-xl mx-2 outline-none bg-neutral-800 font-bold' type="text" value={goingTo.place} placeholder='Place'
                        onChange={(e) => setGoingTo({...goingTo, place: e.target.value})}></input>
                        <a className='mr-2'>Time</a>
                        <input className='p-2 outline-none bg-neutral-800 rounded-xl' type="time" value={goingTo.time} placeholder='Time'
                            onChange={(e) => setGoingTo({...goingTo, time: e.target.value})}></input>
                        </label>

                        <label className='text-sm'>
                        Departure Date :
                        <input className='p-2 outline-none bg-neutral-800 rounded-xl ml-2' type="date" value={departureDate} placeholder='Time'
                            onChange={(e) => setDepartureDate(e.target.value)}></input>
                            <button className='ml-5 text-rose-500 font-medium'>Remove Ticket</button>
                        </label>

                        <button type="submit" className='bg-neutral-800 rounded-xl p-2 text-sky-500 font-bold hover:bg-opacity-80'>Save</button>
                    </form>
                </div>
            }
        </div>
    </div>
  )
}

export default AvailableTicketsItem;