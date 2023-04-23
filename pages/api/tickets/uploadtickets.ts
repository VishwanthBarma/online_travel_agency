// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  place: string,
  time: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === "POST"){
    res.status(200).json(req.body);
    const data = req.body;

    const { error } = await supabase
      .from('ticketsAvailable')
      .insert({departFromPlace : data.departFrom.place, departFromTime: data.departFrom.time,
              goingToPlace: data.goingTo.place, goingToTime: data.goingTo.time,
              departureDate: data.departureDate
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
