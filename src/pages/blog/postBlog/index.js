import React from "react";
import styled from 'styled-components';

// Components
import CardAuthor from '../../../components/blog/cardAuthor';
import Layout from '../../../components/Layouts'

// styles
const Container = styled.section`
`;

const Index = ({ location }) => {
	console.log('olá', location)

	const oi = location.state.postBlog;
	return (
		<Layout>
			<Container>
				<p>{postBlog.content.html}</p>
				<CardAuthor author={location.state.postBlog.authors[0]}/>
			</Container>
		</Layout>
	)
}

export default Index;