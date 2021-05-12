import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	background-color: ${props => props.background ? props.background : 'rgba(15,43,146, 0.15)'};
	border-radius: 20px;
	width: 18rem;
	max-width: 600px;
	height: 15.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 7rem;
	margin-right: 2rem;

	@media (min-width: 2560px) {
		width: 25rem;
		height: 20rem;
	}
	@media (min-width: 1920px) {
		width: 25rem;
		height: 20rem;
	}

	@media (min-width: 1440px) {
		width: 18rem;
		height: 15.5rem;
		margin-top: 8rem;
	}

	@media (min-width: 1024px) {
		width: 15rem;
		height: 12.5rem;
		margin-top: 8rem;

	}


`;

const BoxTop = styled.div `
	display: flex;
	width: 70%;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.2rem;
	margin-right: 3rem;
`;

const Information = styled.div `
	width: 6vw;
	height: 3vh;
	border: 1px solid #FF611E;
	border-radius: 20px;
	opacity: 0.25;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #FED5B2;
	margin-right: 3rem;

	@media (min-width: 2560px) {
		width: 4rem;
		height: 2rem;
		margin-right: 6rem;
	}
	@media (min-width: 1920px) {
		width: 4rem;
		height: 2rem;
		margin-right: 6rem;
	}

	@media (min-width: 1024px) {
		margin-right: 2rem;
	}
	
`;

const InformationText = styled.p `
	text-transform: uppercase;
	font-size: 0.5em;
`;

const BoxCircle = styled.div `
	width: 30%;
	display: flex;
	justify-content: space-evenly;

	
	
`;

const Circle = styled.div `
	width: 14px;
	height: 14px;
	background-color: #0F2B92;
	border-radius: 50%;

	@media (min-width: 1024px) {
		width: 10px;
	}
`;

const FundoImage = styled.div `
	position: absolute;
	display: flex;
    justify-content: center;
    align-items: center;
	margin-left: 10.63rem;
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
		margin-left: 16.63rem;
	}

	@media (min-width: 1920px) {
		width: 100px;
		height: 100px;
		margin-left: 16.63rem;
	}
	@media (min-width: 1024px) {
		width: 70px;
		height: 70px;
		margin-left: 8.72rem;
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

const Line = styled.div `
	width: 85%;
	height: 2px;
	background-color: #0F2B92;	
	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
`;


const SubTitle = styled.p `
	width: 90%;
	color: #272727;
    text-transform: uppercase;
	font-weight: 600;
	font-size: 0.7em;
	margin-top: 0.7rem;
	margin-left: 1rem;

	@media (min-width: 2560px) {
		font-size: 1rem;
		margin-left: 1.7rem;
	}

	@media (min-width: 1920px) {
		font-size: 1rem;
		margin-left: 1.7rem;
	}
	@media (min-width: 1024px) {
		font-size: 0.6rem;

	}
`;

const Title = styled.h2 `
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

const Description = styled.p `
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
		line-height: 0.8rem;
	}

`;



const CardSchool = ({background, 
    title, description, image, soon}) => {
	return (
		<Container background={background}>
			<BoxTop>
				<BoxCircle>
					<Circle />
					<Circle />
					<Circle />
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
			<Line />
            <SubTitle>carreira</SubTitle>
            {title && <Title>{title}</Title>}
			<Description>{description}</Description>
		</Container>
	)
}

export default CardSchool;