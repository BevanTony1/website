import { Spacer, Avatar, Box, Center, Container, Flex, Heading, Text, useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import { differenceInCalendarYears } from 'date-fns'
export default function Home() {


  return (

    <Container maxW='container.md'>
      <Box paddingTop={'10'} paddingBottom={'10'}>
        <Flex flexDirection={useBreakpointValue({ base: 'column', md: 'row' })} >
          <Box>

            <Heading fontSize={'40'}>Hi! I&apos;m Bevan Tony Medrano.</Heading>
            <Text fontSize='md' color={useColorModeValue('gray.700', 'gray.500')} paddingTop={'5'}>I’m a try-hard web developer from the Philippines. I have {differenceInCalendarYears(new Date(), new Date(2018, 9, 1))} years experience in
        developing web applications.</Text>

          </Box>
          <Spacer />
          <Box
          >

            <Avatar
              marginLeft={'5'}
              size='lg'
              boxSize={200}

              borderRadius="full"
              src="me.jpg"
              alt="Bevan Tony"
            />
          </Box>
        </Flex>
      </Box>
    </Container >
  )
}
