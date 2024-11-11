// pages/api/hello.ts

//import { validateYupSchema } from 'formik';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
 
  if(req.method === "POST"){
    const {name, email, message} = req.body;
    if( !name || !email || !message){
      return res.status(400).json({ message: 'Bad Request' });
    }
  }
  console.log(req.body);

 return res.status(400).json({ message: 'Bad Request' });
}

export  default handler;