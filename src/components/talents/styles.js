import styled from 'styled-components';
import { Link } from "gatsby";

export const Talents = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 8rem;
	padding: 5rem 0 3rem;

	@media (min-width: 2560px) {
		height: 60rem;
		width: 75%;
	}
	@media (max-width: 1440px) {
		padding: 5rem 0 0;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		margin-top: 0.8rem;
		padding: 0;
		width: 100%;
		border-radius: 0;
	}
	@media (max-width: 480px) {
		height: auto;
	}
`;

export const TalentsBackground = styled.div`
	position: absolute;
	width: 70%;
    height: 85%;
	border-radius: 0 20px 20px 0;
	background: #fed5b252;
	z-index: -1;
	
	@media (max-width: 768px) {
		width: 100%;
		border-radius: 0;
	}
`

export const TalentsWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	padding: 3rem 1.4rem 1rem;
	width: 80%;
	
	@media (max-width: 1200px) {
		width: 90%;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 2rem 0 0;
		width: 100%;
	}
`

export const TalentsText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 48%;

	@media (min-width: 2560px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		justify-content: flex-start;
		width: 100%;
		padding: 0 1.4rem;
	}
`;

export const TalentsTextTitle = styled.h2`
	width: 80%;
	color: #FF611E;
	font-size: 2rem;
	font-weight: 800;

	@media (min-width: 2560px) {
		font-size: 5rem;
	}
	@media (max-width: 1440px) {
		width: 90%;
		font-size: 1.8rem;
	}
	@media (max-width: 768px) {
		margin-left: 0;
		width: 100%;
		font-size: 2rem;
		text-align: left;
	}
	@media (max-width: 480px) {
		width: 80%;
		font-size: 1.8rem;
	}
`;

export const TalentsTextDescription = styled.p`
	margin-top: 2rem;
	color: #000;
	font-size: 1.3rem;
	line-height: 1.25;

	@media (min-width: 2560px) {
		font-size: 2.5rem;
	}
	@media (max-width: 1440px) {
		margin-top: 1.6rem;
		font-size: 1.1rem;
	}
	@media (max-width: 1024px) {
		margin-top: 1.2rem;
		width: 90%;
		font-size: 0.9rem;
	}
	@media (max-width: 768px) {
		margin-top: 2rem;
		width: 100%;
		font-size: 1rem;
		line-height: 1.58;
	}
	@media (max-width: 480px) {
		margin-top: 1rem;
		padding-right: 2rem;
		font-size: 0.9rem;
		line-height: 1.6;
	}
`;

export const ButtonTalents = styled.div`
	width: 100%;
	height: 90px;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1920px) {
		margin-top: 1.5rem;
	}
	@media (max-width: 1024px) {
		margin: 0;

		button {
			width: 9rem;
			height: 3.2rem;
			font-size: 1rem;
		}
	}
	@media (max-width: 768px) {
		margin-top: 1rem;
		width: 100%;
	}
`;

export const ImgBox = styled.figure`
	width: 30rem;
	height: 25rem;
    border-radius: 15px;
	border: 2px solid #FF611E;
	box-shadow: rgb(232, 235, 245) 0px 0px 10px;
	overflow: hidden;

	&:hover {
		img {
		   transform: scale(1.1);
		}
	 }

	@media (min-width: 2560px) {
		width: 50rem;
	}
	@media (max-width: 1440px) {
		width: 25rem;
		height: 20rem;
	}
	@media (max-width: 1024px) {
		width: 20rem;
		height: 16rem;
	}
	@media (max-width: 768px) {
		margin: 1rem auto 0;
		width: 100%;
		height: auto;
		border: none;
		border-radius: 0;
	}
`;

export const TalentsImageInfo = styled.img`
	width: 100%;
	height: 100%;
	transition: 0.2s ease-out;
	
	@media (max-width: 768px) {
		display: none;
	}
`

export const TalentsImageInfoResponsive = styled.img`
	display: none;
	width: 100%;
	height: 100%;
	transition: 0.2s ease-out;

	@media (max-width: 768px){
	    display: block;
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