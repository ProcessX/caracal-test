import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'

const FeatureBenefit = ({ children }) => {
  return (
    <Stack direction={'row'} spacing={3}>
      <Flex minH={7} h={7} minW={7} borderRadius={'50%'} bg='primary.50' justify={'center'} align={'center'} ml='3'>
        <CheckIcon color={'primary.500'} />
      </Flex>
      {children}
    </Stack >
  );
};

export default FeatureBenefit;
