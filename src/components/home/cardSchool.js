import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	background-color: ${props => props.background ? props.background : '#0F2B92'};
	box-shadow: 0px 0px 30px #0F2B9280;
	border-radius: 20px;
	width: 18rem;
	max-width: 600px;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	
`;

const BoxTop = styled.div `
	display: flex;
	width: 70%;
	align-items: center;
	justify-content: space-between;
	margin-left: 1.1rem;
`;

const BoxCircle = styled.div `
	width: 30%;
	display: flex;
	justify-content: space-evenly;
`;

const Circle = styled.div `
	width: 14px;
	height: 14px;
	background-color: #272727;
	border-radius: 50%;
`;

const Title = styled.h2 `
	color: #272727;
	font-weight: 800;
	font-size: 1.2em;
    width: 40%;
`;

const Line = styled.div `
	width: 85%;
	height: 2px;
	background-color: #272727;
	margin-left: 0.8rem;
`;
const SubTitle = styled.p `
	color: #272727;
    text-transform: uppercase;
	font-weight: 400;
	font-size: 0.7em;
`;

const Description = styled.p `
	color: #272727;
	font-size: 0.8em;
	font-weight: 100;
	line-height: 0.8rem;
	margin-left: 1rem;
	width: 90%;
`;

const CardSchool = ({background, title, description}) => {
	return (
		<Container background={background}>
			<BoxTop>
				<BoxCircle>
					<Circle />
					<Circle />
					<Circle />
				</BoxCircle>
			</BoxTop>
			<Line />
            <img />
            <SubTitle>carreira</SubTitle>
            {title && <Title>{title}</Title>}
			<Description>
				{description}
			</Description>
		</Container>
	)
}

export default CardSchool;