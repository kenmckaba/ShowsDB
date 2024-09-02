import React from 'react'
import { arrayOf, func, shape } from 'prop-types'
import { VStack } from '@chakra-ui/react'
import Show from './Show'

export default function ShowList({
  shows,
  handleShowClick,
  handleEpisodesClick,
}) {
  return (
    <VStack w="100%" spacing="20px">
      {shows.map((show) => (
        <Show
          showInfo={show}
          key={show.show.id}
          handleShowClick={handleShowClick}
          handleEpisodesClick={handleEpisodesClick}
        /> // apparently show.id is not always unique
      ))}
    </VStack>
  )
}

ShowList.propTypes = {
  shows: arrayOf(shape({})).isRequired,
  handleShowClick: func.isRequired,
}
