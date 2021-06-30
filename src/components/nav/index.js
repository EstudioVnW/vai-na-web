import React, { useState, useEffect } from 'react';
import { Link, navigate } from "gatsby";
import Button from '../button/Button';

import * as S from './styles';

// images
import logo from '../../images/icons/logo-VNW.svg';

const Menu = (props) => {
	const [isShow, setIsShow] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	let widthViewPort;

	if (typeof document !== `undefined`) {
		widthViewPort = document.documentElement.clientWidth
	}

	const handleMenu = () => {
		setIsShow(!isShow)
	}

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	const isDesktop = widthViewPort > 769

	const redirectToConcact = () => {
		navigate('/contact/');
	}

	const isScrolled = scrollPosition > 0

	return (
		<S.Menu home={props.home} isScrolled={isScrolled}>
			<S.Figure>
				<Link to={'/'}>
					<S.Logo src={logo} alt='Logotipo' />
				</Link>
			</S.Figure>
			<S.MenuOpen isShow={isShow} onClick={handleMenu}>
				<span></span>
			</S.MenuOpen>
			<S.Wrap isShow={isShow}>
				<S.NavList>
					<S.NavItem home={props.home} isScrolled={scrollPosition > 0}>
						<Link to={'/'}>Sobre</Link>
					</S.NavItem>
					<S.NavItem home={props.home} isScrolled={scrollPosition > 0}>
						<Link to={'/services'}>Serviços</Link>
					</S.NavItem>
					<S.NavItem home={props.home} isScrolled={scrollPosition > 0}>
						<Link to={'/cases'}>Cases</Link>
					</S.NavItem>
					<S.NavItem home={props.home} isScrolled={scrollPosition > 0}>
						<Link to={'/#'} >Escola</Link>
					</S.NavItem>
				</S.NavList>
				<S.BottomList isShow={isShow}>
					<S.BottomLink to={'/#'} >Media Kit</S.BottomLink>
					<S.BottomLink to={'/#'} >Perguntas Frequentes</S.BottomLink>
					<S.BottomLink to={'/contact'}>Contato</S.BottomLink>
				</S.BottomList>
				{isDesktop && (
					<Button
						border='transparent'
						color='#FFAC2D'
						background='#0F2B92'
						funcAction={redirectToConcact}
					>
						Reserve seu Squad
					</Button>
				)}

				{!isDesktop && (
					<S.Footer>
						<S.Items>
							<Link>Media Kit</Link>
						</S.Items>

						<S.Items>
							<Link>Perguntas Frequentes</Link>
						</S.Items>

						<S.Items>
							<Link to={'/contact'} rel="noopener noreferrer">Contato</Link>
						</S.Items>
					</S.Footer>
				)}
			</S.Wrap>
		</S.Menu>
	)
}

export default Menu;