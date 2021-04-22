import React from "react";
import styled from 'styled-components';

// Components
import CardAuthor from '../../../components/blog/cardAuthor';
import Layout from '../../../components/Layouts'

// styles
const Container = styled.section`	
	margin-top: -6rem;
`;

const ContainerMain = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
`;

const Index = () => {
	const hasWindow = typeof window !== 'undefined';
	const data = hasWindow && window.history;
	const isData = data?.state?.postBlog;
	const isTitle = {
		date: isData?.publishedAt,
		title: isData?.title,
		excerpt: isData?.excerpt,
	}

	return (
		<Layout pageTitle={isTitle}>
			<Container>
				<ContainerMain>
					<article class="Test" dangerouslySetInnerHTML={{ __html: data?.state?.postBlog?.content.html }}></article>		
				</ContainerMain>
				<CardAuthor author={data?.state?.postBlog?.authors[0]}/> 
			</Container>
		</Layout>
	)
}

export default Index;
