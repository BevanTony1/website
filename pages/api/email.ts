import type { NextApiRequest, NextApiResponse } from 'next'


const mailgunSdk = require('mailgun-js');
const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;

console.log(apiKey, domain)
const mailgun = mailgunSdk({ apiKey, domain });
console.log(mailgun)

export default async function name(req: NextApiRequest, res: NextApiResponse) {

    let response;


    try {
      response = await mailgun.messages().send({
        to: "medranobevantony@gmail.com",
        from: req.body.email,
        subject: req.body.name,
        text: req.body.text,
      });
    } catch (error:any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ result: response.message });
};
