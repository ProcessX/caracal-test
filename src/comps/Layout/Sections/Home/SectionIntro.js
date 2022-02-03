import { Heading, Text, Box, Flex, Link, Input, Button } from '@chakra-ui/react';
import React from 'react';
import Col from '_comps/Layout/Col';
import Container from '_comps/Layout/Container';
import { Image } from '@chakra-ui/react';

const SectionIntro = (props) => {
  return (
    <Container bg='primary.50' as='section' pt={[136, null, 0]}>
      <Col colEnd={[26]} colStart={[2, null, 15]} rowStart={[2, null, 1]} mt={['64px', null, '144px']} mb={['64px', '96px']}>
        <Image src={'/img/home.jpg'} objectFit='cover' alt='home' h={['15rem', '25rem', '40rem']} w='100%' />
      </Col >
      <Col colStart={[2]} colEnd={[26, null, 18]} rowStart={[1]} display='flex' flexDirection='column' justifyContent='center'>
        <Heading as="h1" size={['2xl']} fontWeight={"600"} color="primary.900" mb={['4', '5']}>Customer service software for customer-first teams</Heading>
        <Text maxW={'35rem'} color={'primary.700'} mb={['8', '12']} fontSize={['md', 'lg']}>The best customer service software for customer-first teams. Industry-leaning email and live chat support.</Text>
        <Flex direction={['column', 'row']}>
          <Box mb={[4, 0]} mr={[0, 4]}>
            <Input placeholder='Your email' mb={['2']} size={['lg']} bg='white' />
            <Text color={'primary.500'} fontSize={['sm']}>We care about your data in our <Link textDecoration={'underline'} _hover={{ color: 'primary.700' }}>privacy policy</Link></Text>
          </Box>
          <Button bg="primary.600" _hover={{ bg: 'primary.800' }} color="white" size={'lg'}>Get started</Button>
        </Flex>
      </Col>
    </Container >
  );
};

SectionIntro.propTypes = {};

export default SectionIntro;