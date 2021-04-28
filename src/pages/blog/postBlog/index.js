import React from "react";
import styled from 'styled-components';

// Components
import CardAuthor from '../../../components/blog/cardAuthor';
import Layout from '../../../components/Layouts';

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

const TextDescription = styled.article `
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-weight: 100;
		width: 48%;
		font-size: 20px;
		line-height: 2rem;
		margin-top: 1.8rem;
		color: #2F2F2F;
	  };

	  blockquote {
		width: 63%;
		font-size: 24px;
		line-height: 2.5rem;
		margin-top: 2rem;
		color: #141414;
	  };

	  blockquote strong {
		width: 80%;
		font-size: 24px;
		line-height: 2.5rem;
		font-weight: 400;
		color: #141414;
	  };
`;



const Index = () => {
	const hasWindow = typeof window !== 'undefined';
	const data = hasWindow && window.history;
	const isData = data.state?.postBlog;
	const isTitle = {
		date: isData?.publishedAt, 
		title: isData?.title,
		excerpt: isData?.excerpt,
	}


	console.log('oi' , data)
	return (
		<Layout isPage='postBlog' pageTitle={isTitle}>
			<Container>
				<ContainerMain>
					<TextDescription dangerouslySetInnerHTML={{ __html: data?.state?.postBlog?.content.html }}></TextDescription>		
				</ContainerMain>
				<CardAuthor author={data?.state?.postBlog?.authors[0]}/> 
			</Container>
		</Layout>
	)
}

export default Index;
