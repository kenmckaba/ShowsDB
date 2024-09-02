/* xeslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import {
  Button,
  Flex,
  HStack,
  VStack,
  Spinner,
  useToast,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { searchShows } from '../api/search-shows'
import ShowList from './ShowList'
import CoolButton from './CoolButton'
import Episodes from './Episodes'

export default function SearchBox() {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [descModalShow, setDescModalShow] = useState(false)
  const [modalEpisodesShow, setModalEpisodesShow] = useState(false)

  const toast = useToast()

  const doErrorToast = () => {
    toast({
      title: 'Error',
      description: 'Error fetching list of shows',
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }

  // just to demonstrate the loading appearance
  const onShowLoading = ({ target: { checked } }) => {
    setIsLoading(checked)
  }

  const handleShowClick = (showInfo) => {
    console.log('handleShowClick', showInfo)
    setDescModalShow(showInfo)
  }

  const handleEpisodesClick = (episodes) => {
    console.log('handleEpisodesClick', episodes)
    setModalEpisodesShow(episodes)
  }

  const modalClose = () => {
    setDescModalShow(null)
    setModalEpisodesShow(null)
  }

  const doSearch = async (term) => {
    try {
      setIsLoading(true)
      const results = await searchShows(term)
      setIsLoading(false)
      setSearchResults(results)
    } catch (error) {
      setIsLoading(false)
      setSearchResults([])
      doErrorToast()
    }
  }

  const onChange = (val) => {
    doSearch(val.target.value)
  }

  return (
    <>
      <VStack width="100%">
        <HStack w="100%" justifyContent="center" mb="20px">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            h="50px"
            w="70%"
            backgroundColor="brand.shade"
            borderRadius="8px"
            border="1px solid red"
          >
            <SearchIcon margin="5" />
            <DebounceInput
              placeholder="Search show titles"
              onChange={onChange}
              minLength={2}
              debounceTimeout={1000}
              style={{ width: '100%', 'padding-left': '5px', autofocus: true }}
              autoFocus
            />
            {/* <Input placeholder="Search show titles" onChange={onChange} /> */}
            <CoolButton
              variant="large"
              isLoading={isLoading}
              onClick={onChange}
              style={{ 'margin-left': '10px' }}
            >
              Search
            </CoolButton>
          </Flex>
        </HStack>
        {
          // controls to test isLoading and isApiError handling
          !searchResults.length && (
            <HStack spacing="20" margin="0">
              <Checkbox onChange={onShowLoading} size="sm">
                (Test loading spinner)
              </Checkbox>
              <Button
                variant="link"
                bg="white"
                size="sm"
                fontWeight="normal"
                onClick={doErrorToast}
              >
                (Test error)
              </Button>
            </HStack>
          )
        }
        {isLoading && <Spinner />}
        {!!searchResults.length && (
          <>
            <Box color="red">Click a show to see details</Box>
            <ShowList
              shows={searchResults}
              handleShowClick={handleShowClick}
              handleEpisodesClick={handleEpisodesClick}
            />
          </>
        )}
      </VStack>

      {/* Should be separate component */}
      <Modal isOpen={!!descModalShow} onClose={modalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{descModalShow?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              dangerouslySetInnerHTML={{ __html: descModalShow?.summary }}
            ></Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={!!modalEpisodesShow} onClose={modalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Episodes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!!modalEpisodesShow && <Episodes episodes={modalEpisodesShow} />}
            {/* <Box maxHeight="70vh" overflow="auto">
              {!!modalEpisodesShow &&
                modalEpisodesShow.map((episode) => <Text>{episode.name}</Text>)}
            </Box> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
