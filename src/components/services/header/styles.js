import styled from 'styled-components';

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	background: gray;
	height: calc(100vh - 7rem);
`;

export const HeaderWrap = styled.div`
	background: green;
	height: 70%;
	width: 90%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media (max-width: 790px) {
		width: 95%;
	}
`;

export const HImgBox = styled.figure`
	background: pink;
	width: 65%;
	position: relative;

	@media (max-width: 790px) {
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
	// width: 65%;
	// font: 300 1.25rem sans-serif;
	// line-height: 1.5rem;

	// @media (max-width: 790px) {
	// 	width: 85%;
	// 	font-size: 0.95rem;
	// }
`;

export const HText = styled.p`
`;

export const HImgLogo = styled.img`
	position: absolute;
	top: -5%;
	right: 0;
	// width: 16%;

	// @media (max-width: 790px) {
	// 	position: static;
	// 	width: 22%;
	// }
`;

export const HDownArrow = styled.figure`
	// width: 100%;

	// @media (max-width: 790px) {
	// 	display: none;
	// }
`;

export const HCard = styled.div`
	background: #fed5b2;
	width: 60%;
	padding: 1rem;
	position: absolute;
	left: -40%;
	bottom: 20%;
	border-radius: 10px;

	@media (max-width: 790px) {
		width: 100%;
		bottom: 100%;
		left: -5%;
	}
`;

export const HCardDetail = styled.div`
	width: 100%;
	padding: 0.25rem;
	display: flex;
	padding-bottom: 1rem;
	border-bottom: 2px solid #ffac2d;
`;

export const HCardCircle = styled.div`
	margin-right: 0.5rem;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background: #ffac2d;

	// @media (max-width: 790px) {    
	// 	width: 0.75rem;
	// 	height: 0.75rem;
	// }
`;

export const HCardText = styled.h1`
	// padding: 1.4rem 0.5rem 0.5rem;
	// font: 800 2.9em 'Usual', sans-serif;
	// color: #00145d;
	// line-height: 1.2;

	// @media (max-width: 790px) {
	// 	padding: 1rem 0 0;
	// 	font-size: 1rem;
	// 	line-height: 1.2;
	// }
`;