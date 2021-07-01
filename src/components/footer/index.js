import React from "react";
import styled, { keyframes } from 'styled-components';

//Images
import logoFacebook from '../../images/icons/icon-facebook.svg';
import logoInstagram from '../../images/icons/icon-instagram.svg';
import logoMedium from '../../images/icons/icon-medium.svg';
import logoLinkedin from '../../images/icons/icon-linkedin.svg';
import logoYoutube from '../../images/icons/icon-youtube.svg';
import logoVnW from '../../images/icons/logo-VNW.svg';
import logoPacto from '../../images/icons/logo-pacto.png';
import logoOds from '../../images/icons/logo-ods.png';
import iconRow from '../../images/icons/icon-row.png';


// animation 	
const tickerAnimation = keyframes`
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


// styles
const FooterContainer = styled.div `
	width: 100%;
	overflow: hidden;
`;

const DivisionContainer = styled.div `
	position: relative;
	bottom: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: .8rem 0;
	width: 103%;
	transform: matrix(1,-0.07,0.07,1,-4,60.54);
	box-shadow: 0px 0px 22px #00145D33;
	background: #FED5B2;
	overflow: hidden;
	z-index: 1;

	@media (max-width: 700px) {
		padding: 0.3rem 0;
	}
`;

const Division = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 0.5rem 0;
	animation: ${tickerAnimation} 50s linear infinite;
`;

const DivisionLine = styled.div `
	height: 1.2px;
	background: #FF611E;

	@media (max-width: 700px) {
		height: 1px;
	}
`;

const DivisionText = styled.p `
	margin: 0 1.5rem;
	font-size: 4em;
	font-weight: 100;
	color: #0F2B92;
	text-transform: uppercase;

	@media (max-width: 700px) {
		font-size: 3em;
		line-height: 1;
	}
`;

const LogoVnW = styled.img `
	width: 4rem;

	@media (max-width: 700px) {
		width: 3rem;
	}
`;



const Container = styled.footer`
	padding: 12rem 15rem 0;
	height: auto;
	background: #00145D;
    z-index: 0;

	@media (max-width: 1440px) {
		padding: 9rem 4.4rem 0;
	}

	@media (max-width: 980px) {
		padding: 6rem 2.6rem 0;
	}
`;

const Content = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;

	@media (max-width: 980px) {
		flex-direction: column;
    	align-items: center;
	}
`;

const ContentBox = styled.div`
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

const TextBox = styled.div`
	margin-bottom: 4rem;

	@media (max-width: 700px) {
		margin-bottom: 2rem;
	}
`;

const FooterText = styled.p`
	width: 24vw;
	color: #FFFFFF;
	font-size: 1.2em;
	line-height: 1.6;
	letter-spacing: 0.025rem;

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

const LinkBox = styled.nav`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-content: space-between;
	width: 27vw;
	height: 12rem;

	@media (max-width: 1440px) {
		width: 38vw;
	}
	@media (max-width: 980px) {
		width: 89vw;
	}
`;

const LinkText = styled.p`
	margin-bottom: 1rem;
	color: #FFFFFF;
	font-size: 1.2em;
	line-height: 1.6;
	letter-spacing: 0.025rem;

	@media (max-width: 980px) {
		font-size: 1.5em;
	}
	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

const Link = styled.a`
	margin-bottom: 0.5rem;
	color: #fff;
	font-size: 1.2em;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;
	text-decoration: underline;

	@media (max-width: 980px) {
		font-size: 1.5em;
	}
	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

const Logo = styled.img `
	position: absolute;
	top: -1rem;
	right: 0;
	width: 10rem;

	@media (max-width: 980px) {
		position: unset;
		margin-top: 2.5rem;
		width: 12rem;
	}

	@media (max-width: 700px) {
		width: 7rem;
	}
`;




const SocialBox = styled.div `
	font-weight: 600;

	@media (max-width: 980px) {
		width: 100%;
	}
`;

const IconBox = styled.figure `
	display: flex;
	justify-content: space-between;
	margin-top: 1.8rem;
	width: 66%;

	@media (max-width: 1440px) {
		width: 90%;
	}

	@media (max-width: 980px) {
		width: 100%;
	}
`;

const Icon = styled.img `
	width: 2.3rem;
	cursor: pointer;

	@media (max-width: 980px) {
		width: 4rem;
	}
	@media (max-width: 700px) {
		width: 2.8rem;
	}
`;

const ImgBox = styled.figure `
	display: flex;
	justify-content: space-around;
	width: 22rem;
	max-height: 11rem;

	@media (max-width: 1440px) {
		width: 25vw;
	}
	@media (max-width: 980px) {
		margin: 0 auto;
		width: 89vw;
	}
`;

const FooterImg = styled.img `
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

const ImgRow = styled.img `
	margin-top: 1.4rem;

	@media (max-width: 980px) {
		margin-top: 2rem;
	}
`;



const Baseboard = styled.div `
	margin-top: 2.5rem;
	padding: 1.5rem 0;
	width: 100%;
	text-align: center;
	border-top: 2px solid #0f2b92;
`;

const Text = styled.p `
	color: #FFAC2D;
	font-size: 1em;

	@media (max-width: 700px) {
		font-size 0.8em
	}
`;



const Footer = () => {
	return (
		<FooterContainer  id="footer">

		<DivisionContainer>
				<DivisionLine></DivisionLine>
					<Division>
						<DivisionText>Mercado</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Carreira</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>tecnologia</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Mercado</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Carreira</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>tecnologia</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Mercado</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Carreira</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>tecnologia</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Mercado</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>Carreira</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<DivisionText>tecnologia</DivisionText>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
					</Division>
				<DivisionLine></DivisionLine>
		</DivisionContainer>

		<Container>
			<Content>
				<div>
					<TextBox>
						<FooterText>
							Vai na Web tem por missão democratizar o acesso às tecnologias digitais avançadas, reduzir as desigualdades e promover um futuro mais próspero e sustentável.
						</FooterText>
					</TextBox>

					<ImgBox>
						<FooterImg src={logoPacto} alt="Logo Pacto Global" />
						<FooterImg src={logoOds} alt="Logo Objetivos de Desenvolvimento Sustentável" />
					</ImgBox>
					<ImgBox>
						<ImgRow src={iconRow} alt="" />
					</ImgBox>
				</div>

				<div>
					<ContentBox>
						<div>
							<LinkBox>
								<LinkText>Acesso rápido</LinkText>
								<Link>Sobre</Link>
								<Link>Serviços</Link>
								<Link>Cases</Link>
								<Link>Escolas</Link>
								{/* <Link>Perguntas Frequentes</Link>
								<Link>Media Kit</Link>
								<Link>Contato</Link> */}
							</LinkBox>
						</div>

						<SocialBox>
							<FooterText>Fique conectado!</FooterText>
							<FooterText>Siga nossas redes sociais e fique conectado com todas as novidades.</FooterText>

							<IconBox>
								<a href="https://www.facebook.com/vainaweb" target="_blank" rel="noopener noreferrer">
									<Icon src={logoFacebook} alt="Logo Facebook"/>
								</a>
								<a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer">
									<Icon iconInst src={logoInstagram} alt="Logo Instagram"/>
								</a>
								<a href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer">
									<Icon src={logoMedium} alt="Logo Medium"/>
								</a>
								<a href="https://br.linkedin.com/company/vainaweb" target="_blank" rel="noopener noreferrer">
									<Icon src={logoLinkedin} alt="Logo Linkedin"/>
								</a>
								<a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank" rel="noopener noreferrer">
									<Icon src={logoYoutube} alt="Logo Youtube"/>
								</a>
							</IconBox>
						</SocialBox>
					</ContentBox>
				</div>

				<div>
					<a href="/" rel="noopener noreferrer">
						<Logo src={logoVnW} alt="Logo Vai na Web"/>
					</a>
				</div>
			</Content>

			<Baseboard>
				<Text>Site desenvolvido com ❤️ por estudantes do Vai na Web · 2021</Text>
			</Baseboard>
		</Container>

		</FooterContainer>
	)
}

export default Footer;