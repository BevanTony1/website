import { Flex, IconButton, Link, Spacer, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'

import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    return (
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
            <Flex
                flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Link href='/'>Title</Link>
            </Flex>
            <Spacer />
            <IconButton onClick={toggleColorMode} aria-label="Toggle theme" variant={'outline'}>
                {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}

            </IconButton>
        </Flex >
    )
}

export default Navbar