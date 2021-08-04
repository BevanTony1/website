import { Text, Button, Heading, Box, Flex, Divider, Center } from "@chakra-ui/react"
import Link from 'next/link'
import Image from 'next/image'

interface PropsData {
    title: string;
    description: string;
    repository: string;
    image: string;

}

const Project = (props: PropsData) => {
    return (
        <Box cursor='pointer' maxW='400' boxShadow='2xl' borderWidth='1px' borderRadius='lg' >
            <Link href={props.repository}>
                <Flex flexDirection={'column'} >
                    <Image src={props.image} alt='Img' height='225' width='400' />
                    <Box padding='3'>
                        <Heading fontSize='20' fontWeight='bold'>{props.title}</Heading>
                        <Text textAlign='left' fontSize='15'>{props.description}</Text>
                    </Box>
                </Flex>

            </Link>
        </Box>
    )
}

export default Project