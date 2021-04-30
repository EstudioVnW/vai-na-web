import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	background-color: #FED5B2;
	box-shadow: 0px 0px 30px #0F2B9280;
	border-radius: 20px;
	width: 40%;
    height: 13rem;
	margin-left: 7rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 4px 0 14px;
`;

const BoxTop = styled.div `
	display: flex;
	width: 70%;
    align-items: center;
	justify-content: space-between;
	margin-left: 14px;
`;

const BoxCircle = styled.div `
	width: 24%;
	display: flex;
	justify-content: space-evenly;
`;

const Circle = styled.div `
	width: 14px;
	height: 14px;
	background-color: #FFAC2D;
	border-radius: 50%;
`;

const TextOrange = styled.p `
	color: #FF611E;
	font-weight: 100;
	font-size: 1.2em;
`;

const LineOrange = styled.div `
	width: 90%;
	height: 2px;
	background-color: #FFAC2D;
	margin-left: 1.5rem;
`;

const TextMain = styled.h2 `
	color: #272727;
	font-size: 1.9em;
    font-weight: 800;
	line-height: 2.5rem;
	margin-left: 1.5rem;
`;

const Card = () => {
	return (
		<Container>
			<BoxTop>
				<BoxCircle>
					<Circle />
					<Circle />
					<Circle />
				</BoxCircle>
				<TextOrange>#deeptalent</TextOrange>
			</BoxTop>
			<LineOrange />
			<TextMain>
				Uma plataforma de transformação social e digital para a nova economia
			</TextMain>
		</Container>
	)
}

export default Card;