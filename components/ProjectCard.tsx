import { Text, Heading, Box, Flex, Divider } from "@chakra-ui/layout"
import Image from 'next/image'

const Project = () => {
    return (
        <Box maxW='400' boxShadow='2xl' borderWidth='1px' borderRadius='lg' >
            <Flex flexDirection={'column'} >
                <Image src='/twitterclone.png' alt='Img' height='225' width='400' />
                <Box padding='3'>
                    <Heading fontSize='20' fontWeight='bold'>Twitter Clone</Heading>
                    <Text fontSize='15'>Simple Twitter Clone demonstrating CRUD operations using NextJS, Prisma as an ORM and Posgres as the Database.</Text>
                    <Text></Text>
                </Box>
            </Flex>

        </Box>
    )
}

export default Project