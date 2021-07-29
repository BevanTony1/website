import { IconButton, Center, Text, Stack, Divider, Box, Flex, Spacer, Container, useColorModeValue } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoVercel, IoLogoFirebase } from 'react-icons/io5'
import { BsFillLightningFill } from 'react-icons/bs'
import { SiNextDotJs } from 'react-icons/si'
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {


    return (
        <Container
            borderTop={'1px'}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}

            maxW="container.lg">


            <Flex flexDirection='row' padding='5'>
                <Text className={styles.textContainer} display='inline-block' verticalAlign='middle' >
                    Built with | {<SiNextDotJs />} Nextjs | {<IoLogoFirebase />} Firebase | {<IoLogoVercel />} Vercel | Chakra-UI <BsFillLightningFill />
                </Text>
                <Spacer />
                <Box>
                    <Link href='https://github.com/Bevantootskie' passHref>
                        <a target='_blank' rel='noopenern'>
                            <IconButton marginRight={'3'} aria-label='Github Link'>
                                <AiFillGithub />
                            </IconButton>
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/bevan-tony-medrano-544151179/' passHref>
                        <a target='_blank'>
                            <IconButton aria-label='Linkin Link'>
                                <AiFillLinkedin />
                            </IconButton>
                        </a>
                    </Link>
                </Box>
            </Flex>
        </Container >
    )
}

export default Footer