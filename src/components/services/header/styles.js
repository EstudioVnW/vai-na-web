import styled from 'styled-components';

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100vh - 7rem);
	margin-top: 7rem;
	position: relative;

	 @media(max-width: 1440px) {
		 height: auto;
	 }

	 `;

	 export const HeaderWrap = styled.div`
	position: relative;
	width: 80%;
	height: 90%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	
	@media(max-width: 1440px) {
		height: auto;
		padding: 2rem 0;
	}

	@media (max-width: 768px) {
		margin: 5rem 0;
	}
	
	@media (max-width: 425px) {
		height: auto;
		margin-top: 3rem;
		padding: 5rem 0;
	}
`;

export const HImg = styled.img`
	width: 100%;

	@media (max-width: 790px) {
	display: block;
	width: 100%;
}
`;

export const HText = styled.p`

`;

export const HDownArrow = styled.figure`
	position: absolute;
	bottom: 0;
	left: 0;

	@media (max-width: 790px) {
		display: none;
	}
`;

export const HTextBox = styled.div`
	width: 65%;
	font: 300 1.3rem sans-serif;
	line-height: 1.6rem;

	@media (max-width: 425px) {
		width: 100%;
		font-size: 0.8rem;
		line-height: 1.2rem
	}
`;

export const HImgLogo = styled.img`
	position: absolute;
	bottom: 80%;
	right: 0;
	z-index: 5;
	width: 15%;	

	@media (max-width: 790px) {
		top: 106%;
		left: 50%;
    	transform: translate(-50% , -50%);
	}
	
	@media (max-width: 425px) {
		top: 130%;
		width: 25%;
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
		justify-content: center;
		height: 80%;
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
		font-size: 1.5rem;
		width: 85%;
	}

	@media (max-width: 425px) {
		font-size: 1rem;
		padding: 0.5rem 0.5rem;
		width: 100%;
	}  
`;