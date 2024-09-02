import React from 'react'
import { Flex, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'

function App() {
  return (
    <VStack h="100%" spacing={0}>
      <Header />
      <Flex
        id="overall"
        w="100%"
        borderWidth="40px"
        padding="20px 60px"
        alignItems="flex-start"
      >
        <SearchBox />
      </Flex>
    </VStack>
  )
}

export default App
