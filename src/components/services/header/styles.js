/* eslint-disable no-tabs */
import styled from 'styled-components';

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	position: relative;

	@media (max-width: 1366px) {
		align-items: flex-end;
	}

	@media (max-width: 1024px) {
		align-items: center;
		margin-top: 1rem;
		height: 70vh;
	}

	@media (max-width: 768px) {
		margin-top: 8rem;
		height: 100vh;			
	}
	
	@media (max-width: 425px) {
		height: 75vh;
	}
`;

export const HeaderWrap = styled.div`
	position: relative;
	width: 80%;
	height: 90%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 1024px) {
		height: 60%;
		width: 90%;
	}

	@media (max-width: 768px) {
		height: 70%;
	}

	@media (max-width: 425px) {
		height: 90%;
	}
`;

export const HImgBox = styled.figure`
	width: 100%;
	border-radius: 0.93rem;
	border: 2px solid #00145D;
	overflow: hidden;
	box-shadow: 0 0 10px 10px rgb(232, 235, 245);

	@media (max-width: 790px) {
		display: block;
		margin-bottom: 0.5rem;
		width: 95%;
	}
`;

export const HImg = styled.img`
	width: 100%;
	transform: scale(1.040);
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 790px) {
		transform: scale(1.2)

		&:hover {
			transform: scale(1.25)
		}
	}
`;

export const HDescription = styled.p`
	padding-left: 1rem;
	font: 300 1.1rem sans-serif;
	line-height: 1.4;
	color: #333;

	@media (min-width: 2200px) {
		font-size: 2rem;
	}

	@media (max-width: 425px) {
		font-size: 0.8rem;
		line-height: 1.2rem;
	}
`;

export const HTextBox = styled.div`
	width: 70%;

	@media (max-width: 790px) {
		width: 95%;
	}
`;

export const HDownArrow = styled.figure`
	position: absolute;
	bottom: 4%;
	left: 0;
	width: 1.4rem;

	img {
		width: 100%
	}

	@media (min-width: 2200px) {
		width: 2rem;
	}

	@media (max-width: 790px) {
		left: 42vw;
	}
`;

export const HContentBox = styled.div`
	width: 66%;
	height: 74%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	position: relative;
	
	@media (max-width: 790px) {
		justify-content: center;
		height: 70%;
		width: 100%;
	} 
`;

export const HCard = styled.div`
	background: #fed5b2;
	width: 53%;
	padding: 1.4rem 1.7rem;
	position: absolute;
	left: 0;
	bottom: 20%;
	border-radius: 15px;

	@media (min-width: 2200px) {
    padding: 3rem 4rem;
	}

	@media (max-width: 1366px) {
		bottom: 17%;
	}

	@media (max-width: 790px) {
		bottom: 73%;
		padding: 0.5rem 1rem;
	}

	@media (max-width: 425px) {
		bottom: 70%;
		width: 70%;
		border-radius: 10px;
	}
`;

export const HCardDetail = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 0.45rem;
	border-bottom: 2px solid #ffac2d;

	@media (min-width: 2200px) {
		border-bottom-width: 4px;
	}

	@media (max-width: 790px) {
		padding: 0;
		padding-bottom: 0.55rem;
	}
`;

export const HCardCircle = styled.div`
	margin: 0 0.5rem 0.75rem 0;
	width: .85rem;
	height: .85rem;
	border-radius: 50%;
	background: #ffac2d;

	@media (min-width: 2200px) {
		margin: 0 1rem 1.6rem 0;
    width: 1.8rem;
    height: 1.8rem;
	}

	@media (max-width: 790px) {
		margin: 0.5rem 0.3rem 0 0;
		width: 0.65rem;
		height: 0.65rem;
	}
`;

export const HCardText = styled.h1`
	padding: 1.4rem 0.5rem 0.5rem;
	width: 98%;
	font: 800 2.6rem 'Usual', sans-serif;
	color: #00145d;

	@media (min-width: 2200px) {
		padding-top: 2rem;
		font-size: 4rem;
	}

	@media (max-width: 1024px) {
		font-size: 2rem;
	}

	@media (max-width: 425px) {
		font-size: 1.2rem;
		padding: 0.6rem 0 0.2rem;
		width: 100%;
	}  
`;
