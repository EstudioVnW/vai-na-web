import styled from 'styled-components';
import { Link } from "gatsby";



export const SocialImpact = styled.div`
	background: rgb(15,43,146,0.07);
	margin-top: 4rem;
	padding: 4rem 0 1rem;
	display: flex;
	flex-direction: column;

	@media (min-width: 2200px) {
		padding: 6rem 0;
	}
	@media (max-width: 480px) {
		min-height: 100vh;
	}
`;

export const SocialWrap = styled.div`
	width: 80%;
	margin: 0 auto;

	@media (max-width: 1200px) {
		width: 88%;
	}
`;

export const SocialImpactText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 480px) {
		align-items: flex-start;
	}
`;

export const SocialImpactTextSubTitle = styled.p`
	font: 300 1em 'Usual', sans-serif;
	letter-spacing: 0.42px;
	color: #FF611E;
	text-transform: uppercase;

	@media (max-width: 768px) {
		width: 100%;
	}
	
	@media (min-width: 2200px) {
		font-size: 1.8rem;
	}
	@media (max-width: 1200px) {
		font-size: .8em;
	}
	@media (max-width: 480px) {
		width: 50%;
	}
`;

export const SocialImpactTextTitle = styled.h2`
	margin: 2rem 0 0.5rem;
	color: #00145D;
	font-size: 2rem;
	font-weight: 800;
	text-align: center;

	@media (min-width: 2200px) {
		margin: 3rem 0 1rem;	
		font-size: 3.8rem;
	}
	@media (max-width: 1200px) {
		font-size: 1.8em;
		letter-spacing: -1px;
	}
	@media (max-width: 768px) {
		margin: 1rem 0;
	}
	@media (max-width: 480px) {
		font-size: 2rem;
		line-height: 1.1;
		text-align: start;
	}
`;

export const SocialImpactTextDescription = styled.p`
	width: 75%;
	color: #000;
	font-size: 1.3rem;
	line-height: 1.6;
	text-align: center;

	@media (min-width: 2200px) {
		width: 80%;
		font-size: 2.2rem;
	}
	@media (max-width: 1440px){
		width: 70%;
		font-size: 1rem;
	}
	@media (max-width: 768px) {
		width: 100%;
		font-size: 1.3rem;
		line-height: 1.58;
		text-align: left;
	}
	@media (max-width: 480px) {
		width: 100%;
		font-size: 1rem;
		line-height: 1.7;
		text-align: start;
	}
`;

export const SocialImpactImage = styled.div`
	margin: 2.5rem auto 0;
	width: 82%;
	display: flex;
	justify-content: center;

	@media (min-width: 2200px) {
		margin-top: 4rem;
		width: 87%;
	}
	@media (max-width: 1200px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;
export const SocialImpactImageInfo = styled.img`
	width: 100%;

	@media (max-width: 768px) {
		width: 100rem;
	}
`;

export const SocialImpactImageResponsive = styled.div`
	display: none;

	@media (max-width: 768px) {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 5rem;
	}
	@media (max-width: 480px) {
		margin-top: 2rem;
	}
`;

export const SocialImpactImageInfoResponsive = styled.img`
	width: 70%;

	@media (max-width: 480px) {
		width: 100%;
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