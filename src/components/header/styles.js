import styled from 'styled-components';
import { Link } from "gatsby";


export const Header = styled.header`
	position: relative;
	margin-left: 2rem;
	height: 70vh;
	background: #00145D;
	border-radius: 0 0 0 20px;
`;

 export const CardHome = styled.div`
 	position: absolute;
	left: 5%; 
	bottom: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #FED5B2;
	width: 50rem;
	height: 15rem;
	border-radius: 15px;
	z-index: 1;
 `;
export const ImageEstudio = styled.img`
	position: absolute;
	right: 0;
	bottom: -14%;
	width: 55vw;
`;

export const BoxCircle = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
`;
export const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70px;
`;
export const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;
`;
export const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;
`;

export const Line = styled.div`
	display: flex;
	background: #FFAC2D;
	width: 90%;
	height: 2px;
	margin-top: 15px;

`;

export const Title = styled.h1`
	font-size: 40px;
	color: #272727;
	margin-top: 15px;
	
`;
export const SubTitle = styled.p`
	font-size: 27px;
	width: 90%;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;
	
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;