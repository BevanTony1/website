import ProjectCard from '../../components/ProjectCard'
import { Text, Stack, Container, Center, Heading, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'

const Project = () => {
    return (
        <Stack paddingTop='10' paddingBottom='5' justifyContent='center'>
            <Center >
                <Link href='/project/1'>
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gridGap={{ base: 3, sm: 3, md: 5, lg: 5 }}>
                        <ProjectCard />
                        <ProjectCard />

                    </SimpleGrid>
                </Link>
            </Center>
        </Stack >
    )
}

export default Project