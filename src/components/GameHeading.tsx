import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useFindPlatform from '../hooks/useFindPlatform'
import useGenres from '../hooks/useGenre'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

  const platform = useFindPlatform(gameQuery.platformId)

  const { data: genres } = useGenres();
  const genre = genres?.results.find(eachGenre => eachGenre.id == gameQuery.genreId)
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading