import styled from 'styled-components';

export const Header = styled.header`
	margin-top: 7.25rem;
	min-height: 100vh;
`;

export const HeaderContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 2rem 6rem;
	background: #f1f3f4;

	@media (max-width: 430px) {
		.HeaderContainer {
			padding: 5rem 0rem;
		}
	}
`;

export const HImgBox = styled.figure`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 70%;

	@media (max-width: 430px) {
		padding-top: 12rem;
		align-items: center;
		width: 100%;
	}
`;

export const HImg = styled.img`
	width: 100%;

	@media (max-width: 430px) {
		display: none;
	}
`;

export const HImgMobile = styled.img`
	display: none;
	padding-left: 6rem;
	width: 106%;

	@media (max-width: 430px) {
		display: block;
	}
`;

export const HTextBox = styled.div`
	padding: 3rem 1rem;
	width: 65%;
	font: 300 1.3em sans-serif;

	@media (max-width: 430px) {
		margin-top: -4rem;
		padding: 0 3rem 4rem 0;
		width: 70%;
		font-size: 2.2em;
		line-height: 1.5;
	}
`;

export const HText = styled.p`
`;

export const HImgLogo = styled.img`
	position: absolute;
	right: 0;
	width: 16%;

	@media (max-width: 430px) {
		position: static;
		width: 22%;
	}
`;

export const HDownArrow = styled.div`
	width: 100%;

	@media (max-width: 430px) {
		display: none;
	}
`;

export const HCard = styled.div`
	position: absolute;
	left: 6%;
	bottom: 21%;
	padding: 2rem 3rem 2rem 2rem;
	width: 44%;
	border-radius: 1vw;
	background: #fed5b2;

	@media (max-width: 438px) {
		padding-right: 2em;
	}

	@media (max-width: 430px) {
		top: 2%;
		bottom: auto;
		padding: 2.5rem 2rem 2rem 2.8rem;
		width: 64%;
		border-radius: 2.6vw;
	}
`;

export const HCardDetail = styled.div`
	display: flex;
	padding-bottom: 1.6rem;
	border-bottom: 0.3vw solid #ffac2d;

	@media (max-width: 430px) {    
		padding-bottom: 2rem;
		border-bottom: 0.6vw solid #ffac2d;
	}
`;

export const HCardCircle = styled.div`
	margin-right: 0.5rem;
	width: 1.1em;
	height: 1.1em;
	border-radius: 50%;
	background: #ffac2d;

	@media (max-width: 430px) {    
		margin-right: 0.6rem;
		width: 1.3em;
		height: 1.3em;
	}
`;

export const HCardText = styled.h1`
	padding: 1.4rem 0.5rem 0.5rem;
	font: 800 2.9em 'Usual', sans-serif;
	color: #00145d;
	line-height: 1.2;

	@media (max-width: 430px) {
		padding: 1.4rem 0 0;
		font-size: 3.5em;
		line-height: 1.2;
	}
`;