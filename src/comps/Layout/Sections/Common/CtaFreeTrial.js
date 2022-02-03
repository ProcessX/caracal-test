import React from 'react';
import { Flex, Heading, Text, Stack, Button, Box } from '@chakra-ui/react';

const CtaFreeTrial = () => {
  return (
    <Flex direction={['column', 'row']} bg='primary.800' pt={['10', '16']} pb={['10', '16']} pl={['5', '16']} pr={['5', '16']} borderRadius={'16px'} justify={'space-between'}>
      <Box mb={[8, 0]}>
        <Heading color='white' mb='4'>Start your free trial</Heading>
        <Text color={'primary.200'} fontSize={['lg']}>Get up and running in less than 5 minutes</Text>
      </Box>
      <Stack direction={['column', 'row']} spacing={[3]}>
        <Button bg="primary.600" _hover={{ bg: 'primary.900' }} color="white" size={'lg'}>Get started</Button>
        <Button bg="white" _hover={{ bg: 'primary.200' }} color="gray.700" size={'lg'}>Learn more</Button>
      </Stack>
    </Flex>
  );
};

export default CtaFreeTrial;
