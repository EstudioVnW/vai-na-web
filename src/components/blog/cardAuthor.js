import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	display: flex;
	align-items: center;
	margin: 5rem auto;
	padding: 2.5rem 0 2.5rem 2rem;
	width: 36%;
	min-height: 11rem;
	border-radius: 0 0 18px 18px;
	border-top: 2px solid #0F2B92;
	background-color: #FDE7A9;

	@media (min-width: 2200px) {
    padding: 4rem 0 4rem 3rem;
		width: 38%;
		border-width: 3px;
	}

	@media (max-width: 1200px) {
    width: 41%;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
    margin-bottom: -7rem;
    padding: 3rem 1.4rem 6rem;
    width: 100%;
		border-radius: 0;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

const Image = styled.img `
	width: 8rem;
	height: 8rem;
	border-radius: 50%;

	@media (min-width: 2200px) {
		width: 12rem;
		height: 12rem;
	}

	@media (max-width: 480px) {
		margin: 0px;
		margin-top: -1rem;
		width: 9.313rem;
		height: 9.313rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 1.5rem;
	width: 70%;

	@media (min-width: 2200px) {
		padding-left: 3rem;
	}

	@media (max-width: 768px) {
		align-items: center;
		padding-left: 0;
		width: 100%;
	}
`;

const BoxText = styled.div `
	display: flex;
	padding-bottom: 1rem;

	@media (min-width: 2200px) {
		padding-bottom: 2rem;
	}

	@media (max-width: 768px) {
    justify-content: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		width: 100%;
	}
`;

const TextName = styled.h3 `
	display: flex;
	font-size: 1.2rem;
	font-weight: 800;

	@media (min-width: 2200px) {
		font-size: 2.2rem;
	}

	@media (max-width: 768px) {
		display: block;
		text-align: center;
    font-size: 1.3rem;
	}
`;

const TextProfession = styled.span`
	padding-top: 5px;
	color: #FF611E;
	font-weight: 300;
	font-size: 1.25rem;

	@media (max-width: 768px) {
		display: block;
	}
`;

const TextDescription = styled.div`
	width: 86%;
	max-width: 364px;
	color: #0F2B92;
	font-size: .9rem;
	line-height: 1.9;

	@media (min-width: 2200px) {
		max-width: 100%;
		width: 100%;
		font-size: 1.8rem;
	}

	@media (max-width: 768px) {
		width: 100%;
    line-height: 1.5;
	}
`;

const CardAuthor = ({ author }) => {
	return (
		<Container>
			<Image 
				src={author?.photo?.url} 
				alt='' 
			/>
			<Content>
				<BoxText>
					<TextName>
						{author?.name},
						<TextProfession>{author?.jobTitle}</TextProfession>
					</TextName>
				</BoxText>
				<TextDescription dangerouslySetInnerHTML={{ __html: author?.bio.html }}></TextDescription>	
			</Content>
		</Container>
	)
}

export default CardAuthor;