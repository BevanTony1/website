import { useState } from 'react'
import { Button, InputLeftAddon, Stack, Center, Input, Heading, Textarea, InputGroup } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
interface Inputs {
    email: string;
    name: string,
    text: string;

}

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm<Inputs>()

    const sendEmail = async (data: Inputs) => {
        try {
            setIsLoading(true)
            const res = fetch('api/email', {
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
        <Stack>
            <Center>
                <Heading>
                    Contact Me
                </Heading>
            </Center>
            <Stack onSubmit={handleSubmit(sendEmail)} as={'form'} margin={'5'} padding={'5'}>
                <Input type='text' placeholder='Name' {...register('name')}></Input>
                <Input type='email' placeholder='Email' {...register('email')}></Input>
                <InputGroup gridGap='3' flexDirection={{ base: 'column', lg: 'row' }}>
                    <Input value='medranobevantony@gmail.com'></Input>
                    <Input value='+639067281993'></Input>
                </InputGroup>
                <Textarea {...register('text')} placeholder='Message me.'></Textarea>,
            <Center>
                    {!isLoading ? (<Button type='submit'>Submit</Button>) : (<Button disabled type='submit'>Submit</Button>)}
                </Center>
            </Stack>
        </Stack >

    )
}

export default Contact