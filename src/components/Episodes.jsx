import React from 'react'
import { Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const Episodes = (episodes) => {
  return (
    <Box>
      <List spacing={3}>
        {episodes.episodes.map((episode) => (
          <ListItem key={episode.id}>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {episode.season} {episode.number} {episode.name}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Episodes
