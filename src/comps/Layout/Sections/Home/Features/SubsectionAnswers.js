import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Image, List, ListItem, Stack, Text } from '@chakra-ui/react';
import FeatureBenefit from '_comps/Components/FeatureBenefit';
import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';
import { QuestionOutlineIcon } from '@chakra-ui/icons'

const SubsectionAnswers = () => {
  return (
    <Container mb={[12, 24]}>
      <Col colStart={[2, null, 15]} colEnd={[26]} display='flex' flexDirection='column' justifyContent='center' mb={[10, 0]}>
        <Flex h='14' w='14' borderWidth={8} borderRadius={'50%'} justify={'center'} align={'center'} borderColor={'primary.50'} bg='primary.100' ml='-2' mt='-2' mb='5'>
          <QuestionOutlineIcon h='6' w='6' color='primary.600' />
        </Flex>
        <Heading as="h4" size={['lg']} fontWeight={"600"} mb={2, 4}>Deliver instant answers</Heading>
        <Text color={'gray.500'} fontSize={['lg']}>An all-in-one custom service platform that helps balance everything your customers need to be happy.</Text>

        <Stack direction={'column'} color={'gray.500'} spacing={[4, 5]} mt={[8]}>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Keep your customers in a loop with live chat</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Embeded help articles in the loop with live chat</Text>
          </FeatureBenefit>
          <FeatureBenefit>
            <Text fontSize={['lg']}>Customers never have to leave the page to find an answer</Text>
          </FeatureBenefit>
        </Stack>
      </Col>
      <Col colStart={[1]} colEnd={[27, null, 13]} rowStart={[2, null, 1]} bg='gray.100' h={[276, null, 512]} mt={[0, '30px']}>
        <Grid overflow={'hidden'} templateColumns={'repeat(12, 1fr)'} padding={['1.5rem 3rem 0 3rem']} h={'100%'} >
          <GridItem colStart={[1]} colEnd={[-1]}>
            <Image src={'/img/iphone_mockup_01.png'} objectFit='cover' objectPosition={'center'} h='100%' objectPosition={'top left'} alt='iphone_mockup_01' />
          </GridItem>
        </Grid>
      </Col>
    </Container>
  );
};

export default SubsectionAnswers;
