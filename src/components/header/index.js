import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

//Image
import logo from '../../images/icons/logo-VNW.svg';
import LogoVnW from '../../images/images/Logo_VnW.svg';
import IconMenu from '../../images/images/menu_hamburger.svg';
import IconClosed from '../../images/images/close.svg';

// styles
const Container = styled.header`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: ${props => props.home ? '11rem' : '19rem'};

	@media (max-width: 768px) {
		height: 6rem;
		position: fixed;
		top: 0;
		z-index: 2;
	}
`;

	const NavMenu = styled.nav`
		display: initial;
		font-family: "usual", sans-serif;
		position: fixed;
		right: 0;
		z-index: 2;

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
	display: ${props => props.home && 'none'};
  margin: ${props => props.home ? '10rem 0 0 20rem' : '3.125rem 0 0 6.438rem'};
  width: ${props => props.home ? '10rem' : '6rem'};
  position: ${props => !props.home && 'fixed'};
`;

const Ul = styled.ul`
  display: flex;
  margin: 4.375rem 7.75rem 0 0;

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
	padding-left: 2.25rem;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 0;
	}
	
	a{
		text-decoration: none;
		font-size: 1.25rem;
		color: #FDE7A9;
		position: relative;
		::before{
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			background: #FDE7A9;
			top: 25px;
		}	
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

const StyledLink  = styled(Link)`
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
			<OverMenu>
				<Figure>
				<Link to={'/'} rel="noopener noreferrer"><Image src={logo} home={home} alt='Logotipo' /></Link>
				</Figure>
				<BoxImg>
					<ImgMenuOpen isShow={isShow} src={IconMenu} alt="Icon menu hamburguer" onClick={handleMenu}/>
					<ImgMenuClosed isShow={isShow} src={IconClosed} alt="Icon closed menu" onClick={handleMenu}/>
				</BoxImg>
			</OverMenu>
			<NavMenu isShow={isShow}>
				<Ul>
					<Li><Link to={'/'} rel="noopener noreferrer">Home</Link></Li>
					<Li><Link to={'/over'} rel="noopener noreferrer">Sobre</Link></Li>
					<Li><Link to={'/blog'} rel="noopener noreferrer">Blog</Link></Li>
					<Li><Link to='#footer' rel="noopener noreferrer">Contato</Link></Li>
				</Ul>
				<BelowList>
					<li><StyledLink to={'/'} rel="noopener noreferrer">Media Kit</StyledLink></li>
					<li><StyledLink to={'/'} rel="noopener noreferrer">Deep Tech Network</StyledLink></li>
					<li><StyledLink to={'/'} rel="noopener noreferrer">Perguntas Frequentes</StyledLink></li>
				</BelowList>
			</NavMenu>
		</Container>
	)
}

export default Header;