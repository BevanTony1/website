import { Text, Input, Stack, Box, Flex, Heading, Center, Button, Container } from '@chakra-ui/react'
import { useAuth } from '../lib/auth'


const Guestbook = () => {

    const auth = useAuth()

    return (
        <Container >
            <Flex flexDirection='column'>
                <Heading paddingTop={'5'}>Guestbook</Heading>
                <Stack>

                    <Text textAlign='center' paddingTop={'5'}>Leave a comment below. It could be anything – Keep it friendly though. </Text>

                    <Text textAlign='center'>Current User: {auth.user?.email}</Text>
                </Stack>
                <Center>
                    <Stack m={'5'} p={'5'} maxW={'xl'} borderWidth={'1px'} borderRadius={'lg'}>
                        <Heading fontSize={'30'}>Comments</Heading>
                        <Text>Leave a message on where I can improve on:</Text>

                        <Box borderRadius='lg' borderWidth={'1px'}>
                            <Center>
                                <Input ></Input><Button variant="ghost">Submit</Button>
                            </Center>
                        </Box>
                        {(!auth.user) ? <Button backgroundColor={'blue.400'} onClick={(e) => auth.signinWithGithub()}>Signin</Button> : <Button bg={'blueviolet'} onClick={() => auth.signout()}>Sign Out</Button>}
                    </Stack>
                </Center>
            </Flex>
        </Container >
    )
}
export default Guestbook