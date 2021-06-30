import styled from 'styled-components';
import { Link } from "gatsby";



export const SocialImpact = styled.div`
background: rgb(15,43,146,0.07);
margin-top: 5rem;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
	min-height: 85rem;
	margin-top: 2.3rem;
}

@media (max-width: 480px) {
	min-height: 165vh;
}

`;
export const SocialImpactText = styled.div`
width: 100%;
margin-top: 4rem;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px) {
	width: 90%;

}

`;
export const SocialImpactTextTitle = styled.h1`
margin-left: 5%;
color: #00145D;
font-size: 2.6rem;

@media (min-width: 2560px) {
	font-size: 5rem;
}

@media (max-width: 768px) {
	width: 70%;
	font-size: 3.5rem;
}

@media (max-width: 480px) {
	font-size: 2rem;
	width: 90%;
}
`;

export const SocialImpactTextDescription = styled.p`
width: 57%;
margin-left: 5%;
margin-top: 15px;
color: #272727;
font-size: 1.5rem;
line-height: 2rem;

@media (min-width: 2560px) {
	width: 70%;
	font-size: 2.5rem;
}

@media (max-width: 1360px){
	width: 80%;
}

@media (max-width: 768px) {
	width: 100%;
	font-size: 2rem;
	line-height: 50px;
}

@media (max-width: 480px) {
	font-size: 1rem;
	line-height: 25px;
	width: 90%;
}
`;

export const SocialImpactImage = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media (max-width: 768px) {
	display: none;
}

`;
export const SocialImpactImageInfo = styled.img`
width: 70%;

@media (max-width: 768px) {
width: 100rem;
}
`;


export const SocialImpactImageResponsive = styled.div`

display:none;

@media (max-width: 768px) {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 50px;
}
@media (max-width: 480px) {
	margin-top: 20px;
}

`;

export const SocialImpactImageInfoResponsive = styled.img`
@media (max-width: 480px) {
	width: 80%;
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