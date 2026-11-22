import { useState } from 'react'
import { useForm } from "react-hook-form";
import { MailIcon, PhoneIcon, SendIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Section from '@/components/Section'

interface Inputs {
    email: string;
    name: string,
    text: string;

}

const CONTACT_LINKS = [
    { icon: <MailIcon />, label: 'medranobevantony@gmail.com', href: 'mailto:medranobevantony@gmail.com' },
    { icon: <PhoneIcon />, label: '+639067281993', href: 'tel:+639067281993' },
]

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm<Inputs>()

    const sendEmail = async (data: Inputs) => {
        try {
            setIsLoading(true)
            fetch('/api/email', {
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' },
                method: 'POST',
            })

            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
        reset()
    }

    return (
        <Section
            id="contact"
            eyebrow="Get in touch"
            title="Contact Me"
            description="Have a project in mind or just want to say hi? Drop me a message."
        >
            <Card>
                <CardContent className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 sm:flex-row">
                        {CONTACT_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="flex flex-1 items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2.5 text-sm transition-colors hover:bg-muted [&_svg]:size-4 [&_svg]:text-muted-foreground"
                            >
                                {link.icon}
                                <span className="truncate">{link.label}</span>
                            </a>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Input className="h-10" type='text' placeholder='Name' {...register('name')} />
                            <Input className="h-10" type='email' placeholder='Email' {...register('email')} />
                        </div>
                        <Textarea className="min-h-32" {...register('text')} placeholder='Message me.' />
                        <Button type='submit' disabled={isLoading} className="h-10 self-end rounded-full px-5">
                            Send message <SendIcon />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Section>
    )
}

export default Contact
