import React from 'react';
import Content from './components/Content';
import { Box, Center, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box width="70%" py="6" mx="auto">
      <header>
        <Center mb={{ base: 4, lg: 8 }}>
          <Heading as="h1" size="xl" fontWeight={800}>
            TigerHall Content
          </Heading>
        </Center>
      </header>
      <Content />
    </Box>
  );
}

export default App;
