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
`;
export const TalentsText = styled.div`
width: 70%;
height: 27rem;
display: flex;
flex-direction: column;
justify-content: center;


`;
export const TalentsTextTitle = styled.h1`
width: 80%;
margin-left: 10%;
color: #FF611E;
`;

export const TalentsTextDescription = styled.p`
width: 65%;
margin-left: 10%;
margin-top: 20px;
color: #272727;
`;

export const ButtonTalents = styled.div`
width: 80%;
margin-top: 20px;
display: flex;
justify-content: center;
`;

export const TalentsImage = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;

`;
export const TalentsImageInfo = styled.img`
    width: 40rem;
	position: relative;
	left: 5rem;
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;