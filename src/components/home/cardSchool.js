import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.div`
	padding: 1.563rem;
	background-color: ${props => props.background ? props.background : 'rgba(15,43,146, 0.15)'};
	border-radius: 20px;
	width: 22.188rem;
	max-width: 600px;
	min-height: 234px;
	/* height: 15.5rem; */
	display: flex;
	flex-direction: column;
	/* margin-top: 7rem; */
	/* margin-right: 2rem; */

	@media (max-width: 1024px) {
		width: 22.188rem;
	}
`;

const BoxTop = styled.div`
	display: flex;
	width: 70%;
	align-items: center;
	justify-content: space-between;
	/* margin-top: 1.2rem; */
	/* margin-right: 3rem; */
`;

const Information = styled.div`
	/* width: 6vw; */
	/* height: 3vh; */
	border: 1px solid #FF611E25;
	border-radius: 20px;
	/* opacity: 0.25; */
	display: flex;
	align-items: center;
	justify-content: center;
	background: #FED5B225;
	/* margin-right: 3rem; */

	@media (min-width: 2560px) {
		/* width: 4rem;
		height: 2rem; */
		/* margin-right: 6rem; */
	}
	@media (min-width: 1920px) {
		/* width: 4rem;
		height: 2rem; */
		/* margin-right: 6rem; */
	}

	@media (min-width: 1024px) {
		/* margin-right: 2rem; */
	}
	
`;

const InformationText = styled.p`
	text-transform: uppercase;
	font-size: .675em;
	color: #272727;
	padding: .6rem 1rem;
`;

const BoxCircle = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-evenly;
`;

const Circle = styled.div`
	width: 0.875rem;
	height: 0.875rem;
	background-color: ${props => props.soon ? '#FF611E' : '#00145D'};
	border-radius: 50%;
`;

const FundoImage = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 5rem;
	/* margin-left: 10.63rem; */
	margin-top: 1.8rem;
	width: 90px;
	height: 90px;
	background-color: #FDE7A9;
	border-radius: 50%;
	border: 1.5px dashed var(---ffac2d);
	border: 1.5px dashed #FFAC2D;

	@media (min-width: 2560px) {
		width: 100px;
		height: 100px;
		/* margin-left: 16.63rem; */
	}

	@media (min-width: 1920px) {
		width: 100px;
		height: 100px;
		/* margin-left: 16.63rem; */
	}
	@media (min-width: 1024px) {
		width: 4.375rem;
		height: 4.375rem;
		/* margin-left: 8.72rem; */
	}
	
`;

const ImageCard = styled.img`
	width: 3rem; 

	@media (min-width: 2560px) {
		width: 3.5rem;
	}
	@media (min-width: 1024px) {
		width: 2.5rem;
	}
`;

const Line = styled.div`
	width: 85%;
	height: 2px;
	background-color: ${props => props.soon ? '#FF611E' : '#0F2B92'};	
	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
`;


const SubTitle = styled.p`
	width: 90%;
	color: #272727;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 0.7em;
	margin-top: 0.7rem;

	@media (min-width: 2560px) {
		font-size: 1rem;
	}

	@media (min-width: 1920px) {
		font-size: 1rem;
	}
	@media (min-width: 1024px) {
		font-size: 0.6rem;
	}
`;

const Title = styled.h2`
	width: 40%;
	color: #272727;
	font-weight: 800;
	font-size: 1.2em;
	margin-top: 0.5rem;
	margin-right: 7.8rem;

	@media (min-width: 2560px) {
		width: 30%;
		font-size: 1.5rem;
		margin-right: 12.8rem;
	}

	@media (min-width: 1920px) {
		width: 30%;
		font-size: 1.5rem;
		margin-right: 12.8rem;
	}

	@media (min-width: 1024px) {
		font-size: 0.9rem;
		margin-right: 6.5rem;
	}
`;

const Description = styled.p`
	color: #272727;
	font-size: 0.8em;
	font-weight: 300;
	line-height: 1rem;
	margin-top: 1rem;
	width: 85%;

	@media (min-width: 2560px) {
		width: 80%;
		font-size: 1.2rem;
		line-height: 1.2rem;
	}

	@media (min-width: 1920px) {
		width: 80%;
		font-size: 1.2rem;
		line-height: 1.2rem;
	}

	@media (min-width: 1024px) {
		width: 85%;
		margin-top: 0.4rem;
		font-size: 0.6rem;
		line-height: .9rem;
	}
`;

const CardSchool = ({ background,
	title, description, image, soon }) => {
	return (
		<Container background={background}>
			<BoxTop>
				<BoxCircle>
					<Circle soon={soon} />
					<Circle soon={soon} />
					<Circle soon={soon} />
				</BoxCircle>
				{soon && (
					<Information>
						<InformationText>em breve</InformationText>
					</Information>
				)}
			</BoxTop>
			<FundoImage>
				<ImageCard src={image} />
			</FundoImage>
			<Line soon={soon} />
			<SubTitle>carreira</SubTitle>
			{title && <Title>{title}</Title>}
			<Description>{description}</Description>
		</Container>
	)
}

export default CardSchool;