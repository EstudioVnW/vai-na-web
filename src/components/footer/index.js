import React from "react";
import styled, { keyframes } from 'styled-components';

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

const ContainerDivision = styled.div `
	background-color: #FED5B2;
	position: relative;
	bottom: 1rem;
	width: 103%;
	padding: .8rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transform: matrix(1, -0.04, 0.07, 1, -4, 60.54);
	box-shadow: 0px 0px 22px #00145D33;
	overflow: hidden;

	span {
		animation: ${tickerAnimation} 50s linear infinite;
	}



	@media (max-width: 424px) {
		/* width: 49rem; */
	}
`;

const BoxDivision = styled.span `
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
	font-size: 2rem;
	text-transform: uppercase;
	color: #0F2B92;
	font-weight: 100;
	margin-left: 1rem;

	@media (max-width: 768px) {
		font-size: .9rem;
	}

	@media (max-width: 425px) {
		font-size: .9rem;
	}
`;

const LogoVnW = styled.img `
	width: 3rem;
	margin-left: 1rem;

	/* @media (max-width: 1400px) {
		margin: 0 1rem;
	} */

	@media (max-width: 768px) {
		width: 25px;
		margin: 0 0 0 1rem;
	}

	@media (max-width: 425px) {
		width: 20px;
		margin: 0;
	}
`;

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	min-height: 300px;
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


const ContainerTextIcons = styled.div `
	display: flex;
	width: 30rem;

	@media (max-width: 424px) {
		padding: 1rem;
		margin-top: 2rem;	
	}	
`;

const TextFooter = styled.p`
	margin-right: 3rem;
	width: 300px;
	color: #FFFFFF;
	font-size: 1.1rem;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;

	@media (max-width: 970px) {
		width: 100%;
		padding: 0 10% 0 10%;
		text-align: left;
		font-size: 14px;
	}	

`;

const BoxText = styled.div `
	display: flex;
	flex-direction: column;
	/* margin-top: -10px; */
	width: 100%;
	margin-left: 1rem;
`;

const TextLink = styled.a `
	color: #FFFFFF;
	text-align: justify;
	
	font-size: 1.1rem;
	line-height: 1.5rem;
	letter-spacing: 0.025rem;

	@media (max-width: 970px) {
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

	@media (max-width: 970px) {
		font-size: 14px;
		width: 80%;
		margin-right: 1rem;
	}

	@media (max-width: 768px) {
		padding: 0 10% 0 10%;
		margin: 24px 0 0 0;
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
		/* padding: 4rem; */
	}

	@media (max-width: 768px) {
		margin-left: 10%;
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
	/* @media (max-width: 424px) {
	} */
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

const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: ${props => props.marginTop};
	padding: ${props => props.padding ? '0 15% 0 15%' : ''};

	@media (max-width: 1255px) {
		padding: ${props => props.padding ? '0 5% 0 5%' : ''};
	}

	@media (max-width: 768px) {
		flex-direction: column; 
	}
`;

const TextLinks = styled.div`
	
	@media (max-width: 768px) {
		display: flex; flex-direction: column;
		padding: 0 10% 0 10%;
		margin: 24px 0 0 0;
	}
`;

const LogoBox = styled.div`
	@media (max-width: 768px) {
		display: flex; justify-content: center; align-items: center;
		img{ margin: 50px 0 50px 0;}
	}
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
						<TitleSpotlight>Mercado</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>Carreira</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>tecnologia</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>Mercado</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>Carreira</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
						<TitleSpotlight>tecnologia</TitleSpotlight>
						<LogoVnW src={logoVnW} alt="Logo Vai na Web"/>
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

				{/* <TextFooter>
					A missão do Vai na Web é colaborar com a democratização do acesso às 
					tecnologias digitais avançadas e reduzir as desigualdades, 
					promovendo um futuro inclusivo, próspero e sustentável.
				</TextFooter>
				<div>
					<ContainerTextIcons>
						<BoxText>
							<TextLink href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer">Media Kit</TextLink>
							<TextLink href="https://www.deeptech.network/" target="_blank" rel="noopener noreferrer">Deep Tech Network</TextLink>
							<TextLink href="/faq" rel="noopener noreferrer">
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
							<a href="https://www.facebook.com/vainaweb" target="_blank" rel="noopener noreferrer"><Icon src={logoFacebook} alt="Logo Facebook"/></a>
							<a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer"><Icon iconInst src={logoInstagram} alt="Logo Instagram"/></a>
							<a href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer"><Icon src={logoEmail} alt="Logo Email"/></a>
							<a href="https://www.linkedin.com/in/vai-na-web-915782184/" target="_blank" rel="noopener noreferrer"><Icon src={logoLinkedin} alt="Logo Linkedin"/></a>
							<a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank" rel="noopener noreferrer"><Icon src={logoYoutube} alt="Logo Youtube"/></a>
					</BoxIcons>
				</div>
					<a href="/" rel="noopener noreferrer"><Logo src={logoVnW} alt="Logo Vai na Web"/></a> */}
			<Row marginTop={"7rem"} padding>
				<div>
					<TextFooter>
						A missão do Vai na Web é colaborar com a democratização do acesso às 
						tecnologias digitais avançadas e reduzir as desigualdades, 
						promovendo um futuro inclusivo, próspero e sustentável.
					</TextFooter>

				</div>

				<div>
					<Row>
						<TextLinks>
							<TextLink href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer">Media Kit</TextLink>
							<TextLink href="https://www.deeptech.network/" target="_blank" rel="noopener noreferrer">Deep Tech Network</TextLink>
							<TextLink href="/faq" rel="noopener noreferrer">Perguntas Frequentes</TextLink>
						</TextLinks>
						<TextContact>
							ola@vainaweb.com.br<br/>
							+55 21 93456-7890
						</TextContact>
					</Row>
					<BoxIcons>
						<a href="https://www.facebook.com/vainaweb" target="_blank" rel="noopener noreferrer"><Icon src={logoFacebook} alt="Logo Facebook"/></a>
						<a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer"><Icon iconInst src={logoInstagram} alt="Logo Instagram"/></a>
						<a href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer"><Icon src={logoEmail} alt="Logo Email"/></a>
						<a href="https://www.linkedin.com/in/vai-na-web-915782184/" target="_blank" rel="noopener noreferrer"><Icon src={logoLinkedin} alt="Logo Linkedin"/></a>
						<a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank" rel="noopener noreferrer"><Icon src={logoYoutube} alt="Logo Youtube"/></a>
					</BoxIcons>
				</div>
				<LogoBox>
					<a href="/" rel="noopener noreferrer"><Logo src={logoVnW} alt="Logo Vai na Web"/></a>
				</LogoBox>
			</Row>

				{/* <LineDivision></LineDivision>
				<Text>Site desenvolvido por estudantes do Vai na Web · 2021</Text> */}
			</ContainerAll>
		</Container>
		</ContainerFooter>
	)
}

export default Footer;