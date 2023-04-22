// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  place: string,
  time: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === "POST"){
    res.status(200).json(req.body);
    console.log(req.body);
  }else{
    console.log("Method received of type GET");
    res.status(200).json({place: "Example", time: "Example"})
  }

}
