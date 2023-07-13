import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';

function AvailableTicketsItem({data, index}: any) {
    const departure_date = new Date(data.departure_datetime);
    const arrival_date = new Date(data.arrival_datetime);

    const [departureCity, setDepartureCity] = useState(data.departure_city);
    const [arrivalCity, setArrivalCity] = useState(data.arrival_city);

    const formattedDepartureDateTime = departure_date.toISOString().slice(0, 16);
    const formattedArrivalDateTime = arrival_date.toISOString().slice(0, 16);

    const [departureDateTime, setDepartureDateTime] = useState(formattedDepartureDateTime);
    const [arrivalDateTime, setArrivalDateTime] = useState(formattedArrivalDateTime);
    const [availableSeats, setAvailableSeats] = useState(data.available_seats);
    const [price, setPrice] = useState(data.price);
    const [flightNumber, setFlightNumber] = useState(data.flight_number);

    const [editClicked, setEditClicked] = useState(false);

    const router = useRouter();
    const { id: agencyId } = router.query;

    const flightId = data.flight_id;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const notification = toast.loading("Editing Ticket...");
    
        const data = {
          agencyId,
          flightId,
          departureCity,
          arrivalCity,
          departureDateTime,
          arrivalDateTime,
          availableSeats,
          price,
          flightNumber
          };
    
        const response = await fetch('/api/tickets/updatetickets', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = response.json();
        console.log(result);

        setEditClicked(false);
    
        toast.success("Ticket Updated Successfully.", {
          id: notification,
        });
    
    }

    const options:  Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };


  return (
    <div className='flex flex-col border-b-2 border-neutral-900'>
        <Toaster />
        <div className='flex items-center p-2 font-medium'>
            <h1 className='w-20 text-neutral-400'>{index}</h1>
            <div className='flex flex-1'>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Departure</h1>
                    <h1 className='font-semibold text-yellow-500'>{data.departure_city}</h1>
                    <h1 className='font-semibold text-sm'>{departure_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{departure_date.toLocaleTimeString()}</h1>
                </div>
                <h1 className='w-1/5'>-</h1>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Arrival</h1>
                    <h1 className='font-semibold text-yellow-500'>{data.arrival_city}</h1>
                    <h1 className='font-semibold text-sm'>{arrival_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{arrival_date.toLocaleTimeString()}</h1>
                </div>
            </div>
            <h1 className='w-1/6 font-bold text-green-500 text-center'>{data.price}$</h1>
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
                    <form onSubmit={handleSubmit} className="max-w-lg flex flex-col">
                        <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-white tracking-wid text-xs font-bold mb-2" htmlFor="departure-city">
                            Departure City
                            </label>
                            <input value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} className="p-2 w-full outline-none rounded-xl bg-neutral-800" id="departure-city" type="text" placeholder="" required></input>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="arrival-city">
                            Arrival City
                            </label>
                            <input value={arrivalCity} onChange={(e) => setArrivalCity(e.target.value)} className="p-2 w-full outline-none rounded-xl bg-neutral-800" id="arrival-city" type="text" placeholder="" required></input>
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-white tracking-wid text-xs font-bold mb-2" htmlFor="departure-datetime">
                            Departure DateTime
                            </label>
                            <input
                                value={departureDateTime}
                                onChange={(e) => setDepartureDateTime(e.target.value)}
                                className="p-2 w-full outline-none rounded-xl bg-neutral-800"
                                id="departure-datetime"
                                type="datetime-local" 
                                placeholder="" 
                                required></input>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="arrival-datetime">
                            Arrival DateTime
                            </label>
                            <input value={arrivalDateTime} onChange={(e) => setArrivalDateTime(e.target.value)} className="p-2 w-full outline-none rounded-xl bg-neutral-800" id="arrival-datetime" type="datetime-local" placeholder="" required></input>
                        </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="available-seats">
                            Available Seats
                            </label>
                            <input value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} className="p-2 block w-full outline-none rounded-xl bg-neutral-800" id="available-seats" type="text" placeholder=""></input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="price">
                            Price
                            </label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 block w-full outline-none rounded-xl bg-neutral-800" id="price" type="text" placeholder=""></input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="flight-number">
                            Flight Number
                            </label>
                            <input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className="p-2 block w-full outline-none rounded-xl bg-neutral-800" id="flight-number" type="text" placeholder=""></input>
                        </div>
                        </div>
                        <button type='submit' className='font-bold text-sky-500 bg-neutral-800 rounded-xl mt-5 p-2 hover:bg-opacity-50'>Update</button>
                    </form>
                </div>
            }
        </div>
    </div>
  )
}

export default AvailableTicketsItem;