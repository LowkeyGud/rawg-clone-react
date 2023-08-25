import { Heading } from '@chakra-ui/react'
import useFindPlatform from '../hooks/useFindPlatform'
import useGenres from '../hooks/useGenre'
import GameQueryStore from '../store'


const GameHeading = () => {

  const genreId = GameQueryStore(s => s.gameQuery.genreId);
  const platformId = GameQueryStore(s => s.gameQuery.platformId);

  const platform = useFindPlatform(platformId)

  const { data: genres } = useGenres();
  const genre = genres?.results.find(eachGenre => eachGenre.id == genreId)
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading