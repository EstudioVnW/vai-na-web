import styled from 'styled-components';
import { Link } from "gatsby";


// @media (max-width: 768px) {}

export const Header = styled.header`
	position: relative;
	min-height: auto;
	background: #00145D;
	border-radius: 0 0 0 20px;
	margin-left: 2rem;
	
	@media (max-width: 768px) {
		padding-top: 0;
		width: 100%;
		margin-left: 0;	
		border-radius: 0;
		min-height: auto;
	}
`;

export const Wrap = styled.div`
	display: flex;
	width: 95vw;
	margin: 0 auto;
	justify-content: center;
	position: relative;
	flex-flow: column-reverse;
	min-height: calc(75vh + 7rem);

	@media (max-width: 1100px) {
		min-height: calc(40vh + 7rem);
	}

	@media (max-width: 768px) {
		padding-top: 0;
		min-height: calc(55vh + 7rem);
	}

	@media (max-width: 360px){
		min-height: calc(65vh + 7rem);
	}
`;

 export const CardHome = styled.div`
	padding: 0.55rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	background: #FED5B2;
	max-width: 50%;
	border-radius: 15px;
	z-index: 1;

	@media (max-width: 768px){
		position: absolute;
		left: 5%;
		max-width: 80%;
		padding: 0.25rem 1rem 2rem;
		bottom: 18%;
	}

	@media (max-width: 500px){
		bottom: 10%;
	}
 `;
export const ImageEstudio = styled.img`
	position: absolute;
	right: 0;
	bottom: -6%;
    width: 55%;

	@media (max-width: 768px){
		width: 85%;
		top: 7rem;
	}
`;

export const BoxCircle = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 4.375rem;

	// @media (min-width: 2560px){
	// 	width: 5.375rem;
	// }
`;
export const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;

	// @media (min-width: 2560px){
	// 	width: 25px;
	// 	height: 25px;
	// 	margin-top: 30px;
	// }
	// @media (max-width: 1024px){
	// 	margin-top: 15px;
	// }
	// @media (max-width: 768px) {
	// 	margin-top: 10px;
	// }

`;
export const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;

	// @media (min-width: 2560px){
	// 	margin-top: 30px;
	// 	font-size: 1.5rem;
	// }
    @media (max-width: 1100px){
	 	font-size: 1.2rem;
	 }
	// @media (max-width: 768px) {
	// 	margin-top: 10px;
	// }
`;

export const Line = styled.div`
	display: flex;
	background: #FFAC2D;
    //width: 90%;
	height: 2px;
	margin-top: 15px;

	// @media (min-width: 2560px){
	// 	margin-top: 30px;
	// 	height: 3px;
	// }
	// @media (min-width: 1024px){
	// 	margin-top: 10px;
	// 	height: 2px;
	// }
	// @media (max-width: 768px) {
	// 	margin-top: 10px;
	// }

`;

export const Title = styled.h1`
	padding-top: 0.45rem;
	font-size: 2.75rem;
	// width: 90%;
	color: #272727;
	margin-top: 15px;

	@media (min-width: 2560px){
		font-size: 4rem;
    }

	@media (max-width: 1440px){
		font-size: 2rem;
	}
	
	@media (max-width: 1100px){
	 	font-size: 1.6rem;
	}
	
	@media (max-width: 768px) {
		margin-top: 10px;
		font-size: 1.7rem;
	}
	
	@media (max-width: 500px) {
 		font-size: 1.4rem;
	}

	
`;
export const SubTitle = styled.p`
	font-size: 1.8rem;
	// width: 90%;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;

	@media (min-width: 2560px){
	 	font-size: 2.8rem;
	}
	
	@media (max-width: 1440px){
		font-size: 1.6rem;
	}
	
	@media (max-width: 1100px){
	 	font-size: 1.3rem;
    }
	
	@media (max-width: 768px) {
		margin-top: 5px;
		font-weight: 500;
	}
    @media (max-width: 500px) {
	 	font-size: 1rem;
	 }
`;

export const Bold = styled.span`
// font-weight: 600;
`;

export const StyledLink = styled(Link)`
	// color: #0F2B92;
	// font-size: 1.125rem;
	// text-decoration: none;
	
	
`;