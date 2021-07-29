import { Text, Flex, Heading, Center, Button } from '@chakra-ui/react'
import { useAuth } from '../lib/auth'


const Guestbook = () => {

    const auth = useAuth()

    return (
        <Center alignItems='center'>

            <Flex flexDirection='column'>
                <Heading>Main Content</Heading>

                <Text>Current User: {auth.user?.email}</Text>
                {(!auth.user) ? <Button backgroundColor={'blue.400'} onClick={(e) => auth.signinWithGithub()}>Signin</Button> : <Button bg={'blueviolet'} onClick={() => auth.signout()}>Sign Out</Button>}
            </Flex>
        </Center>
    )
}
export default Guestbook