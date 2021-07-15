import styled from 'styled-components';
import { Link } from "gatsby";



export const SocialImpact = styled.div`
	background: rgb(15,43,146,0.07);
	margin-top: 5rem;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;

	@media (max-width: 480px) {
		min-height: 170vh;
	}
`;

export const SocialWrap = styled.div`
	width: 80%;
	margin: 0 auto;

	@media (max-width: 1200px) {
		width: 90%;
	}
`;

export const SocialImpactText = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SocialImpactTextTitle = styled.h2`
	color: #00145D;
	font-size: 2rem;
	font-weight: 800;

	@media (min-width: 2560px) {
		font-size: 5rem;
	}
	@media (max-width: 768px) {
		width: 70%;
		font-size: 1.6rem;
		letter-spacing: -1px;
	}
	@media (max-width: 480px) {
		width: 90%;
		font-size: 2rem;
		line-height: 1.1;
	}
`;

export const SocialImpactTextDescription = styled.p`
	width: 75%;
	margin-top: 0.7rem;
	color: #000;
	font-size: 1.3rem;
	line-height: 1.2;

	@media (min-width: 2560px) {
		width: 70%;
		font-size: 2.5rem;
	}
	@media (max-width: 1360px){
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 100%;
		font-size: 1rem;
		line-height: 1.58;
	}
	@media (max-width: 480px) {
		width: 90%;
		font-size: 0.9rem;
		line-height: 1.7;
	}
`;

export const SocialImpactImage = styled.div`
	margin: 1rem 0;
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		display: none;
	}
`;
export const SocialImpactImageInfo = styled.img`
	width: 80%;

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
		margin-top: 50px;
	}
	@media (max-width: 480px) {
		margin-top: 2rem;
	}
`;

export const SocialImpactImageInfoResponsive = styled.img`
	width: 60%;

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