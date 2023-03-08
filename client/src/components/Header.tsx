import React from 'react';
import { Box, Heading, Center, Text, HStack } from '@chakra-ui/react';

function Header() {
  return (
    <Heading as="h1" size="3xl" noOfLines={1} fontWeight="200">
      To-do list
    </Heading>
  );
}

export default Header;
