import { Center, Stack, Skeleton } from '@chakra-ui/react'

const SpotifySkelton = () => {

    return (
        <Center>
            <Stack>
                <Skeleton width='40px' />
            </Stack>
        </Center>
    )
}

export default SpotifySkelton