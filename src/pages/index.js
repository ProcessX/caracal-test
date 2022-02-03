import { Heading, Image } from '@chakra-ui/react';

import Container from '_comps/Layout/Container';
import Col from '_comps/Layout/Col';
import React from 'react';
import SectionIntro from '_comps/Layout/Sections/Home/SectionIntro';
import SectionFeatures from '_comps/Layout/Sections/Home/Features/SectionFeatures';

const Home = () => (
	<React.Fragment>
		<SectionIntro />
		<SectionFeatures />
	</React.Fragment>
);

export default Home;

export async function getStaticProps() {
	// ? fetch data from process.env.NEXT_PUBLIC_WORDPRESS_URL and pass the content to the page via props

	return {
		props: {
			// ? add your fetched data here
		},
	};
}
