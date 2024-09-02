import React from 'react'
import { Box, Table, Thead, Tbody, Tr, Th, Td, Tooltip } from '@chakra-ui/react'

const ThShort = (props) => <Th {...props} padding={1} />
const TdShort = (props) => <Td {...props} padding={1} />

const Episodes = ({ episodes }) => {
  return (
    <Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <ThShort textAlign="center">Season</ThShort>
            <ThShort textAlign="center">Number</ThShort>
            <ThShort>Title</ThShort>
          </Tr>
        </Thead>
        <Tbody>
          {episodes.map((episode) => {
            const tt = `Season: ${episode.season}, Episode: ${episode.number}, Air Date: ${episode.airdate}`
            return (
              <Tooltip label={tt}>
                <Tr key={episode.id}>
                  <TdShort textAlign="center">{episode.season}</TdShort>
                  <TdShort textAlign="center">{episode.number}</TdShort>
                  <TdShort>{episode.name}</TdShort>
                </Tr>
              </Tooltip>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Episodes
