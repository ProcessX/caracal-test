import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import FeatureBenefit from '_comps/Components/FeatureBenefit';
import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';
import CtaFreeTrial from '../../Common/CtaFreeTrial';
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import SubsectionInboxes from './SubsectionInboxes';
import SubsectionAnswers from './SubsectionAnswers';
import SubsectionReports from './SubsectionReports';


const SectionFeatures = () => {
  return (
    <Box as='section' >
      <Container mb={[16, 24]} mt={[16, 24]}>
        <Col colStart={[2, 7]} colEnd={[26, 21]}>
          <Flex direction='column' align={'center'} textAlign={'center'}>
            <Heading as="h2" size={['xs', 'sm']} color='primary.700' mb={3}>Features</Heading>
            <Heading as="h3" size={['xl']} fontWeight={"600"} mb={4, 5}>Beautiful analytics to grow smarter</Heading>
            <Text color={'gray.500'} fontSize={['lg']}>Powerful, serl-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</Text>
          </Flex>
        </Col>
      </Container>

      <SubsectionInboxes />
      <SubsectionAnswers />
      <SubsectionReports />

      <Container>
        <Col colStart={[2]} colEnd={[26]} pt='16' pb='16'>
          <CtaFreeTrial />
        </Col>
      </Container>
    </Box >
  );
};

export default SectionFeatures;
