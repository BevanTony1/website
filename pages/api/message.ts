// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { compareDesc, parseISO } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next'
import firebaseAdmin from '../../lib/firebase-admin';

type Data = {
  messages: Object;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const db = firebaseAdmin
  const snapshot = db.collection('messages');
  let messages: Object[] = []
  try {
    const doc = await snapshot.orderBy('created_at', 'desc').get();
    doc.forEach(doc => {
      messages.push({ id: doc.id, ...doc.data() })
    });




  } catch (err) {
    console.log(err)
  }


  res.status(200).json({ messages })
}