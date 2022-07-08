/* eslint-disable no-tabs */
import styled, { keyframes } from 'styled-components';

export const tickerAnimation = keyframes`
	0% {
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, 0, 0);
		visibility: visible;
	}
	100% {
		transform: translate3d(-100%, 0, 0);
		-webkit-transform: translate3d(-100%, 0, 0);
	}
`;

export const FooterContainer = styled.div`
	position: relative;
	padding-top: 1.2rem;
	width: 100%;
	overflow: hidden;

	@media (min-width: 1600px) {
		padding-top: 2.2rem;
	}
`;

export const DivisionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: .8rem 0;
	width: 103%;
	box-shadow: 0px 0px 22px #00145D33;
	transform: matrix(1,-0.07,0.07,1,-4,60.54);
	background: #FED5B2;
	overflow: hidden;

	@media (max-width: 700px) {
		padding: 0.3rem 0;
	}
`;

export const DivisionBackground = styled.div`
	position: absolute;
	top: 5%;
	left: -1rem;
	width: 103%;
	height: 20rem;
	transform: matrix(1,-0.07,0.07,1,-4,60.54);
	background: #09255d;
	z-index: -1;

	@media (max-width: 980px) {
		display: none;
	}
`;

export const Division = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0.5rem 0;
	animation: ${tickerAnimation} 50s linear infinite;
`;

export const DivisionLine = styled.div`
	height: 1.2px;
	background: #FF611E;

	@media (min-width: 2200px) {
		height: 3px;
	}

	@media (max-width: 700px) {
		height: 1px;
	}
`;

export const DivisionText = styled.p`
	margin: 0 1.5rem;
	font-size: 4em;
	font-weight: 100;
	color: #0F2B92;
	text-transform: uppercase;

	@media (min-width: 2200px) {
		font-size: 7em;
	}
	
	@media (max-width: 700px) {
		font-size: 3em;
		line-height: 1;
	}
`;

export const LogoVnW = styled.img`
	width: 4rem;

	@media (min-width: 2200px) {
		width: 7rem;
	}

	@media (max-width: 700px) {
		width: 3rem;
	}
`;

export const Container = styled.footer`
	padding: 10rem 15rem 0;
	height: auto;
	background: #00145D;
    z-index: -1;

	@media (min-width: 2200px) {
		margin-top: 2rem;
	}

	@media (min-width: 1700px) {
		margin-top: 1rem;
	}

	@media (max-width: 1440px) {
		padding: 9rem 4.4rem 0;
	}

	@media (max-width: 980px) {
		padding: 9rem 2.6rem 0;
	}
`;

export const Content = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;

	@media (max-width: 980px) {
		flex-direction: column;
    align-items: center;
	}
`;

export const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	height: 100%;
	
	div nav {
		margin-right: 11rem;

		@media (max-width: 1440px) {
			margin-right: 10rem;
		}

		@media (max-width: 980px) {
			margin: 2rem 0;
		}
	}

	@media (max-width: 980px) {
		flex-direction: column;
		align-items: center;
	}

	&:nth-child(2) {
		padding-right: 3.7rem;

		@media (max-width: 1440px) {
			padding-right: 8.6rem;
		}
	}
`;

export const TextBox = styled.div`
	margin-bottom: 4rem;

	@media (min-width: 2200px) {
		margin-bottom: 6rem;
	}

	@media (max-width: 700px) {
		margin-bottom: 2rem;
	}
`;

export const FooterText = styled.p`
	width: 24vw;
	color: #FFFFFF;
	font-size: 1.2em;
	line-height: 1.6;
	letter-spacing: 0.025rem;

	@media (min-width: 2200px) {
		font-size: 2em;
	}

	@media (max-width: 1440px) {
		width: 26vw;
	}

	@media (max-width: 980px) {
		width: 66%;
		font-size: 1.5em;
	}

	@media (max-width: 700px) {
		width: 95%;
		font-size: 0.9em;
	}
`;

export const LinkBox = styled.ul`
	padding-right: 6rem;
	width: 30vw;
	height: 12rem;
	list-style: none;

	@media (min-width: 2200px) {
		height: 20rem;
	}

	@media (max-width: 1440px) {
		width: 38vw;
	}

	@media (max-width: 980px) {
		margin: 2rem 0 0;
		width: 89vw;
		padding-right: 0;
	}
`;

export const FooterLinkBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const LinkText = styled.p`
	margin-bottom: 1rem;
	color: #FFFFFF;
	font-size: 1.2em;
	line-height: 1.6;
	letter-spacing: 0.025rem;

	@media (min-width: 2200px) {
		font-size: 2em;
	}

	@media (max-width: 980px) {
		font-size: 1.5em;
	}

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const FooterLink = styled.li`
	margin-bottom: 0.5rem;
	font-size: 1.2em;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;
	cursor: pointer;

	a {
		color: #fff;
	}
	
	@media (min-width: 2200px) {
		margin-bottom: 1.5rem;
		font-size: 1.8em;
	}

	@media (max-width: 980px) {
		font-size: 1.5em;
	}

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const Logo = styled.img`
	position: absolute;
	top: -1rem;
	right: 0;
	width: 10rem;

	@media (min-width: 2200px) {
		width: 12vw;
	}

	@media (max-width: 980px) {
		position: unset;
		margin-top: 2.5rem;
		width: 12rem;
	}

	@media (max-width: 700px) {
		width: 7rem;
	}
`;

export const SocialBox = styled.div`
	font-weight: 600;

	@media (max-width: 980px) {
		width: 100%;
	}
`;

export const IconBox = styled.figure`
	display: flex;
	justify-content: space-between;
	margin-top: 1.8rem;
	width: 66%;

	@media (min-width: 2200px) {
		width: 90%;
	}

	@media (max-width: 1440px) {
		width: 90%;
	}

	@media (max-width: 980px) {
		width: 100%;
	}
`;

export const Icon = styled.img`
	width: 2.3rem;
	cursor: pointer;

	@media (min-width: 2200px) {
		width: 4.4rem;
	}

	@media (max-width: 980px) {
		width: 4rem;
	}

	@media (max-width: 700px) {
		width: 2.8rem;
	}
`;

export const ImgBox = styled.figure`
	display: flex;
	justify-content: space-around;
	width: 22rem;
	max-height: 11rem;

	@media (min-width: 2200px) {
		width: 38rem;
	}

	@media (max-width: 1440px) {
		width: 25vw;
	}

	@media (max-width: 980px) {
		margin: 0 auto;
		width: 89vw;
	}
`;

export const FooterImg = styled.img`
	width: 48%;
	height: 100%;
	border-radius: 10px;
	background: #fff;

	@media (max-width: 980px) {
		max-width: 25rem;
	}

	@media (max-width: 700px) {
	}
`;

export const ImgRow = styled.img`
	margin-top: 1.4rem;

	@media (max-width: 980px) {
		margin-top: 2rem;
	}
`;

export const Baseboard = styled.div`
	margin-top: 2.5rem;
	padding: 1.5rem 0;
	width: 100%;
	text-align: center;
	border-top: 2px solid #0f2b92;

	@media (min-width: 2200px) {
		margin-top: 5rem;
	}
`;

export const Text = styled.p`
	color: #FFAC2D;
	font-size: 1em;

	@media (min-width: 2200px) {
		font-size: 1.5em;
	}

	@media (max-width: 700px) {
		font-size 0.8em
	}
`;
