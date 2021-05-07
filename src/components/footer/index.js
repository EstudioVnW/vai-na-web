import React from "react";
import styled from 'styled-components';

//Images
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
	width: 103%;
	padding: .8rem 0;
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
	margin: 0.5rem 0;
`;

const LineOrange = styled.div `
	height: 2px;
	background-color: #FF611E;
`;

const TitleSpotlight = styled.p `
	font-size: 4.375rem;
	text-transform: uppercase;
	color: #0F2B92;
	font-weight: 100;

	@media (max-width: 424px) {
		font-size: 30px;
	}
`;

const LogoVnW = styled.img `
	width: 5rem;

	@media (max-width: 1400px) {
		margin: 0 1rem;
	}
`;

const Container = styled.footer`
	background-color: #00145D;
	height: auto;
	@media (max-width: 424px) {
		width: 28rem;
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
	width: 30rem;

	@media (max-width: 424px) {
		padding: 1rem;
		margin-top: 2rem;	
	}	
`;

const TextFooter = styled.p`
	width: 28%;
	color: #FFFFFF;
	font-size: 1.1rem;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;

	@media (max-width: 424px) {
		width: 80%;
		text-align: center;
		font-size: 14px;
	}	
`;

const BoxText = styled.div `
	display: flex;
	flex-direction: column;
	margin-top: -10px;
	width: 100%;
	margin-left: 1rem;
`;

const TextLink = styled.a `
	color: #FFFFFF;
	text-align: justify;
	margin-top: 8px;
	font-size: 1.1rem;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;

	@media (max-width: 424px) {
		font-size: 14px;
	}
`;

const BoxContact = styled.div `
	display: flex;
	flex-direction: column;
	margin-left: -1.5rem;
	margin-top: -0.5rem;
`;

const TextContact = styled.p `
	color: #FFFFFF;
	width: 100%;
	font-size: 1.1rem;
	line-height: 1.5em;
	letter-spacing: 0.025rem;

	@media (max-width: 424px) {
		font-size: 14px;
		width: 80%;
		margin-right: 1rem;
	}
`;

const BoxIcons = styled.div `
	display: flex;
	justify-content: space-between;
	width: 69%;
	margin-top: 1.8rem;
	margin-left: 1rem;

	@media (max-width: 424px) {
		width: 100%;
		padding: 4rem;
	}
`;

const Icon = styled.img `
	width: 2.3rem;
	cursor: pointer;
	background: transparent 0% 0% no-repeat;
	
	:hover {
		border-radius: ${props => props.iconInst && '25%'};
		background: #0F2B92 0% 0% no-repeat;
		opacity: 1;
	}
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
	width: 79%;
	margin-top: -4rem;
`;

const Text = styled.p `
	color: #FFAC2D;
	font-size: 1.1rem;
	padding: 1rem;
`;

const Footer = () => {
	return (
		<ContainerFooter  id="footer">
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
							<TextLink href="https://medium.com/@olavainaweb" target="_blank" rel="noreferrer">Media Kit</TextLink>
							<TextLink href="https://www.deeptech.network/" target="_blank" rel="noreferrer">Deep Tech Network</TextLink>
							<TextLink href="/faq" rel="noreferrer">
								Perguntas Frequentes
							</TextLink>
						</BoxText>
						<BoxContact>
							<TextContact>
								ola@vainaweb.com.br
								+55 21 93456-7890
							</TextContact>
						</BoxContact>
					</ContainerTextIcons>
					<BoxIcons>
							<a href="https://www.facebook.com/vainaweb" target="_blank" rel="noreferrer"><Icon src={logoFacebook} alt="Logo Facebook"/></a>
							<a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noreferrer"><Icon iconInst src={logoInstagram} alt="Logo Instagram"/></a>
							<a href="https://medium.com/@olavainaweb" target="_blank" rel="noreferrer"><Icon src={logoEmail} alt="Logo Email"/></a>
							<a href="https://www.linkedin.com/in/vai-na-web-915782184/" target="_blank" rel="noreferrer"><Icon src={logoLinkedin} alt="Logo Linkedin"/></a>
							<a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank" rel="noreferrer"><Icon src={logoYoutube} alt="Logo Youtube"/></a>
					</BoxIcons>
				</div>
					<a href="/" rel="noreferrer"><Logo src={logoVnW} alt="Logo Vai na Web"/></a>
			</Box> 
				<LineDivision></LineDivision>
				<Text>Site desenvolvido por estudantes do Vai na Web · 2021</Text>
			</ContainerAll>
		</Container>
		</ContainerFooter>
	)
}

export default Footer;