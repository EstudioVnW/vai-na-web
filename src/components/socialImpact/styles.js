import styled from 'styled-components';
import { Link } from "gatsby";



export const SocialImpact = styled.div`
background: rgb(15,43,146,0.07);
margin-top: 5rem;
display: flex;
flex-direction: column;

`;
export const SocialImpactText = styled.div`
width: 100%;
margin-top: 4rem;
display: flex;
flex-direction: column;
justify-content: center;

`;
export const SocialImpactTextTitle = styled.h1`
margin-left: 5%;
color: #00145D;
`;

export const SocialImpactTextDescription = styled.p`
width: 57%;
margin-left: 5%;
margin-top: 15px;
color: #272727;
`;

export const SocialImpactImage = styled.div`
width: 100%;
display: flex;
justify-content: center;

`;
export const SocialImpactImageInfo = styled.img`
width: 70%;
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;