import styled from 'styled-components';
import { Link } from "gatsby";



export const SocialImpact = styled.div`

background: rgb(15,43,146,0.07);
margin-top: 5rem;
display: flex;
align-items: center;
justify-content: center;
`;
export const SocialImpactText = styled.div`
width: 30%;
height: 27rem;
display: flex;
flex-direction: column;
justify-content: center;

`;
export const SocialImpactTextTitle = styled.h1`
width: 50%;
margin-left: 20%;
color: #00145D;
`;
export const SocialImpactTextSubTitle = styled.h2`
width: 50%;
margin-left: 20%;
margin-top: 15px;
color: #00145D;
`;
export const SocialImpactTextDescription = styled.p`
width: 50%;
margin-left: 20%;
margin-top: 15px;
color: #272727;
`;

export const SocialImpactImage = styled.div`
width: 70%;
height: 27rem;
display: flex;
flex-direction: column;
justify-content: center;

`;
export const SocialImpactImageInfo = styled.img`
width: 90%;
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;