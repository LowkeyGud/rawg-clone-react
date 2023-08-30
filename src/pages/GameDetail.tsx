import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import useGameDetail from '../hooks/useGameDetail'
import { Heading, Spinner, Text } from '@chakra-ui/react'

const GameDetail = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGameDetail(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text textAlign={'justify'}>{game.description_raw}</Text>
    </>
  )
}

export default GameDetail
