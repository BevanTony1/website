import { Box, Button, Flex, Text, IconButton, Spacer, useColorMode, useColorModeValue, useDisclosure, Collapse, Center } from '@chakra-ui/react'
import Link from 'next/link'
import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon,
} from '@chakra-ui/icons';
const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>

            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                variant={'ghost'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    <DesktopNav />
                </Flex>
                <Spacer />
                <IconButton onClick={toggleColorMode} aria-label="Toggle Theme" variant={'outline'}>
                    {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}

                </IconButton>
            </Flex >
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>

        </>

    )
}

export default Navbar


const DesktopNav = () => {
    return (
        <Flex>
            {NAV_ITEMS.map((item, key) => (
                <Link key={key} href={item.href}>
                    <Text m={'2'} style={{ textDecoration: 'none' }} cursor='pointer'>{item.label}</Text>

                </Link>
            ))}
        </Flex>
    )
}


const MobileNav = () => {
    return (
        <Box py={2}>
            <Center flexDirection={'column'}>

                {NAV_ITEMS.map((item, key) => (
                    <Link key={key} href={item.href}>
                        <Text >{item.label}</Text>
                    </Link>
                ))}
            </Center>
        </Box>
    )
}


interface NavItem {
    label: string,
    href: string
}

const NAV_ITEMS: Array<NavItem> = [

    {
        label: 'About',
        href: '/',
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]