import { Box } from 'native-base';

import { $WithChildren } from '@/types';

type Props = $WithChildren<{
  type: 'success' | 'error';
}>;

export function ToastBox(props: Props) {
  return (
    <Box
      bg={props.type === 'success' ? 'emerald.500' : 'red.500'}
      px={2}
      py={1}
      rounded="sm"
      mb={5}>
      {props.children}
    </Box>
  );
}
