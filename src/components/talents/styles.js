import styled from 'styled-components';
import { Link } from "gatsby";

export const Talents = styled.div`
position: relative;
background: rgb(254,213,178,0.32);
width: 75%;
min-height: 40rem;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
margin-top: 8rem;
display: flex;
align-items: center;
justify-content: flex-start;

@media (min-width: 2560px) {
	min-height: 60rem;
	width: 75%;
 }

 @media (max-width: 1440px) {
	min-height: 32rem;
	width: 70%;
	padding: 2rem 0;
 }

 @media (max-width: 1360px){
	min-height: 35rem;
	width: 75%;
}

 @media (max-width: 768px) {
	flex-direction: column;
	width: 100%;
	min-height: 100rem;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

@media (max-width: 480px) {
	min-height: 60rem; 
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
	width: 95%;
	margin-top: 50px;
}
`;

export const TalentsTextTitle = styled.h1`
width: 90%;
margin-left: 10%;
color: #FF611E;

@media (min-width: 2560px) {
	font-size: 5rem;
 }

 @media (max-width: 1920px){
	font-size: 3.5rem;
}

 @media (max-width: 1440px){
	font-size: 2.6rem;
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

@media (max-width: 480px) {
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

@media (max-width: 480px) {
	font-size: 1rem;
	line-height: 25px;
	margin-top: 20px;
}
`;

export const ButtonTalents = styled.div`
width: 80%;
height: 90px;
margin-top: 20px;
display: flex;
align-items: center;
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
	position: absolute;
    width: 35rem;
	left: 70%;

	@media (min-width: 2560px) {
		left: 80%;
		width: 50rem;
	 }

	 @media (max-width: 1179px){
		left: 75%;
		width: 21rem;
	 }

	 @media (max-width: 768px){
		display: none;
	}


`;

export const TalentsImageInfoResponsive = styled.img`
	display: none;

	@media (max-width: 768px){
	    display: block;
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