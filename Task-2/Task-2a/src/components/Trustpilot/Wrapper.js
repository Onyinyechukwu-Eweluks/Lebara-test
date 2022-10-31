import { Box, Center, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Wrapper() {
  return (
    <Box h='32px' w="100%">
      <Center h='60px'>
      <Stack direction={['column', 'row']} spacing='24px'>
        <ul class="pilot-list">
          <li class="pilot-list-item">Excellent</li>
          <li class="pilot-list-item">
            <img src="/images/Stars.png" alt="" />
          </li>
          <li class="pilot-list-item">11.594 reviews on</li>
          <li class="pilot-list-item pilot-logo">
            <img src="/images/Logo-6.png" alt="" />
          </li>
        </ul>
      </Stack>
      </Center>
    </Box>
  )
}
