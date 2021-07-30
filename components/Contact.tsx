import { Button, Stack, Center, Input, Heading, Textarea } from '@chakra-ui/react'

const Contact = () => {
    return (
        <Stack>
            <Center>
                <Heading>
                    Contact Me
                </Heading>
            </Center>
            <Stack margin={'5'} padding={'5'}>
                <Input placeholder='Name'></Input>
                <Input placeholder='Email'></Input>
                <Textarea placeholder='Message me :)'></Textarea>
                <Center>
                    <Button>Submit</Button>
                </Center>
            </Stack>
        </Stack>

    )
}

export default Contact