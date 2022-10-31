import React from 'react';
import {
  ChakraProvider,
  theme,
  VStack,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Trustpilot from './components/Trustpilot';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Navbar />
        <Trustpilot />
        <SectionOne />
        <SectionTwo />
      </VStack>

      
    </ChakraProvider>
  );
}

export default App;
