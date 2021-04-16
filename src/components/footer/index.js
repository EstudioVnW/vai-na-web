import React from "react";
import styled from 'styled-components';
import logoFacebook from '../../images/icons/icon-facebook.svg';
import logoInstagram from '../../images/icons/icon-instagram.svg';
import logoEmail from '../../images/icons/icon-email.svg';
import logoLinkedin from '../../images/icons/icon-linkedin.svg';
import logoYoutube from '../../images/icons/icon-youtube.svg';
import logoVnW from '../../images/icons/logo-VNW.svg'

// styles
const ContainerDivision = styled.div `
	background-color: #FED5B2;
	height: 7rem;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transform: matrix(1, -0.07, 0.07, 1, 0, 62.54);
`;

const BoxDivision = styled.div `
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 1rem 0;
`;

const LineOrange = styled.div `
	height: 1px;
	background-color: #FF611E;
`;

const TitleSpotlight = styled.p `
	font-size: 54px;
	text-transform: uppercase;
	color: #0F2B92;
`;

const LogoVnW = styled.img `
	width: 4rem;
`;

const Container = styled.footer`
	background-color: #00145D;
	height: 27rem;
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
`;

const ContainerTextIcons = styled.div `
	display: flex;
	width: 26rem;
`;

const TextFooter = styled.p`
	color: #FFFFFF;
	width: 23%;
	line-height: 1.5rem;
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
`;

const BoxContact = styled.div `
	display: flex;
	flex-direction: column;
	margin-left: 2.5rem;
`;

const TextContact = styled.p `
	color: #FFFFFF;
	width: 80%;
    line-height: 1.5em;
`;

const BoxIcons = styled.div `
	display: flex;
	justify-content: space-between;
	width: 69%;
	margin-top: 1.8rem;
`;

const Icon = styled.img `
	width: 2.5rem;
	cursor: pointer;
`;

const Logo = styled.img `
	width: 6rem;
	margin-bottom: 8rem;
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
	margin-top: 1.3rem;
`;

const Footer = () => {
	return (
		<>
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
							<TextLink href="#">Perguntas Frequentes</TextLink>
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
					<Logo src={logoVnW} alt="Logo Vai na Web"/>
			</Box> 
				<LineDivision></LineDivision>
				<Text>Site desenvolvido por estudantes do Vai na Web · 2021</Text>
			</ContainerAll>
		</Container>
		</>
	)
}

export default Footer;