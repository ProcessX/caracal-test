import React from 'react';
import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import FeatureBenefit from '_comps/Components/FeatureBenefit';
import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';
import { QuestionOutlineIcon } from '@chakra-ui/icons'

const SubsectionInboxes = () => {
  return (
    <Container mb={[12, 24]}>
      <Col colStart={[2]} colEnd={[26, null, 13]} display='flex' flexDirection='column' justifyContent='center' mb={[10, 0]}>
        <Flex h='14' w='14' borderWidth={8} borderRadius={'50%'} justify={'center'} align={'center'} borderColor={'primary.50'} bg='primary.100' ml='-2' mt='-2' mb='5'>
          <QuestionOutlineIcon h='6' w='6' color='primary.600' />
        </Flex>
        <Heading as="h4" size={['lg']} fontWeight={"600"} mb={2, 4}>Share team inboxes</Heading>
        <Text color={'gray.500'} fontSize={['lg']}>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop</Text>
        <Stack direction={'column'} color={'gray.500'} spacing={[4, 5]} mt={[8]}>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Leverage automation to move fast</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Always give customers a human to chat to</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Automate customer support and close leads faster</Text>
          </FeatureBenefit>
        </Stack>
      </Col>
      <Col colStart={[1, null, 15]} colEnd={[27]} bg='gray.100' h={['auto', 512]} maxH={'none', null, '512px'} mt={[0, '30px']} p={['1.5rem 1rem', '3rem 0 0 3rem']}>
        <Image src={'/img/screen_mockup_01.png'} objectFit='cover' objectPosition={'top left'} alt='home' h={['auto', null, '100%']} w={['auto', null, '100%']} margin={['auto', null, 'none']} />
      </Col>
    </Container >
  );
};

export default SubsectionInboxes;
