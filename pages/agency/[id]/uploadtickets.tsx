import { AgencyContext } from '@/context/AgencyContext';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { IoArrowBack } from "react-icons/io5";

export default function UploadTickets() {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDateTime, setDepartureDateTime] = useState("");
  const [arrivalDateTime, setArrivalDateTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");
  const [flightNumber, setFlightNumber] = useState("");

  const router = useRouter();

  const { userData }: any = useContext(AgencyContext);
  const agencyId = userData?.agency_id;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const notification = toast.loading("Uploading Ticket...");

    const data = {
      agencyId,
      departureCity,
      arrivalCity,
      departureDateTime,
      arrivalDateTime,
      availableSeats,
      price,
      flightNumber
      };

    const response = await fetch('/api/tickets/uploadtickets', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const result = response.json();
    console.log(result);
    
    setDepartureCity("");
    setArrivalCity("");
    setDepartureDateTime("");
    setArrivalDateTime("");
    setAvailableSeats("");
    setPrice("");
    setFlightNumber("");

    toast.success("Ticket Uploaded Successfully.", {
      id: notification,
    });

  }


  return (
    <div className='p-12'>
      <Toaster />
      <div onClick={() => router.back()} className='text-sm flex items-center space-x-1 text-neutral-400 hover:text-neutral-200'>
        <IoArrowBack />
        <button className=''>Back</button>
      </div>
      <h1 className='font-bold text-xl text-sky-500 mb-5'>Upload Tickets</h1>

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
            <input value={departureDateTime} onChange={(e) => setDepartureDateTime(e.target.value)} className="p-2 w-full outline-none rounded-xl bg-neutral-800" id="departure-datetime" type="datetime-local" placeholder="" required></input>
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
        <button type='submit' className='font-bold text-sky-500 bg-neutral-800 rounded-xl mt-5 p-2 hover:bg-opacity-50'>Upload</button>
      </form>
    </div>
  )
}
