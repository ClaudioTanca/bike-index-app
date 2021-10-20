import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Navigation } from './components/layout/Navigation';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>
      <Flex minH={'100vh'} flexDir={'column'} alignItems={'stretch'} bg={'antiquewhite'}>
        <Navigation />
        <Box flex='1' flexDir={'row'} overflow={'auto'} padding={5}>
          <AppRouter />
        </Box>
        <Box bg='teal.700' color='white' padding={'5'}>
          <Heading color={'white'} size={'sm'}>Footer</Heading>
        </Box>
      </Flex>
    </>
  );
}

export default App;
