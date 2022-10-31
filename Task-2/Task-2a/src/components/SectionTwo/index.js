import { Box, Input, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Center, InputGroup, InputRightElement, FormLabel } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import './index.css'
import data from '../../Api/faq.json'

export default function SectionTwo() {
  const [value, setValue] = useState('')
  const [faqs, setFaq] = useState(data.faq)

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleDisplay = (value) => {
    const filteredFaq = data.faq.filter(faq => faq.title.toLowerCase().match(String(value).toLowerCase()))
    setFaq(filteredFaq);
  }

  useEffect(() => {
    handleDisplay(value)
  }, [value])

  return (
    <Box w='100%' className='section-two'>
      <Center>
        <div className="container">
          <Box w='100%'>
            <div className='wrapper'>
              
              <InputGroup size='lg'>
                <label className='label'>Enter your question</label>
                <InputRightElement
                  pointerEvents='none'
                  children={<SearchIcon color='gray.300' />}
                />
                <Input className="value" placeholder='Eg. Activate my SIM' size='lg' defaultValue={value} onChange={handleChange} />
              </InputGroup>

              <div className="wrapper">
                <Accordion allowToggle width='100%'>
                  {faqs.length ? faqs.map((faq) => (
                    <AccordionItem key={faq.id}>
                      <AccordionButton height='64px'>
                        <Box flex="1" textAlign="left">
                          <p style={value ? { fontWeight: 'bold' } : {}}> {faq.title}</p>
                          <small>{faq.body.substring(0, 30) + ' ...'}</small>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={2}>
                        <Box
                          p='40px'
                          color='white'
                          mt='4'
                          bg='teal.500'
                          rounded='md'
                          shadow='md'
                        >
                          {faq.body}
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  )) : <p>No result found</p>}
                </Accordion>
              </div>
            </div>
          </Box>
        </div>
      </Center>
    </Box>
  )
}
