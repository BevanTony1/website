import { Spacer, IconButton, Stack, Avatar, Box, Link, Center, Container, Flex, Heading, Text, useColorModeValue, useBreakpointValue, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, ListItem, useColorMode } from '@chakra-ui/react'
import { differenceInCalendarYears } from 'date-fns'
import { DiCss3 } from 'react-icons/di'
import NextLink from 'next/link'
import { SiMysql, SiPostgresql, SiNextDotJs, SiJavascript, SiDjango, SiSass, SiGithub, SiTrello, SiFirebase, SiTypescript } from 'react-icons/si'
import { BiPyramid } from 'react-icons/bi'
import { IoLogoPython, IoLogoHtml5 } from 'react-icons/io'
import style from '../styles/Home.module.scss'
import { DiReact } from 'react-icons/di'
import Contact from '../components/Contact'
export default function Home() {


  return (

    <Container maxW='container.md'>
      <Box paddingTop={'10'} paddingBottom={'10'}>
        <Flex flexDirection={useBreakpointValue({ base: 'column', md: 'row' })} >
          <Box>
            <Heading fontSize={'40'}>Hi! I&apos;m Bevan Tony Medrano.</Heading>
            <Text fontSize='md' color={useColorModeValue('gray.700', 'gray.500')} paddingTop={'5'}>
              A try-hard web developer from the Philippines. With {differenceInCalendarYears(new Date(), new Date(2018, 9, 1))} years
             experience in developing applications. I enjoy building applications from scratch, take on challenges even with little knowledge
             about. And learning along the process.


             </Text>

            <Text paddingTop="5" color={useColorModeValue('gray.700', 'gray.500')}>
              While you&apos;re here let me know you dropped by. <NextLink href='/guestbook'><Link fontWeight='bold' color='blue.400'>Guest book</Link></NextLink>
            </Text>
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
              name="Bevan Tony"
            />
          </Box>

          <Box>
          </Box>
        </Flex>

        <Stack>

          <Heading paddingTop='10'>
            Tech Stack
          </Heading>
          <Accordion className={style.accordionContainer} defaultIndex={[0]} allowMultiple>
            < AccordionItem >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">Frameworks</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem>
                    <SiNextDotJs /> Nextjs
                  </ListItem>
                  <ListItem>
                    <DiReact /> Reactjs
                  </ListItem>
                  <ListItem>
                    <SiDjango /> Django
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>


            < AccordionItem >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight='bold'>Languages</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem>
                    <IoLogoPython /> Python
                  </ListItem>
                  <ListItem>
                    <SiJavascript />/<SiTypescript /> JavaScript/TypeScript
                  </ListItem>
                  <ListItem>
                    <IoLogoHtml5 /> HTML
                  </ListItem>
                  <ListItem>
                    <DiCss3 /> CSS
                  </ListItem>
                  <ListItem>
                    <SiSass /> SASS
                  </ListItem>


                </List>
              </AccordionPanel>
            </AccordionItem>

            < AccordionItem >
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight='bold'>Tools</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem>
                    <SiGithub /> Github
                  </ListItem>
                  <ListItem>
                    <SiTrello /> Trello
                  </ListItem>
                  <ListItem>
                    <BiPyramid /> Prisma
                  </ListItem>
                  <ListItem>
                    <SiFirebase /> Firebase
                  </ListItem>
                  <ListItem>
                    <SiPostgresql /> Posgres
                  </ListItem>
                  <ListItem>
                    <SiMysql /> Mysql
                  </ListItem>




                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

        </Stack>


      </Box>


      <Box>
        <Contact />
      </Box>

    </Container >
  )
}
