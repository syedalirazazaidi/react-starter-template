import { Box, Center, Container, VStack } from '@chakra-ui/react';
import React from 'react';
import AllTodos from '../components/AllTodos';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';

function Home() {
  return (
    <Box>
      <Center bg="teal.500" py="20px" color="white">
        <Header />
      </Center>
      <VStack py="40px">
        <TodoForm />
        <AllTodos />
      </VStack>
    </Box>
  );
}

export default Home;
