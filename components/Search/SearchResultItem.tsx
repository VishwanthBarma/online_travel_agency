import { supabase } from '@/utils/supabaseClient';
import { capitalize } from 'lodash';
import React, { useEffect, useState } from 'react'
import { PropagateLoader, SyncLoader } from 'react-spinners';

type Agency = {
    address: string,
    agency_id: number,
    agency_name: string,
    auth_id: string,
    city: string,
    contact_number: string,
    country: string,
    email: string,
    is_verified: boolean,
    postal_code: string,
    role: string,
    state: string,
}

function SearchResultItem({data, index}: any) {
    const [moreClicked, setMoreClicked] = useState(false);

    const departure_date = new Date(data.departure_datetime);
    const arrival_date = new Date(data.arrival_datetime);

    const [agencyDetails, setAgencyDetails] = useState<Agency>();

    const fetchAgencyDetails = async () => {
        const { data: agency, error } = await supabase
            .from('agency_table')
            .select('*')
            .eq('agency_id', data.agency_id)
            .single();

        if (error) {
            console.error('Error fetching agency details:', error);
        } else {
            setAgencyDetails(agency);
        }
    }

    const handleMore = (e: any) => {
        e.preventDefault();
        setMoreClicked(!moreClicked);
        fetchAgencyDetails();
    }

    const options:  Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const handleBookNow = (e: any) => {
        e.preventDefault();
        // Ticket Booking Integration
    }

  return (
    <div className='flex flex-col p-2 font-medium bg-neutral-800 rounded-xl'>
        <div className='flex items-center'>
            <h1 className='w-20 text-neutral-400'>{index}</h1>
            <div className='flex flex-1'>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Departure</h1>
                    <h1 className='font-semibold text-yellow-500'>{capitalize(data.departure_city)}</h1>
                    <h1 className='font-semibold text-sm'>{departure_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{departure_date.toLocaleTimeString()}</h1>
                </div>
                <h1 className='w-1/5'>-</h1>
                <div className='w-2/5'>
                    <h1 className='text-xs text-neutral-500 uppercase'>Arrival</h1>
                    <h1 className='font-semibold text-yellow-500'>{capitalize(data.arrival_city)}</h1>
                    <h1 className='font-semibold text-sm'>{arrival_date.toLocaleDateString('en-US', options)}</h1>
                    <h1 className='font-medium text-xs text-neutral-400'>{arrival_date.toLocaleTimeString()}</h1>
                </div>
            </div>
            <h1 className='w-1/6 font-bold text-green-500 text-center'>{data.price}$</h1>
            {
                !moreClicked?
                <button onClick={handleMore} className='w-1/6 font-normal text-sky-500'>More</button>
                :
                <button onClick={() => setMoreClicked(!moreClicked)} className='w-1/6 font-normal text-neutral-300'>Less</button>
            }
        </div>

        {
            moreClicked &&
            <div className='bg-neutral-900 rounded-xl mt-3 p-3'>
                {
                    agencyDetails ?
                    <div className="flex">
                        <div className='w-3/5 flex flex-col'>
                            <h1 className='font-bold text-sm mb-2 uppercase'>Agency Details</h1>
                            <h1 className='text-xs uppercase text-neutral-500'>Name : 
                                <span className='text-neutral-200 normal-case text-sm'> {agencyDetails?.agency_name}</span>
                            </h1>
                            <h1 className='text-xs uppercase text-neutral-500'>Email : 
                                <span className='text-neutral-200 normal-case text-sm'> {agencyDetails?.email}</span>
                            </h1>
                            <h1 className='text-xs uppercase text-neutral-500'>Contact Number : 
                                <span className='text-neutral-200 normal-case text-sm'> {agencyDetails?.contact_number}</span>
                            </h1>
                            <h1 className='text-xs uppercase text-neutral-500'> 
                                <span className='text-neutral-200 normal-case text-sm'>{agencyDetails?.city}</span>, 
                                <span className='text-neutral-200 normal-case text-sm'> {agencyDetails?.state}</span>, 
                                <span className='text-neutral-200 normal-case text-sm'> {agencyDetails?.country}</span>
                            </h1>
                        </div>

                        <div className='w-2/5 bg-neutral-800 rounded-xl flex flex-col p-4 justify-between'>
                            <div className='flex justify-between text-neutral-200'>
                                <h1>You Pay : </h1>
                                <h1 className='font-bold'>{data.price}$</h1>
                            </div>
                            <button onClick={handleBookNow} className='font-semibold bg-yellow-500 text-neutral-800 p-1 rounded-xl'>Book Now</button>
                        </div>
                    </div>
                    :
                    <h1 className='font-sembold text-sm text-center p-3'>
                        <PropagateLoader color="rgb(14 165 233)" size={15}/>
                    </h1>
                }
            </div>
        }

    </div>
  )
}

export default SearchResultItem