import styled from 'styled-components';

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 7rem);
	position: relative;

	@media (max-width: 1366px) {
		height: 100vh;
		align-items: flex-start;
		padding-top: 2rem;
	}

	@media (max-width: 1024px) {
		height: calc(100vh - 3rem);
		align-items: center;
		padding: 0;
	}
`;

export const HImg = styled.img`
	// width: 100%;
	// @media (max-width: 790px) {
	// 	display: none;
	// }
	@media (max-width: 1366px) {
		width: 90%;
	}

	@media (max-width: 1024px) {
		width: 70%;
	}
`;

export const HImgMobile = styled.img`
	// display: none;
	// padding-left: 6rem;
	// width: 106%;

	// @media (max-width: 790px) {
	// 	display: block;
	// }
`;

export const HText = styled.p`
	@media (max-width: 1366px) {
		width: 100%;
	}
`;

export const HDownArrow = styled.figure`
	position: absolute;
	padding: 1rem 0;
	bottom: 0%;
	left: 0;

	@media (max-width: 1366px) {
		top: 28rem;
		left: 12%;
	}

	@media (max-width: 1120px) {
		top: 24.5rem;
	}

	@media (max-width: 1024px) {
		top: 20rem;
		left: 0;
	}

	@media (max-width: 790px) {
		display: none;
	}
`;

export const HTextBox = styled.div`
	width: 65%;
	font: 300 1.5rem sans-serif;
	line-height: 2.063rem;

	@media (max-width: 1366px) {
		font-size: 1.175rem;
		line-height: 2rem;
		padding-top: 1.5rem;
		padding-left: 2.5rem;
	}

	@media (max-width: 1120px) {
		font-size: 1.185rem;
		line-height: 2rem;
		padding-top: 1.5rem;
		padding-left: 2.8rem;
	}

	@media (max-width: 1024px) {
		font-size: 1.150rem;
		line-height: 2rem;
		padding-left: 4rem;
		width: 60%;
	}

	@media (max-width: 790px) {
		width: 85%;
		font-size: 0.95rem;
		line-height: 1.125rem;
		margin-top: 2rem;
	}
`;

export const HImgLogo = styled.img`
	position: absolute;
	top: -5%;
	right: 0;
	z-index: 5;
	
	@media(max-width: 1366px) {
		top: 0;
		width: 15%;
	}

	@media(max-width: 1024px) {
		top: 0;
		width: 12%;
	}

	@media (max-width: 790px) {
		width: 25%;
    top: 80%;
    left: 45%;
    transform: translate(-50% , -50%);
    position: absolute;
	}
`;

export const HeaderWrap = styled.div`
	position: relative;
	width: 90%;
	height: 90%;
	display: flex;
	justify-content: flex-end;

	
	@media (max-width: 1440px) {
		height: 70%;
		width: 95%;
	}

	@media (max-width: 1024px) {
		align-items: flex-end;
	}

	@media (max-width: 790px) {
		width: 90%;
		height: 95%;
	}
`;

export const HImgBox = styled.figure`
	width: 65%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;

	@media (max-width: 1366px) {
		right: 6%;
	}

	@media (max-width: 1024px) {
		width: 95%;
	}

	@media (max-width: 790px) {
		align-items: flex-start;
		height: 80%;
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

	@media (max-width: 1366px) {
		width: 39%;
		bottom: -4%; 
		left: 12%;
		padding: 1.55rem;
		
	}

	@media (max-width: 1024px) {
		left: 0;
		bottom: 30%;
		width: 43%;
	}

	@media (max-width: 790px) {
		padding: 0.85rem 1rem;
		width: 60%;
		bottom: 75%;
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

	@media (max-width: 1366px) {
		width: 0.8rem;
		height: 0.8rem;
	}

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

	@media (max-width: 1366px) {
		font-size: 2.2rem;
		padding: 0;
		padding-top: 0.5rem;
	}

	@media (max-width: 1120px) {
		font-size: 1.8rem;
		padding: 0;
		padding-top: 0.5rem;
	}


	@media (max-width: 790px) {
		padding: 1rem 0 0;
		font-size: 1rem;
		line-height: 1.2;
	}
`;