import styled from 'styled-components';
import { Link } from "gatsby";



export const Talents = styled.div`
background: rgb(254,213,178,0.32);
width: 70%;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
margin-top: 8rem;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 2560px) {
	min-height: 60rem;
	width: 75%;
 }

 @media (max-width: 1920px){
	min-height: 40rem;
	width: 75%;
}
 
 @media (max-width: 1440px) {
	min-height: 32rem;
	width: 70%;
 }

 @media (max-width: 1360px){
	min-height: 35rem;
	width: 75%;
}

@media (max-width: 768px) {
	flex-direction: column;
	width: 100%;
	height: 100rem;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
@media (max-width: 360px) {
	height: 60rem;
}

`;
export const TalentsText = styled.div`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 2560px) {
	width: 80%;
 }

@media (max-width: 768px) {
	width: 80%;
	margin-top: 50px;
}


`;
export const TalentsTextTitle = styled.h1`
width: 80%;
margin-left: 10%;
color: #FF611E;

@media (min-width: 2560px) {
	font-size: 5rem;
 }

 @media (max-width: 1920px){
	font-size: 3.5rem;
	width: 85%;
}

 @media (max-width: 1440px){
	font-size: 2.6rem;
	width: 100%;
 }

 @media (max-width: 1360px){
	font-size: 2.5rem;
}

@media (max-width: 768px) {
	margin-left: 0;
	width: 100%;
	font-size: 4rem;
	text-align: left;
}

@media (max-width: 360px) {
	font-size: 2rem;
}
`;

export const TalentsTextDescription = styled.p`
width: 65%;
margin-left: 10%;
margin-top: 20px;
color: #272727;

@media (min-width: 2560px) {
	font-size: 2.5rem;
 }

 @media (max-width: 1920px){
	font-size: 1.5rem;
	width: 80%;
	margin-top: 50px;
}

 @media (max-width: 1440px){
	font-size: 1.2rem;
	width: 90%;
 }

 @media (max-width: 1360px){
	font-size: 1.5rem;
	margin-top: 20px;
}

@media (max-width: 768px) {
	margin-left: 0;
	width: 100%;
	font-size: 2rem;
	line-height: 50px;
	margin-top: 50px;
}

@media (max-width: 360px) {
	font-size: 1rem;
	line-height: 25px;
	margin-top: 20px;
}
`;

export const ButtonTalents = styled.div`
width: 80%;
margin-top: 20px;
display: flex;
justify-content: center;

@media (max-width: 1920px){
	margin-top: 50px;
}

@media (max-width: 768px) {
	width: 100%;
	margin-top: 50px;
}
`;

export const TalentsImage = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 2560px) {
	width: 20%;
 }

@media (max-width: 768px) {
	display: none;
}

`;
export const TalentsImageInfo = styled.img`
    width: 40rem;
	position: relative;
	left: 5rem;

	@media (min-width: 2560px) {
		position: absolute;
		left: 90rem;
		width: 60rem;
	 }

	@media (max-width: 1920px){
		position: absolute;
		left: 65rem;
		width: 40rem;
	}

	@media (max-width: 1440px){
		position: absolute;
		left: 50rem;
		width: 30rem;
	}

	@media (max-width: 1360px){
		left: 48rem;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const TalentsImageInfoResponsive = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		margin-top: 50px;
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