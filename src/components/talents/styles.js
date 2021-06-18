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


@media (max-width: 768px) {
	flex-direction: column;
	width: 100%;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
`;
export const TalentsText = styled.div`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px) {
	width: 80%;
	margin-top: 50px;
}


`;
export const TalentsTextTitle = styled.h1`
width: 80%;
margin-left: 10%;
color: #FF611E;

@media (max-width: 768px) {
	margin-left: 0;
	width: 100%;
	font-size: 4rem;
	text-align: left;
}
`;

export const TalentsTextDescription = styled.p`
width: 65%;
margin-left: 10%;
margin-top: 20px;
color: #272727;

@media (max-width: 768px) {
	margin-left: 0;
	width: 100%;
	font-size: 2rem;
	line-height: 50px;
	margin-top: 50px;
}
`;

export const ButtonTalents = styled.div`
width: 80%;
margin-top: 20px;
display: flex;
justify-content: center;

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

@media (max-width: 768px) {
	display: none;
}

`;
export const TalentsImageInfo = styled.img`
    width: 40rem;
	position: relative;
	left: 5rem;

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