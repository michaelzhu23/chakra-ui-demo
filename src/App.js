import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Details } from './components/Details';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box>

      <Container maxW="container.xl" p={0}>
        <Flex
          h={{ base: 'auto', md: '100vh' }}
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </>
  );
}

export default App;
