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
	width: 95%;
}
`;

export const HImg = styled.img `
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
`

export const HDescription = styled.p`
	font: 300 1.3rem sans-serif;
	line-height: 1.8rem;
	margin-top: 0.25rem;

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
	bottom: 2%;
	left: 0;

	@media (max-width: 790px) {
		display: none;
	}
`;

export const HContentBox = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;
	
	@media (max-width: 790px) {
		justify-content: center;
		height: 70%;
		width: 100%;
	} 
`;

export const HCard = styled.div`
	background: #fed5b2;
	width: 50%;
	padding: 1.35rem;
	position: absolute;
	left: 0;
	bottom: 20%;
	border-radius: 10px;

	@media (max-width: 1366px) {
		bottom: 20%;
	}
	@media (max-width: 790px) {
		bottom: 73%;
		padding: 0.4rem;
	}
	@media (max-width: 425px) {
		bottom: 70%;
		width: 70%;
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
		margin-top: 0.5rem;
		width: 0.65rem;
		height: 0.65rem;
	}
`;

export const HCardText = styled.h1`
	padding: 1.4rem 0.5rem 0.5rem;
	width: 98%;
	font: 800 2.6rem 'Usual', sans-serif;
	color: #00145d;
	

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
	@media (max-width: 425px) {
		font-size: 1.2rem;
		padding: 0.5rem 0.5rem;
		width: 100%;
	}  
`;