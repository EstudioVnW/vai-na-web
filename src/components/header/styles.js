import styled from 'styled-components';
import { Link } from "gatsby";

export const Header = styled.header`
	min-height: auto;
	background: #00145D;
	border-radius: 0 0 0 20px;
	margin-left: 3.4rem;
	
	@media (min-width: 2560px) {
		margin-left: 5rem;
	}
	@media (max-width: 1200px) {
		margin-left: 1rem;
	}
	@media (max-width: 768px) {
		padding-top: 0;
		width: 100%;
		margin-left: 0;	
		border-radius: 0;
		min-height: auto;
	}
`;

export const Wrap = styled.div`
	position: relative;
	display: flex;
	flex-flow: column-reverse;
	justify-content: center;
	margin: 0 auto;
	padding-left: 7%;
	min-height: calc(54.3vh + 7rem);

	@media (min-width: 2560px) {
		min-height: calc(65vh + 7rem);
	}
	@media (max-width: 1440px) {
		min-height: calc(50vh + 10rem);
	}
	@media (max-width: 1200px) {
		padding-left: 4%;
		min-height: calc(48vh + 10rem);
	}
	@media (max-width: 768px) {
		padding-top: 0;
		min-height: calc(55vh + 7rem);
	}
	@media (max-width: 480px){
		min-height: calc(61vh + 7rem);
	}
`;

 export const CardHome = styled.div`
 	margin-top: 3rem;
	padding: 0.55rem 2rem 2rem;
	max-width: 55%;
	border-radius: 15px;
	box-shadow: 0 0 30px #09255d80;
	background: #FED5B2;
	z-index: 1;

	@media (min-width: 2560px) {
		padding: 2rem 3rem 3rem;
		max-width: 52%;
		border-radius: 25px;
	}
	@media (max-width: 1440px) {
		padding: 0.55rem 1.2rem 1.2rem;
		max-width: 50%;
	}
	@media (max-width: 768px){
		position: absolute;
		left: 5%;
		bottom: 18%;
		max-width: 72%;
		border-radius: 10px;
	}
	@media (max-width: 480px){
		left: 1.4rem;
		bottom: 10%;
		padding: 0 0.8rem 0.6rem;
	}
 `;

export const BoxCircle = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 4.37rem;

	@media (min-width: 2560px) {
		width: 6rem;
	}
	@media (max-width: 1200px) {
		width: 2.7rem;
	}
`;
export const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;
	
	@media (min-width: 2560px) {
		margin: 1rem 0;
		width: 25px;
		height: 25px;
	}
	@media (max-width: 1200px) {
		width: 10px;
    	height: 10px;
	}
`;
export const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;
	font-size: 1.1rem;
	font-weight: lighter;

	@media (min-width: 2560px) {
		font-size: 2rem;
	}
    @media (max-width: 1200px){
	 	font-size: 0.8rem;
	 }
`;
export const Line = styled.div`
	display: flex;
	background: #FFAC2D;
	height: 2px;
	margin-top: 15px;

	@media (max-width: 1200px) {
		margin-top: 8px;
	}
`;

export const Title = styled.h1`
	padding-top: 0.45rem;
	font-size: 2.7rem;
	color: #272727;
	margin-top: 15px;

	@media (min-width: 2560px) {
		font-size: 4.5rem;
	}
	@media (max-width: 1440px){
		font-size: 2rem;
	}
	@media (max-width: 1200px){
	 	font-size: 1.4rem;
	}
	@media (max-width: 768px) {
		margin-top: 4px;
		font-size: 1.7rem;
	}
	@media (max-width: 480px) {
 		font-size: 1.5rem;
	}
`;

export const SubTitle = styled.h2`
	font-size: 2rem;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;
	
	@media (min-width: 2560px) {
		font-size: 3.2rem;
	}
	@media (max-width: 1440px){
		font-size: 1.4rem;
	}
	@media (max-width: 1200px){
	 	font-size: 1rem;
    }
	@media (max-width: 768px) {
		margin-top: 2px;
		font-weight: 500;
	}
    @media (max-width: 480px) {
	 	font-size: 1.3rem;
		line-height: 1.4;
	 }
`;

export const ImageEstudio = styled.img`
	position: absolute;
	right: 0;
	bottom: -7.5%;
	width: 50%;

	@media (min-width: 2560px) {
		width: 55%;
		height: auto;
	}
	@media (max-width: 1200px) {
		bottom: -5%;
		width: 65%;
	}
	@media (max-width: 768px) {
		top: 7rem;
		width: 81%;
		border-radius: 10px 0 0 10px;
	}
`;

export const StyledLink = styled(Link)`
`;