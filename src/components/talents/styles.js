import styled from 'styled-components';
import { Link } from "gatsby";

export const Talents = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 8rem;
	padding: 5rem 3.4rem 3rem;
	width: 80%;
	border-radius: 0 20px 20px 0;
	background: #fed5b252;

	@media (min-width: 2560px) {
		height: 60rem;
		width: 75%;
	}
	@media (max-width: 1024px) {
		padding: 3rem 3.4rem 1rem;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		height: 100rem;
		border-radius: 0;
	}
	@media (max-width: 480px) {
		height: 46rem;
		padding: 3rem 1.4rem 1rem;
	}
`;
export const TalentsText = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 2560px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		justify-content: flex-start;
	}
`;

export const TalentsTextTitle = styled.h2`
	width: 50%;
	color: #FF611E;
	font-size: 2rem;
	font-weight: 800;

	@media (min-width: 2560px) {
		font-size: 5rem;
	}
	@media (max-width: 1440px) {
		font-size: 1.8rem;
	}
	@media (max-width: 1024px) {
		width: 60%;
		font-size: 1.5rem;
	}
	@media (max-width: 768px) {
		margin-left: 0;
		width: 100%;
		font-size: 4rem;
		text-align: left;
	}
	@media (max-width: 480px) {
		width: 80%;
		font-size: 1.8rem;
	}
`;

export const TalentsTextDescription = styled.p`
	margin-top: 3.12rem;
	width: 53%;
	color: #272727;
	font-size: 1.3rem;
    line-height: 1.6rem;

	@media (min-width: 2560px) {
		font-size: 2.5rem;
	}
	@media (max-width: 1440px) {
		margin-top: 1.6rem;
		font-size: 1rem;
    	line-height: 1.6rem;
	}
	@media (max-width 1024px) {
		margin-top: 1.2rem;
		width: 70%;
		font-size: 0.9rem;
	}
	@media (max-width: 768px) {
		margin-left: 0;
		width: 100%;
		font-size: 2rem;
		line-height: 50px;
		margin-top: 50px;
	}
	@media (max-width: 480px) {
		margin-top: 20px;
		padding-right: 2rem;
		font-size: 0.9rem;
		line-height: 1.6;
	}
`;

export const ButtonTalents = styled.div`
	width: 50%;
	height: 90px;
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1920px) {
		margin-top: 1.5rem;
	}
	@media (max-width: 1024px) {
		button {
			width: 9rem;
			height: 3.2rem;
			font-size: 1rem;
		}
	}
	@media (max-width: 768px) {
		margin: 0;
		width: 100%;
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

export const ImgBox = styled.figure`
	position: absolute;
	top: 4rem;
	right: -20%;
	width: 40rem;
	height: 32rem;
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
		left: 80%;
		width: 50rem;
	}
	@media (max-width: 1440px) {
		width: 30rem;	
		height: 23rem;
	}
	@media (max-width: 1024px) {
		width: 24rem;
		height: 18rem;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

export const TalentsImageInfo = styled.img`
	width: 100%;
	height: 100%;
	transition: 0.2s ease-out;
`

export const TalentsImageInfoResponsive = styled.img`
	display: none;

	@media (max-width: 768px){
	    display: block;
		min-width: 116vw;
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