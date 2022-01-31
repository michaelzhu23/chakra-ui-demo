import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

export const Cart = props => {
  const { toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('lightBlue', 'pink');

  const textColor = useColorModeValue('green', 'blue');

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start" color={textColor}>
        <Heading size="2xl">Your cart</Heading>
        <Text>This is some cart description.</Text>
        <Button onClick={toggleColorMode} variant="link" color="red">
          Click to change the theme.
        </Button>
      </VStack>
    </VStack>
  );
};
