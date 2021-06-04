import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import ButtonMenu from '../button/Button';

//Image
import logo from '../../images/icons/logo-VNW.svg';
import LogoVnW from '../../images/images/Logo_VnW.svg';
import IconMenu from '../../images/images/menu_hamburger.svg';
import IconClosed from '../../images/images/close.svg';
import ImageHome from '../../images/images/VNW-66.png';

// styles
const Container = styled.header`
  	display: flex;
	justify-content: flex-end;
	width: 100%;
	background: white;
	height: ${props => props.home ? '11rem' : '36rem'};
`;

const FundoAzul = styled.div`
	width: 95%;
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
	justify-content: space-around;
`;

const CardHome = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #FED5B2;
	width: 42rem;
	height: 12rem;
	margin-left: 72px; 
	margin-bottom: 42px;
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
	width: 42rem;
	border: 15px;
  
`;

const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
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
						<ButtonMenu 
							border='#FFAC2D' 
							color='#FFAC2D'
							background='#0F2B92'
						>
							Reserve seu Squad
						</ButtonMenu>				
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
			
		</Container>
	)
}

export default Header;