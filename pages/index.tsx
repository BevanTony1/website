import { Spacer, Button, IconButton, Tooltip, Stack, Avatar, Box, Link, Center, Container, Flex, Heading, Text, useColorModeValue, useBreakpointValue, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, ListItem, useColorMode, Tag } from '@chakra-ui/react'
import { differenceInCalendarYears } from 'date-fns'
import NextLink from 'next/link'
import { DiCss3 } from 'react-icons/di'
import { SiMysql, SiPostgresql, SiNextDotJs, SiJavascript, SiDjango, SiSass, SiGithub, SiTrello, SiFirebase, SiTypescript } from 'react-icons/si'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiPyramid } from 'react-icons/bi'
import { IoLogoPython, IoLogoHtml5 } from 'react-icons/io'
import style from '../styles/Home.module.scss'
import { DiReact } from 'react-icons/di'
import SpotifyNowPlaying from '../components/SpotifyNowPlaying'
import Contact from '../components/Contact'
import { format } from 'date-fns'
export default function Home() {


  return (

    <Container maxW='container.md'>
      <Box paddingTop={'10'} paddingBottom={'10'}>
        <Flex alignItems='center' flexDirection={useBreakpointValue({ base: 'column-reverse', md: 'row' })} >
          <Box>
            <Heading fontSize={'40'}>Hi! I&apos;m Bevan Tony Medrano.</Heading>
            <Text fontSize='md' color={useColorModeValue('gray.700', 'gray.500')} paddingTop={'5'}>
              A try-hard web developer from the Philippines. With {differenceInCalendarYears(new Date(), new Date(2018, 9, 1))} years
             experience in developing applications. I enjoy building applications from scratch, Willing to take on any challenge even with little knowledge
             about. And learning along the process.
             </Text>

            <Text paddingTop="5" color={useColorModeValue('gray.700', 'gray.500')}>
              While you&apos;re here let me know you dropped by. <NextLink href='/guestbook'><Link fontWeight='bold' color='blue.400'>Guest book</Link></NextLink>
            </Text>

            <Flex paddingTop='5' paddingBottom='5' >

              <NextLink href='https://github.com/Bevantootskie' passHref>
                <a target='_blank' rel='noopenern'>
                  <IconButton marginRight={'3'} aria-label='Github Link'>
                    <AiFillGithub />
                  </IconButton>
                </a>
              </NextLink>
              <NextLink href='https://www.linkedin.com/in/bevan-tony-medrano-544151179/' passHref>
                <a target='_blank'>
                  <IconButton aria-label='Linkin Link'>
                    <AiFillLinkedin />
                  </IconButton>
                </a>
              </NextLink>
            </Flex>
          </Box>

          <Box paddingBottom='5'>

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

        <Stack paddingTop='10'>
          <Heading>
            Work Experience
          </Heading>
          <Accordion allowMultiple className={style.accordionContainer}>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "blue.200", color: "black" }}>
                <Box flex="1" textAlign="left" display='inline-block'>
                  <Text fontWeight='bold'>{format(new Date(2019, 6, 1), 'PPP')} - {format(new Date(2021, 4, 31), 'PPP')}  <Tag bg='green.600' color='black'>Recent</Tag></Text>
                </Box>
                <AccordionIcon />
              </AccordionButton >
              <AccordionPanel pb={4}>
                <List>
                  <ListItem ><Text display='inline-block' fontWeight='bold'>Mid Systems Developer </Text> @ Gaisano Unipace Corporation</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: "blue.200", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight='bold'>{format(new Date(2019, 0, 16), 'PPP')} - {format(new Date(2019, 5, 30), 'PPP')} </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem ><Text display='inline-block' fontWeight='bold'>Junior Systems Developer </Text> @ Gaisano Unipace Corporation</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton _expanded={{ bg: "blue.200", color: "white" }}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight='bold'>{format(new Date(2018, 8, 1), 'PPP')} - {format(new Date(2019, 0, 15), 'PPP')} </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem ><Text display='inline-block' fontWeight='bold'>Implementation Specialist </Text> @ Gaisano Unipace Corporation</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>


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
            <Tooltip hasArrow placement='auto' label="Can't code without my Jam." aria-label="A tooltip">
              <AccordionItem >
                <AccordionButton bg={useColorModeValue('green.200', 'green.600')} >
                  <Box flex="1" textAlign="left" >
                    <Text fontWeight='bold'>Spotify - Listening to...</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <List>
                    <ListItem><SpotifyNowPlaying /></ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Tooltip>
          </Accordion>

        </Stack>


      </Box>


      <Box>
        <Contact />
      </Box>

    </Container >
  )
}
