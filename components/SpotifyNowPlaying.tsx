import styles from '../styles/Spotify.module.scss'
import { Box, Center, Text, Stack, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import SpotifySkeleton from './SpotifySkeleton'
import useSWR from 'swr'

const SpotifyNowPlaying = () => {


  const { data, error } = useSWR('api/spotify')

  if (!data) {
    return <SpotifySkeleton />
  }


  console.log(data)

  return (
    <Center>
      <Box textAlign='left' border='1px' width={{ lg: '80%', md: '50%', base: '100%' }} borderRadius='25px'>
        <Center>

          <Flex flexDirection='column' paddingTop='5'>
            <div className={styles.imageContainer}>
              <Image src={data.albumImageUrl} height='150' width='150' />
            </div>
            <Stack fontFamily='monospace' paddingBottom='4'>
              <Text paddingTop='2'>Album: {data.album}</Text>
              <Text>Title: {data.title}</Text>
              <Text>Artist: {data.artist}</Text>
            </Stack>
          </Flex>
        </Center>
      </Box >
    </Center >
  )
}
export default SpotifyNowPlaying