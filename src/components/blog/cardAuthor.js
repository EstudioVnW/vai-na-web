import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	background-color: #FDE7A9;
	width: 40rem;
	min-height: 11.688rem;
	border-radius: 0px 0px 18px 18px;
	margin-left: auto;
	margin-right: auto;
	border-top: 2px solid #0F2B92;
	display: flex;
	align-items: center;
	margin-top: 5rem;
	margin-bottom: 7rem;
	padding: 1.5rem 0 1.5rem 2rem;

	@media (max-width: 768px) {
    margin-bottom: -5rem;
    padding: 2.063rem 0 5.738rem;
    width: 100%;
		border-radius: 0;
		flex-direction: column;
		justify-content: center;
	}


	@media (max-width: 424px) {
		width: 100%;
	}
`;

const Image = styled.img `
	width: 8.313rem;
	height: 8.313rem;
	border-radius: 50%;

	@media (max-width: 424px) {
		width: 9.313rem;
		height: 9.313rem;
		margin: 0px;
		margin-top: -1rem;
	}
`;

const Content = styled.div`
	padding-left: 2rem;
	width: 70%;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		padding-left: 0;
		align-items: center;
	}
`;

const BoxText = styled.div `
	display: flex;
	padding-bottom: 1.3rem;


	@media (max-width: 768px) {
		padding-top: 1rem;
		padding-bottom: 1rem;

		width: 100%;
    justify-content: center;
	}
`;

const TextName = styled.h3 `
	font-size: 1.25rem;
	display: flex;

	@media (max-width: 768px) {
		font-size: 1.825rem;
		display: block;
		text-align: center;
	}
`;

const Comma = styled.h3 `
	padding-right: 0.3rem;
	
	@media (max-width: 768px) {
		font-size: 1.825rem;
		display: none;
	}
`;

const TextProfession = styled.span`
	font-size: 1.25rem;
	font-weight: 200;
	color: #FF611E;

	@media (max-width: 768px) {
		display: block;
	}
`;

const TextDescription = styled.div`
	width: 86%;
	max-width: 364px;
	font-size: .938rem;
	color: #0F2B92;
	line-height: 1.6rem;

	@media (max-width: 768px) {
		width: 100%;
		font-size: 1rem;
	}
`;

const CardAuthor = ({ author }) => {
	return (
		<Container>
			<Image src={author?.photo?.url} alt='' />
			<Content>
				<BoxText>
					<TextName>
						{author?.name}<Comma>, {` `}</Comma>
						<TextProfession>{author?.jobTitle}</TextProfession>
					</TextName>
				</BoxText>
				<TextDescription dangerouslySetInnerHTML={{ __html: author?.bio.html }}></TextDescription>	
			</Content>
		</Container>
	)
}

export default CardAuthor;