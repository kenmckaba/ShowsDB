import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <Box width="100%">
      <Flex
        alignItems="center"
        h="3rem"
        bg="brand.main"
        color="white"
        padding="0 3rem"
        justifyContent="space-between"
      >
        <Box>Show Finder</Box>
        <ThemeToggle />
      </Flex>
    </Box>
  )
}
