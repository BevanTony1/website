import { Text, Input, Stack, Box, Flex, Heading, Center, Button, Container, useToast } from '@chakra-ui/react'
import useSWR, { mutate } from 'swr'
import { useAuth } from '../lib/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { createMessage } from '../lib/db'
import MessageSkeleton from '../components/MessageSkeleton'
import { useState } from 'react'
import { format, parseISO } from 'date-fns'
interface Inputs {
    message: string
}

interface MessageProps {
    id: string;
    message: string;
    created_at: string;
    author: string;

}


const Guestbook = () => {
    // const fetcher = (...args: any) => fetch(args).then(res => res.json())


    const auth = useAuth()
    const toast = useToast()
    const testAuth = useState(true)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
    const { data, error } = useSWR('api/message')



    const onCreateMessage: SubmitHandler<Inputs> = data => {
        try {

            const newMessage = {
                authorId: auth.user.uid,
                author: auth.user.displayName,
                created_at: new Date().toISOString(),
                ...data
            }
            createMessage(newMessage)
            setValue('message', '')
            toast({
                title: "Creation Successful",
                description: "Message has been created",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            // make adding dynamic :)
            mutate('api/message', async (data: any) => {
                return { messages: [newMessage, ...data.messages,] }
            }, false)
        } catch (err) {
            toast({
                title: "Something went wrong",
                description: "Message has not been save",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <Container >
            <Flex flexDirection='column'>
                <Heading paddingTop={'5'}>Guestbook</Heading>
                <Stack>

                    <Text textAlign='left' paddingTop={'5'}>Leave a comment below. Any message would be appreciated. Keep it friendly though. </Text>

                </Stack>
                <Center>
                    <Box as='form' onSubmit={handleSubmit(onCreateMessage)} m={'5'} p={'5'} w={'700px'} borderWidth={'1px'} borderRadius={'lg'}>
                        <Heading paddingBottom={'3'} fontSize={'30'}>Comments</Heading>
                        <Text paddingBottom={'5'}>Leave a message.</Text>

                        {(!auth.user) ?
                            <Button backgroundColor={'blue.400'} onClick={() => auth.signinWithGithub()}>Signin</Button>
                            :
                            <Box borderRadius='lg' borderWidth={'1px'}>
                                <Center>
                                    <Input placeholder={'Write a message'} {...register('message', { required: true })} ></Input>
                                    <Button variant="ghost" type='submit'>Submit</Button>
                                </Center>
                            </Box>
                        }
                    </Box>
                </Center>
            </Flex>
            {/* Skeleton */}
            {(!data) ?
                <Container paddingBottom={'15'}>
                    <MessageSkeleton />
                </Container>
                :
                <Container >
                    {data.messages.map((item: MessageProps) => (
                        <Box padding={'3'} key={item.id}>
                            <Text paddingBottom={'5'} fontWeight={'bold'}>{item.message}</Text>
                            <Text>{item.author} / {format(parseISO(item.created_at), 'PPpp')}</Text>
                        </Box>
                    ))}
                </Container>
            }

        </Container >
    )
}
export default Guestbook