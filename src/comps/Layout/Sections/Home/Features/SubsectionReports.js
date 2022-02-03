import React from 'react';
import { Box, Flex, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react';
import FeatureBenefit from '_comps/Components/FeatureBenefit';
import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';
import { QuestionOutlineIcon } from '@chakra-ui/icons'

const SubsectionReports = () => {
  return (
    <Container mb={[12, 24]}>
      <Col colStart={[2]} colEnd={[26, null, 13]} display='flex' flexDirection='column' justifyContent='center' mb={[10, 0]}>
        <Flex h='14' w='14' borderWidth={8} borderRadius={'50%'} justify={'center'} align={'center'} borderColor={'primary.50'} bg='primary.100' ml='-2' mt='-2' mb='5'>
          <QuestionOutlineIcon h='6' w='6' color='primary.600' />
        </Flex>
        <Heading as="h4" size={['lg']} fontWeight={"600"} mb={2, 4}>Manage your team with reports</Heading>
        <Text color={'gray.500'} fontSize={['lg']}>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</Text>
        <Stack direction={'column'} color={'gray.500'} spacing={[4, 5]} mt={[8]}>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Filter, export, and drilldown on the data quickly</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>save, schedule, and automate reports to your inbox</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Connect the tools you already use with 100+ integrations</Text>
          </FeatureBenefit>
        </Stack>
      </Col>
      <Col colStart={[1, null, 15]} colEnd={[27]} bg='gray.100' h={[276, 512]} mt={[0, '30px']}>
        <p>Ttest</p>
      </Col>
    </Container>
  );
};

export default SubsectionReports;
