import styled from 'styled-components';

export const HeaderContainer = styled.section`
	// background: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 7rem);
`;

export const HeaderWrap = styled.div`
	// background: green;
	position: relative;
	width: 90%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 790px) {
		width: 95%;
	}
`;

export const HImgBox = styled.figure`
	// background: pink;
	width: 65%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media (max-width: 790px) {
		align-items: flex-start;
		width: 95%;
	}
`;

export const HImg = styled.img`
	// width: 100%;

	// @media (max-width: 790px) {
	// 	display: none;
	// }
`;

export const HImgMobile = styled.img`
	// display: none;
	// padding-left: 6rem;
	// width: 106%;

	// @media (max-width: 790px) {
	// 	display: block;
	// }
`;

export const HTextBox = styled.div`
	width: 65%;
	font: 300 1.5rem sans-serif;
	line-height: 2.063rem;

	@media (max-width: 790px) {
		width: 85%;
		font-size: 0.95rem;
		line-height: 1.125rem;
		margin-top: 2rem;
	}
`;

export const HText = styled.p`

`;

export const HImgLogo = styled.img`
	position: absolute;
	top: -5%;
	right: 0;

	@media (max-width: 790px) {
		position: static;
		width: 22%;
		margin: 0 auto;
	}
`;

export const HDownArrow = styled.figure`
	position: absolute;
	padding: 1rem 0;
	bottom: 0;
	left: 0;

	@media (max-width: 790px) {
		display: none;
	}
`;

export const HCard = styled.div`
	background: #fed5b2;
	width: 75%;
	padding: 2.25rem;
	position: absolute;
	left: -54%;
	bottom: 0;
	border-radius: 10px;

	@media (max-width: 790px) {
		// 1.313
		padding: 0.85rem 1rem;
		width: 60%;
		left: -5%;
		bottom: 90%;
	}
`;

export const HCardDetail = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 1rem;
	border-bottom: 2px solid #ffac2d;

	@media (max-width: 790px) {
		padding: 0;
		padding-bottom: 0.55rem;
	}
`;

export const HCardCircle = styled.div`
	margin-right: 0.5rem;
	margin-bottom: 0.75rem;
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	background: #ffac2d;

	@media (max-width: 790px) {
		margin-bottom: 0;
		width: 0.55rem;
		height: 0.55rem;
	}
`;

export const HCardText = styled.h1`
	padding: 1.4rem 0.5rem 0.5rem;
	font: 800 3.75rem 'Usual', sans-serif;
	color: #00145d;
	line-height: 1.2;

	@media (max-width: 790px) {
		padding: 1rem 0 0;
		font-size: 1rem;
		line-height: 1.2;
	}
`;