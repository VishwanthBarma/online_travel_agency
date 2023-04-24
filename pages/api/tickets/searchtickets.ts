// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next'

interface MyTable{
    id: number;
    departFromPlace: Text;
    departFromTime: string;
    goingToPlace: Text;
    goingToTime: string;
    deapartureDate: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "POST"){
    const resData = req.body;

//     {departFromPlace : data.departFrom.place, departFromTime: data.departFrom.time,
//         goingToPlace: data.goingTo.place, goingToTime: data.goingTo.time,
//         departureDate: data.departureDate
// }

    const { data, error } = await supabase
      .from('ticketsAvailable')
      .select('*')
      .eq('departFromPlace', resData.departFrom.place)


    if(error){
      console.log(error);
    }else{
        console.log(data);
      res.status(200).json(data);
    }
    
  }else{
    console.log("Method received of type GET");
    // res.status(200).json({place: "Example", time: "Example"})
  }

}
