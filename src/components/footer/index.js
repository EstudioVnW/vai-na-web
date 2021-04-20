import React from "react";
import styled from 'styled-components';
import logoFacebook from '../../images/icons/icon-facebook.svg';
import logoInstagram from '../../images/icons/icon-instagram.svg';
import logoEmail from '../../images/icons/icon-email.svg';
import logoLinkedin from '../../images/icons/icon-linkedin.svg';
import logoYoutube from '../../images/icons/icon-youtube.svg';
import logoVnW from '../../images/icons/logo-VNW.svg'

// styles
const ContainerFooter = styled.div `
	width: 100%;
	overflow: hidden;
`;

const ContainerDivision = styled.div `
	background-color: #FED5B2;
	height: 7rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transform: matrix(1, -0.04, 0.07, 1, -4, 60.54);
	box-shadow: 0px 0px 22px #00145D33;
	@media (max-width: 424px) {
		width: 49rem;
	}
`;

const BoxDivision = styled.div `
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0.7rem 0;
`;

const LineOrange = styled.div `
	height: 1px;
	background-color: #FF611E;
`;

const TitleSpotlight = styled.p `
	font-size: 59px;
	text-transform: uppercase;
	color: #0F2B92;
	font-weight: 100;
	@media (max-width: 424px) {
		font-size: 30px;
	}
`;

const LogoVnW = styled.img `
	width: 4rem;
`;

const Container = styled.footer`
	background-color: #00145D;
	height: auto;
	@media (max-width: 424px) {
		width: 48rem;
	}
`;

const ContainerAll = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Box = styled.div `
	display: flex;
	justify-content: space-evenly;
	padding: 5rem;
	margin-top: 5rem;
	@media (max-width: 424px) {
		display: flex;
		flex-wrap: wrap;
	}	
`;

const ContainerTextIcons = styled.div `
	display: flex;
	width: 26rem;
	@media (max-width: 424px) {
		width: 100%;
		margin-top: 4rem;
	}	
`;

const TextFooter = styled.p`
	color: #FFFFFF;
	width: 23%;
	line-height: 1.5rem;
	@media (max-width: 424px) {
		width: 100%;
		text-align: center;
		font-size: 20px;
	}	
`;

const BoxText = styled.div `
	display: flex;
	flex-direction: column;
	margin-top: -8px;
	width: 77%;
`;

const TextLink = styled.a `
	color: #FFFFFF;
	text-align: justify;
	margin-top: 8px;
	@media (max-width: 424px) {
		font-size: 20px;
	}
`;

const BoxContact = styled.div `
	display: flex;
	flex-direction: column;
	margin-left: 2.5rem;
	margin-top: -0.5rem;
`;

const TextContact = styled.p `
	color: #FFFFFF;
	width: 100%;
	line-height: 1.5em;
	@media (max-width: 424px) {
		font-size: 20px;
		width: 80%;
	}
`;

const BoxIcons = styled.div `
	display: flex;
	justify-content: space-between;
	width: 69%;
	margin-top: 1.8rem;
	@media (max-width: 424px) {
		width: 100%;
    	padding: 4rem;
	}
`;

const Icon = styled.img `
	width: 2.5rem;
	cursor: pointer;
`;

const Logo = styled.img `
	width: 6rem;
	margin-bottom: 8rem;
	margin-top: -0.5rem;
	@media (max-width: 424px) {
		display: none;
	}
`;

const LineDivision = styled.div `
	background-color: #0F2B92;
	height: 2px;
	width: 76%;
	margin-top: -4rem;
`;

const Text = styled.p `
	color: #FFAC2D;
	font-size: 14px;
	padding: 1.5rem;
`;

const Footer = () => {
	return (
		<ContainerFooter>
		<ContainerDivision>
				<LineOrange></LineOrange>
					<BoxDivision>
						<TitleSpotlight>Mercado</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>Carreira</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>tecnologia</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
					</BoxDivision>
				<LineOrange></LineOrange>
		</ContainerDivision>
		<Container>
			<ContainerAll>
			<Box> 
				<TextFooter>
					A missão do Vai na Web é colaborar com a democratização do acesso às 
					tecnologias digitais avançadas e reduzir as desigualdades, 
					promovendo um futuro inclusivo, próspero e sustentável.
				</TextFooter>
				<div>
					<ContainerTextIcons>
						<BoxText>
							<TextLink href="#">Media Kit</TextLink>
							<TextLink href="#">Deep Tech Network</TextLink>
							<TextLink href="/faq">Perguntas Frequentes</TextLink>
						</BoxText>
						<BoxContact>
							<TextContact>
								contato@emailvnw.com.br 
								+55 21 93456-7890
							</TextContact>
						</BoxContact>
					</ContainerTextIcons>
					<BoxIcons>
							<a href="https://www.facebook.com/vainaweb" target="_blank"><Icon src={logoFacebook} alt="Logo Facebook"/></a>
							<a href="https://www.instagram.com/vainaweb/" target="_blank"><Icon src={logoInstagram} alt="Logo Instagram"/></a>
							<a href="#"><Icon src={logoEmail} alt="Logo Email"/></a>
							<a href="https://www.linkedin.com/in/vai-na-web-915782184/" target="_blank"><Icon src={logoLinkedin} alt="Logo Linkedin"/></a>
							<a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank"><Icon src={logoYoutube} alt="Logo Youtube"/></a>
					</BoxIcons>
				</div>
					<a href="/"><Logo src={logoVnW} alt="Logo Vai na Web"/></a>
			</Box> 
				<LineDivision></LineDivision>
				<Text>Site desenvolvido por estudantes do Vai na Web · 2021</Text>
			</ContainerAll>
		</Container>
		</ContainerFooter>
	)
}

export default Footer;