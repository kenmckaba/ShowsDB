/* eslint-disable react/prop-types */
/* xeslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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
} from '@chakra-ui/react'

export default function CoolButton(props) {
  const { variant, children, onClick, isLoading, style } = props

  const chakraStyle = variant === 'small' ? 'sm' : 'lg'

  return (
    <Button
      size={chakraStyle}
      style={style}
      onClick={onClick}
      isLoading={isLoading}
    >
      {children}
    </Button>
  )
}
