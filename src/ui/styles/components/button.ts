import { Dict } from 'native-base/lib/typescript/theme/tools';

const csPrimary = (props: Dict) => ({
  bg: props.disabled ? 'gray.300' : 'amber.500',
  _text: {
    color: 'white',
    fontWeight: 700,
  },
  _pressed: {
    bg: 'amber.600',
  },
});

const csOutline = (props: Dict) => ({
  bg: props.disabled ? 'gray.100' : 'transparent',
  borderWidth: '1px',
  borderColor: props.disabled ? 'gray.300' : 'amber.500',
  _text: {
    color: 'white',
    fontWeight: 700,
  },
  _pressed: {
    bg: 'csOrange.50',
  },
});

export const Button = {
  variants: {
    csPrimary,
    csOutline,
  },
  defaultProps: {
    colorScheme: 'csOrange',
    variant: 'csPrimary',
    _text: {
      color: 'white',
      fontWeight: 700,
    },
  },
};
