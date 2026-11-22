import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'

const apiKey = process.env.MAILGUN_API_KEY as string;
const domain = process.env.DOMAIN as string;

const mailgun = new Mailgun(FormData).client({ username: 'api', key: apiKey });

export default async function name(req: NextApiRequest, res: NextApiResponse) {

    let response;


    try {
      response = await mailgun.messages.create(domain, {
        to: "medranobevantony@gmail.com",
        from: req.body.email,
        subject: req.body.name,
        text: req.body.text,
      });
    } catch (err) {
      const error = err as { status?: number; message?: string };
      return res.status(error.status || 500).json({ error: error.message });
    }

    return res.status(200).json({ result: response.message });
};
