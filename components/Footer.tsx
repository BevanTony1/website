import { IconButton, Center, Text, Stack, Divider, Box, Flex, Spacer, Container, useColorModeValue } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {


    return (
        <Container
            borderTop={'1px'}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}

            maxW="container.lg">


            <Flex flexDirection='row' padding='5'>
                <Text >
                    Built with | Nextjs | Firebase | Vercel | Chakra-UI
                </Text>
                <Spacer />
                <Box>
                    <a target="_blank" href='https://github.com/Bevantootskie' >
                        <IconButton marginRight={'3'} aria-label='Github Link'>
                            <AiFillGithub />
                        </IconButton>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/bevan-tony-medrano-544151179/'>
                        <IconButton aria-label='Linkin Link'>

                            <AiFillLinkedin />
                        </IconButton>
                    </a>
                </Box>
            </Flex>
        </Container >
    )
}

export default Footer