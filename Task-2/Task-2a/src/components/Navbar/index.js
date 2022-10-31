import React from 'react'
import {
  Box,
  Center,
} from '@chakra-ui/react';
import './index.css'
import Wrapper from './Wrapper';

export default function Navbar() {
  return (
    <Box w="100%" h='72px'>
      <Center>
      <Wrapper />
      </Center>
    </Box>
  )
}
