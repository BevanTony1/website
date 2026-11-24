import { useState } from "react";
import { useForm } from "react-hook-form";
import { MailIcon, PhoneIcon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Section from "@/components/Section";

interface Inputs {
  email: string;
  name: string;
  subject: string;
  text: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendEmail = async (data: Inputs) => {
    try {
      setIsLoading(true);
      fetch("/api/email", {
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
        method: "POST",
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Contact Me"
      description="Have a project in mind or just want to say hi? Drop me a message."
    >
      <Card>
        <CardContent className="flex flex-col gap-6">
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col gap-3"
          >
            <Input
              className="h-10"
              type="text"
              placeholder="Subject"
              {...register("subject")}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                className="h-10"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              <Input
                className="h-10"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <Textarea
              className="min-h-32"
              {...register("text")}
              placeholder="Message me."
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-10 self-end rounded-full px-5"
            >
              Send message <SendIcon />
            </Button>
          </form>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Contact;
