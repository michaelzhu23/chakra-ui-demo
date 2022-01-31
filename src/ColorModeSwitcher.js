import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();

  const text = useColorModeValue('dark', 'light');

  const description = useColorModeValue(
    'this is light mode',
    'this is dark mode'
  );

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <VStack {...props}>
      <Flex alignItems="center">
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          {...props}
        />
        <Text>{`Switch to ${text} mode`}</Text>
      </Flex>
      <Text>{description}</Text>
    </VStack>
  );
};
