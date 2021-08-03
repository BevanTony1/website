import styles from '../styles/Spotify.module.scss'
import { Box, Text, Stack, Flex, Image } from '@chakra-ui/react'
import useSWR from 'swr'

const SpotifyNowPlaying = () => {

  const { data, error } = useSWR('api/spotify')


  if (!data || data.isPlaying == false) {
    return (
      <Box>
        <Text>Not Playing...</Text>
      </Box>
    )
  }

  return (

    <Flex flexDirection='row' paddingLeft='5' paddingTop='5'>
      <div className={styles.imageContainer}>
        <Image src={data.albumImageUrl} alt='Spotify' height='150' width='150' />
      </div>
      <Stack paddingLeft='5' display='flex' justifyContent='center' fontFamily='monospace' paddingBottom='4'>
        <Text paddingTop='2'>Album: {data.album}</Text>
        <Text>Title: {data.title}</Text>
        <Text>Artist: {data.artist}</Text>
      </Stack>
    </Flex>
  )
}
export default SpotifyNowPlaying