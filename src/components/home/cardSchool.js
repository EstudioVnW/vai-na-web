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

`;

const BoxTop = styled.div `
	display: flex;
	width: 70%;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.2rem;
	margin-right: 3rem;
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
`;

const FundoImage = styled.div `
	position: absolute;
	margin-left: 10.63rem;
	margin-top: 1.8rem;
	width: 90px;
	height: 90px;
	background-color: #FDE7A9;
	border-radius: 50%;
	border: 1.5px dashed var(---ffac2d);
	border: 1.5px dashed #FFAC2D;


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
`;

const Title = styled.h2 `
	width: 40%;
	color: #272727;
	font-weight: 800;
	font-size: 1.2em;
	margin-top: 0.5rem;
	margin-right: 7.8rem;
`;

const Description = styled.p `

	color: #272727;
	font-size: 0.8em;
	font-weight: 300;
	line-height: 0.8rem;
	margin-top: 1rem;
	width: 85%;
`;

const CardSchool = ({background, 
    title, description}) => {
	return (
		<Container background={background}>
			<BoxTop>
				<BoxCircle>
					<Circle />
					<Circle />
					<Circle />
				</BoxCircle>
			</BoxTop>
			<FundoImage />
			<Line />
            <SubTitle>carreira</SubTitle>
            {title && <Title>{title}</Title>}
			<Description>{description}</Description>
		</Container>
	)
}

export default CardSchool;