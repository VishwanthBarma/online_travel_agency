// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "POST"){
    res.status(200).json(req.body);
    const data = req.body;

    const { error } = await supabase
      .from('flight_table')
      .insert({
        agency_id: data.agencyId,
        departure_city: data.departureCity.toLowerCase(),
        arrival_city: data.arrivalCity.toLowerCase(),
        departure_datetime: data.departureDateTime,
        arrival_datetime: data.arrivalDateTime,
        available_seats: data.availableSeats,
        price: data.price,
        flight_number: data.flightNumber
      })

    if(error){
      console.log(error);
    }else{
      console.log(data);
    }
    
  }else{
    console.log("Method received of type GET");
    res.status(200).json({place: "Example", time: "Example"})
  }

}
