import styled from 'styled-components';

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 7rem);
	position: relative;

	@media (max-width: 768px) {
		align-items: flex-start;
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

	 @media (max-width: 790px) {
		display: block;
	 }
`;

export const HText = styled.p`

`;

export const HDownArrow = styled.figure`
	position: absolute;
	padding: 1rem 0;
	bottom: 0%;
	left: 0;

	@media (max-width: 790px) {
		display: none;
	}
`;

export const HTextBox = styled.div`
	width: 65%;
	font: 300 1.5rem sans-serif;
	line-height: 2.063rem;

	@media (max-width: 1440px) {
		font-size: 1.2rem;
	}
	
	@media (max-width: 1024px) {
		font-size: 1.050rem;
		line-height: 1.5rem;
	
	}

	@media (max-width: 790px) {
		width: 85%;
		font-size: 1.2rem;
		line-height: 1.5rem;
		margin-top: 1rem;
	}

	@media (max-width: 425px) {
		width: 85%;
		font-size: 1rem;
		line-height: 1.3rem;
	}
`;

export const HImgLogo = styled.img`
	position: absolute;
	top: -5%;
	right: 0;
	z-index: 5;

	@media (max-width: 1024px) {
		width: 20%;	
	}

	@media (max-width: 790px) {
    top: 90%;
    left: 45%;
    transform: translate(-50% , -50%);
    position: absolute;
	}

	@media (max-width: 425px) {
		width: 20%;	
		top: 90%;
	}
`;

export const HeaderWrap = styled.div`
	position: relative;
	width: 90%;
	height: 90%;
	display: flex;
	justify-content: flex-end;

	@media (max-width: 1440px) {
		height: 95%;
		align-items: center;
	}
	@media (max-width: 790px) {
		width: 90%;
		height: 95%;
		justify-content: center;
		align-items: flex-end;
	}
`;

export const HImgBox = styled.figure`
	width: 65%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;

	@media (max-width: 790px) {
		align-items: flex-start;
		height: 80%;
	}

	@media (max-width: 425px) {
		width: 100%;
		align-items: center;
	}
`;

export const HCard = styled.div`
	background: #fed5b2;
	width: 50%;
	padding: 1.55rem;
	position: absolute;
	left: 0;
	bottom: 0;
	border-radius: 10px;

	@media (max-width: 1920px) {
		bottom: 30%;
	}

	@media (max-width: 1440px) {
		bottom: 20%;
		width: 48%;
	}

	@media (max-width: 1024px) {
		bottom: 25%;
	}

	@media (max-width: 790px) {
		padding: 1.2rem 1rem;
		width: 60%;
		bottom: 75%;
	}

	@media (max-width: 425px) {
		padding: .8rem .8rem;
		width: 60%;
		bottom: 73%;
	}
`;

export const HCardDetail = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 0.45rem;
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

	
	@media (max-width: 1440px) {
		font-size: 2.3rem
	}

	
	@media (max-width: 1024px) {
		font-size: 1.5rem
	}

	@media (max-width: 790px) {
		padding: 1rem 0 0;
		font-size: 1.3rem;
		line-height: 1.2;
	}

	@media (max-width: 425px) {
		padding: 0.5rem 0 0;
		font-size: 0.870rem;
		line-height: 1.2;
	}
`;