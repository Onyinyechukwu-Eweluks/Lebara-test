import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import './index.css'

export default function SectionOne() {
  return (
    <Box w='100%' h='304px' bg='#199EF7' className='section-one'>
      <div className="text">
      <Center h='56px'>
        <p className='text-header'>Customer Service</p>
      </Center>
      <Center h='28px' mt='30px'>
        <p className='text-body'>Today you can reach us between 09:00 and 18:00</p>
      </Center>
      </div>
    </Box>
  )
}
