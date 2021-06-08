import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import ButtonHome from '../button/Button';

//Image
import logo from '../../images/icons/logo-VNW.svg';
import LogoVnW from '../../images/images/Logo_VnW.svg';
import IconMenu from '../../images/images/menu_hamburger.svg';
import IconClosed from '../../images/images/close.svg';
import ImageHome from '../../images/images/VNW-66.png';
import ImageSirio from '../../images/images/hospitalSirio.png';
import ImageVotorantim from '../../images/images/Instituto-Votorantim.png';
import ImagePetronect from '../../images/images/Petronect.png';
import ImageProadiSus from '../../images/images/proadiSus.png';

import ImageQuickCash from '../../images/images/QuickCash.png';
import ImageIts from '../../images/images/192205155_822241138394982_1188246794454052303_n.png';
import ImageSedimenta from '../../images/images/SedimentaJPM.svg';
import ImageM4A from '../../images/images/m4a.png';
import Infografico from '../../images/images/Group11288.png';
import PeoplesSquad from '../../images/images/VaiNaWeb-196.png';

import Back from '../../images/images/Group11078.svg';
import Canais from '../../images/images/Group10972.svg';
import MVPs from '../../images/images/Group10972.svg';
// styles
const Container = styled.header`
  	display: flex;
	justify-content: end;
	align-items: flex-end; 
	flex-direction: column;
	width: 100%;
	background: white;
	height: ${props => props.home ? '11rem' : '32rem'};
`;

const FundoAzul = styled.div`
	width: 97%;
	background: #00145D;
	border-bottom-left-radius: 15px;
`;

const Menu = styled.header`
  	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 20%;
`;

const NavMenu = styled.nav`
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "usual", sans-serif;
		margin-right: 50px;

		@media (max-width: 768px) {
			display: ${props => props.isShow ? 'flex' : 'none'};
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			background: rgba(254,254, 2540, 1);
			background: linear-gradient(0deg, rgba(254,254, 2540, 1), rgba(244,213,191,1), rgba(4,23,105,1) 100%);
			
		} 
	`;


const Image = styled.img`
	display: flex; 
	width: 8vw;
	margin-left: 50px;
  	
  
`;
// display: ${props => props.home && 'none'};
	// margin: ${props => props.home ? '10rem 0 0 20rem' : '3.125rem 0 0 6.438rem'};
  	// width: ${props => props.home ? '10rem' : '6rem'};
// position: ${props => !props.home && 'fixed'};

const Ul = styled.ul`
  display: flex;
  margin-right: 2rem;
  align-items: center;

	@media (max-width: 768px) {
		display: flex;
    flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 30%;
		margin: 0;
	}
`;

const Li = styled.li`
	padding-left: 2rem;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 0;
	}
	
	a{
		text-decoration: none;
		font-size: 1.125rem;
		color: #FDE7A9;
		
	}
	a:hover{
		text-decoration: underline;
		font-weight: bold;
	}
`;

const OverMenu = styled.div`
	display: initial;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2rem 0 0;
		z-index: 3;
		height: 100%;
	}
`;

const Figure = styled.figure`
`;

const ImgLogo = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		width: 60%;
		padding-left: 2rem;
	}
`;

const BoxImg = styled.span`
	display: none;

	@media (max-width: 768px) {
		display: initial;
	}
`;

const ImgMenuOpen = styled.img`
	display: none;
	@media (max-width: 768px) {
		display: ${props => props.isShow ? 'none' : 'flex'};
		justify-content: flex-end;
		width: 2rem;
	}
`;

const ImgMenuClosed = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: ${props => props.isShow ? 'flex' : 'none'};
		justify-content: flex-end;
		width: 2rem;
	}
`;

const BelowList = styled.ul`
	display: none;

	@media (max-width: 768px) {
		display: flex;
    flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 20%;
	}

	li {
		color: #0F2B92;
	}
`;
const HeaderHome = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const CardHome = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #FED5B2;
	width: 42rem;
	height: 12rem;
	left:100px;
	top: 200px;
	border-radius: 15px;
`;
const BoxCircle = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
`;
const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70px;
`;
const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;
`;
const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;
`;

const Line = styled.div`
	display: flex;
	background: #FFAC2D;
	width: 90%;
	height: 2px;
	margin-top: 15px;

`;

const Title = styled.h1`
	font-size: 40px;
	color: #272727;
	margin-top: 15px;
	
`;
const SubTitle = styled.p`
	font-size: 27px;
	width: 90%;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;
	
`;


const ImageEstudio = styled.img`
	margin-top: 35px;
	margin-right: -19px;
	width: 40rem;
	border: 15px;
  
`;

const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;

// CASES

const Cases = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const CasesImages = styled.div`
	width: 90%;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const BoxImage = styled.figure`
	width: 20%;
	height: 8rem;
	margin: 0.2rem;
	padding: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;


const ImageCases = styled.img`
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	filter: gray;

`;

//SOCIAL IMPACT

const SocialImpact = styled.div`
	width: 100%;
	background: rgb(15,43,146,0.07);
	margin-top: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SocialImpactText = styled.div`
	width: 30%;
	height: 27rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

`;
const SocialImpactTextTitle = styled.h1`
	width: 50%;
	margin-left: 20%;
	color: #00145D;
`;
const SocialImpactTextSubTitle = styled.h2`
	width: 50%;
	margin-left: 20%;
	margin-top: 15px;
	color: #00145D;
`;
const SocialImpactTextDescription = styled.p`
	width: 50%;
	margin-left: 20%;
	margin-top: 15px;
	color: #272727;
`;

const SocialImpactImage = styled.div`
	width: 70%;
	height: 27rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
`;
const SocialImpactImageInfo = styled.img`
	width: 90%;
`;

const Bold = styled.span`
	font-weight: 600;
`;

//SQUADS

const Squads = styled.div`
	width: 100%;
	margin-top: 5rem;
	display: flex;
	justify-content: space-evenly;
`;
const SquadsImageButton = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SquadsImage = styled.div`
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ButtonSquads = styled.div`
	z-index: 2;
	margin-top: -50px;
`;



const ImageSquad = styled.img`
	width: 100%;
	-webkit-transition: -webkit-transform .5s ease;
   	transition: transform .5s ease;

	:hover{
		-webkit-transform: scale(1.1);
   		transform: scale(1.1);
		
	}
`;

const SquadsText = styled.div`
	width: 45%;
`;
const SquadsTextTitle = styled.h1`
	color: #00145D;
`;
const SquadsTextSubTitle = styled.p`
	width: 65%;
	margin-top: 10px;
`;
const SquadsTextDescription = styled.p`
	width: 95%;
	margin-top: 25px;
`;




const SquadsTextBack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 25px;
`;
const ImageSquadBack = styled.div`
	
`;
const ImageBack = styled.img`
	width: 7rem;
`;
const BoxTextBack = styled.div`
	width: 70%;
`;
const BoxTextBackTitle = styled.h1`
	font-size: 1.2rem;
`;
const BoxTextBackDescription = styled.p`
	
`;	
					
					
					


const SquadsTextCanais = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 25px;
`;
const ImageSquadCanais = styled.div`
	
`;
const ImageCanais = styled.img`
	width: 7rem;
`;
const BoxTextCanais = styled.div`
	width: 70%;
`;
const BoxTextCanaisTitle = styled.h1`
	font-size: 1.2rem;
`;
const BoxTextCanaisDescription = styled.p`
	
`;	
					
					
					


const SquadsTextMVPs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 25px;
`;
const ImageSquadMVPs = styled.div`
	
`;
const ImageMVPs = styled.img`
	width: 7rem;
`;
const BoxTextMVPs = styled.div`
	width: 70%;
`;
const BoxTextMVPsTitle = styled.h1`
	font-size: 1.2rem;
`;
const BoxTextMVPsDescription = styled.p`
	
`;			

					
					
					



const Header = ({ home }) => {
	const [isShow, setIsShow] = useState(false);

	const handleMenu = () => {
		setIsShow(!isShow)
	}

	return (
		<Container home={home}>
			<FundoAzul>
				<Menu>
					<OverMenu>
						<Figure>
							<Link to={'/'} rel="noopener noreferrer"><Image src={logo} home={home} alt='Logotipo' /></Link>
						</Figure>
						<BoxImg>
							<ImgMenuOpen isShow={isShow} src={IconMenu} alt="Icon menu hamburguer" onClick={handleMenu} />
							<ImgMenuClosed isShow={isShow} src={IconClosed} alt="Icon closed menu" onClick={handleMenu} />
						</BoxImg>
					</OverMenu>
					<NavMenu isShow={isShow}>
						<Ul>
							<Li><Link to={'/'} rel="noopener noreferrer">Sobre</Link></Li>
							<Li><Link to={'/over'} rel="noopener noreferrer">Serviços</Link></Li>
							<Li><Link to={'/blog'} rel="noopener noreferrer">Cases</Link></Li>
							<Li><Link to='#footer' rel="noopener noreferrer">Escola</Link></Li>
						</Ul>
						<ButtonHome 
							border='#FFAC2D' 
							color='#FFAC2D'
							background='#0F2B92'
						>
							Reserve seu Squad
						</ButtonHome>				
					</NavMenu>
				</Menu>	
				<HeaderHome>
					<CardHome>
						<BoxCircle>
							<Circles>
								<Circle />
								<Circle />
								<Circle />
							</Circles>
							<TextCircle>#deeptalent</TextCircle>
						</BoxCircle>
						<Line></Line>
						<Title>Acelere suas entregas digitais</Title>
						<SubTitle>Com a força da diversidade e inclusão</SubTitle>
					</CardHome>
					<ImageEstudio src={ImageHome} alt='FotoEStudio' />
				</HeaderHome>
			</FundoAzul>

			<Cases>
				<CasesImages>
					<BoxImage>
						<ImageCases src={ImageSirio} alt='Hospital Sírio Libanês'  />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageVotorantim} alt='Instituto Votorantim' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImagePetronect} alt='Petronect' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageProadiSus} alt='ProadiSUS' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageQuickCash} alt='QuickCash' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageIts} alt='Instituto de Tecnologia E Sociedade do Rio' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageSedimenta} alt='Sedimenta JPM' />
					</BoxImage>
					<BoxImage>
						<ImageCases src={ImageM4A} alt='Match 4 Action' />
					</BoxImage>
				{/* </ImagesCasesSecond> */}
				</CasesImages>	
				<ButtonHome 
					
					colorHover='#272727'
					border='#FFAC2D' 
					color='#FFFFFF'
					background='#FF611E'	
				>
							Veja nossos Cases de Sucesso!
				</ButtonHome>
			</Cases>

			<SocialImpact>
				<SocialImpactText>
					<SocialImpactTextTitle>SIaaS</SocialImpactTextTitle>
					<SocialImpactTextSubTitle>Social Impact as a Service</SocialImpactTextSubTitle>
					<SocialImpactTextDescription>Um modelo de ciclo fechado 
						que entrega soluções web e mobile para as empresas ao mesmo 
						tempo <Bold>capacita e requalifica profissionais para atender aos 
						desafios da economia digital.</Bold></SocialImpactTextDescription>
				</SocialImpactText>
				<SocialImpactImage>
					<SocialImpactImageInfo src={Infografico}/>
				</SocialImpactImage>
			</SocialImpact>
			


			<Squads>
				<SquadsImageButton>
					<SquadsImage>
						<ImageSquad src={PeoplesSquad} />
					</SquadsImage>
					<ButtonSquads>
						<ButtonHome
							backgroundHover='#FF611E'
						>
							Reserve seu Squad!
						</ButtonHome>
					</ButtonSquads>
				</SquadsImageButton>
				
				
				
				<SquadsText>
					<SquadsTextTitle>Squads estendidos e configuráveis</SquadsTextTitle>
					<SquadsTextSubTitle>
						A escolha ideal para destravar seu backlog de baixa 
						e média complexidade.
					</SquadsTextSubTitle>
					<SquadsTextDescription>
						Nosso modelo <Bold>Social Impact as a Service</Bold> (SIaaS) 
						possibilita a entrega de Squads estendidos com custo até 40% mais 
						eficientes comparado aos integradores de tecnologia do mercado.
					</SquadsTextDescription>

					<SquadsTextBack>
						<ImageSquadBack>
							<ImageBack src={Back} />
						</ImageSquadBack>

						<BoxTextBack>
							<BoxTextBackTitle>Backlog de produtos digitais</BoxTextBackTitle>
							<BoxTextBackDescription>Entregas contínuas de design e desenvolvimento web e mobile.
							</BoxTextBackDescription>
						</BoxTextBack>
					</SquadsTextBack>
					

					<SquadsTextCanais>
						<ImageSquadCanais>
							<ImageCanais src={Canais} />
						</ImageSquadCanais>

						<BoxTextCanais>
							<BoxTextCanaisTitle>Canais digitais, responsivos e acessíveis</BoxTextCanaisTitle>
							<BoxTextCanaisDescription>Sites, portais, e-commerces dinâmicos com foco nos princípios 
								da acessibilidade, inclusão e adaptabilidade multitelas.
							</BoxTextCanaisDescription>
						</BoxTextCanais>
					</SquadsTextCanais>

					<SquadsTextMVPs>
						<ImageSquadMVPs>
							<ImageMVPs src={MVPs} />
						</ImageSquadMVPs>
						
						<BoxTextMVPs>
							<BoxTextMVPsTitle>MVPs ágeis e em escala</BoxTextMVPsTitle>
							<BoxTextMVPsDescription>Descoberta, ideação e implementação de MVPs. Valide rapidamente
								 a viabilidade e melhorias do seu projeto.
							</BoxTextMVPsDescription>
						</BoxTextMVPs>
					</SquadsTextMVPs>

				</SquadsText>
			</Squads>
			

		</Container>
	)
}

export default Header;