import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	background-color: #FDE7A9;
	max-width: 40rem;
	min-height: 11.688rem;
	border-radius: 0px 0px 18px 18px;
	margin-left: auto;
	margin-right: auto;
	border-top: 2px solid #0F2B92;
	display: flex;
	align-items: center;
	margin-top: 5rem;
	margin-bottom: 7rem;
	padding: 1.5rem 0;

	@media (max-width: 424px) {
		width: 43rem;
		margin-left: 3.125rem;
		height: 27rem;
		flex-direction: column;
		justify-content: center;
	}
`;

const Image = styled.img `
	margin: 0 2rem;
	width: 19%;
	border-radius: 50%;

	@media (max-width: 424px) {
		width: 23%;
		margin: 0px;
		margin-top: -1rem;
	}
`;

const Content = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;

	@media (max-width: 424px) {
		align-items: center;
	}
`;

const BoxText = styled.div `
	display: flex;

	@media (max-width: 424px) {
		margin-top: 2rem;
	}
`;

const TextName = styled.h3 `
	font-size: 1.25rem;
`;

const TextProfession = styled.span`
	margin-left: 0.3rem;
	font-size: 1.25rem;
	font-weight: 200;
	color: #FF611E;
`;

const TextDescription = styled.article `
	color: #0F2B92;
	font-size: .938rem;
	width: 86%;
	line-height: 1.6rem;
	margin-top: 1.3rem;
`;

const CardPersonDesc = ({ author }) => {
	return (
		<Container>
			<Image src={author?.photo?.url} alt='' />
			<Content>
				<BoxText>
					<TextName>
						{author?.name},
						<TextProfession> {author?.jobTitle} </TextProfession>
					</TextName>
				</BoxText>
				<TextDescription dangerouslySetInnerHTML={{ __html: author?.bio.html }}></TextDescription>	
			</Content>
		</Container>
	)
}

export default CardPersonDesc;