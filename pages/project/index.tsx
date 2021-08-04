import ProjectCard from '../../components/ProjectCard'
import { Text, Stack, Container, Center, Heading, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import data from '../../public/projects'

const Project = () => {

    return (
        <Stack paddingTop='10' paddingBottom='5' justifyContent='center'>
            <Center >
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gridGap={{ base: 3, sm: 3, md: 5, lg: 5 }}>
                    {data.map((item, key) => (
                        <ProjectCard {...item} key={key} />
                    ))}
                </SimpleGrid>
            </Center>
        </Stack >
    )
}

export default Project