import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#8bb637',
        100: '#5babe6',
        200: '#E3BB58',
        300: '#8bb6d6',
        400: '#c4d9e9',
        500: '#8bb637',
        600: '#2b2e36',
      },
    },
    fonts: {
      // using base fonts as fallbacks
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: props => ({
            rounded: 'none',
            ...brandRing,
            backgroundColor: mode('brand.500', 'brand.200')(props),

            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props),
              color: 'white',
            },

            _active: {
              backgroundColor: mode('brand.100', 'brand.200'),
              ...brandRing,
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
