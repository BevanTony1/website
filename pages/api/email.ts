import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Body {
  email: string;
  text: string;
  subject: string;
}

interface EmailRequest extends NextApiRequest {
  body: Body;
}

export default async function handler(req: EmailRequest, res: NextApiResponse) {
  const body = req.body;
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "medranobevantony@gmail.com",
    replyTo: body.email,
    subject: body.subject,
    text: `From: ${body.email}\n\n${body.text}`,
  });
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ data });
}
