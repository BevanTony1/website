import { Button, Box, Center, Container, Flex, Heading, Text, useColorModeValue, useColorModePreference } from '@chakra-ui/react'

export default function Home() {


  return (

    <Container w={'90%'}>
      <Box paddingTop={'10'} paddingBottom={'10'}>

        <Heading fontSize={'40'}>Hello! I'm Bevan Tony Medrano</Heading>
        <Text color={useColorModeValue('gray.700', 'gray.500')} paddingTop={'8'}>I’m a try-hard web developer from the Philippines.</Text>


      </Box>
    </Container >
  )
}
