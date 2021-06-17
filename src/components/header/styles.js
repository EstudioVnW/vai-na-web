import styled from 'styled-components';
import { Link } from "gatsby";


// @media (max-width: 768px) {}

export const Header = styled.header`
	position: relative;
	margin-left: 2rem;
	height: 75vh;
	background: #00145D;
	border-radius: 0 0 0 20px;
	
	@media (min-width: 2560px){
		margin-left: 6rem;
	}
	@media (max-width: 768px) {
		height: 60vh;	
		width: 100%;
		margin-left: 0;	
		border-radius: 0;
	}

`;

 export const CardHome = styled.div` 
 	position: absolute;
	left: 7%; 
	bottom: 22%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #FED5B2;
	width: 42rem;
	height: 13rem;
	border-radius: 15px;
	z-index: 1;

	@media (min-width: 2560px){
		width: 62rem;
		height: 18rem;
		left: 13%;
	}
	@media (max-width: 1440px){
		left: 7%;
		bottom: 20%;
	}
	@media (max-width: 1024px){
		width: 28rem;
		height: 10rem;
		left: 3%;
	}
	@media (max-width: 768px) {
		width: 28rem;
		height: 15rem;
		left: 13%;
		bottom: 10%;
	}
 `;
export const ImageEstudio = styled.img`
	position: absolute;
	right: -2rem;
	bottom: -12%;
	width: 50rem;

	@media (min-width: 2560px) {
		position: absolute;	
		right: -2.6rem;
		bottom: -12%;
		width: 90rem;
	}

	@media (max-width: 1440px){
		right: -1.5rem;
		bottom: -10%;
	}
	@media (max-width: 1440px){
		right: -1.5rem;
		bottom: -10%;
	}
	@media (max-width: 1024px){
		width: 40rem;
		right: -1.2rem;
		bottom: -8%;
	}
	@media (max-width: 768px){
		width: 35rem;
		right: -1.05rem;
		bottom: 40%;
	}
`;

export const BoxCircle = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
`;
export const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 4.375rem;

	@media (min-width: 2560px){
		width: 5.375rem;
	}
`;
export const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;

	@media (min-width: 2560px){
		width: 25px;
		height: 25px;
		margin-top: 30px;
	}
	@media (max-width: 1024px){
		margin-top: 15px;
	}
	@media (max-width: 768px) {
		margin-top: 10px;
	}

`;
export const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;

	@media (min-width: 2560px){
		margin-top: 30px;
		font-size: 1.5rem;
	}
	@media (max-width: 1024px){
		font-size: 1.2rem;
	}
	@media (max-width: 768px) {
		margin-top: 10px;
	}
`;

export const Line = styled.div`
	display: flex;
	background: #FFAC2D;
	width: 90%;
	height: 2px;
	margin-top: 15px;

	@media (min-width: 2560px){
		margin-top: 30px;
		height: 3px;
	}
	@media (min-width: 1024px){
		margin-top: 10px;
		height: 2px;
	}
	@media (max-width: 768px) {
		margin-top: 10px;
	}

`;

export const Title = styled.h1`
	font-size: 2.5rem;
	width: 90%;
	color: #272727;
	margin-top: 15px;

	@media (min-width: 2560px){
		font-size: 3.6rem;
	}
	@media (max-width: 1024px){
		font-size: 1.6rem;
	}
	@media (max-width: 768px) {
		margin-top: 10px;
		font-size: 2.3rem;
	}

	
`;
export const SubTitle = styled.p`
	font-size: 1.8rem;
	width: 90%;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;

	@media (min-width: 2560px){
		font-size: 2.8rem;
	}
	@media (max-width: 1024px){
		font-size: 1.2rem;
	}
	@media (max-width: 768px) {
		font-size: 1.9rem;
		margin-top: 5px;
		font-weight: 500;
	}
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;