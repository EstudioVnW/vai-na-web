import React, { useState } from "react";
import { Link } from "gatsby";
import Button from '../button/Button';
import * as S from './styles';

//Image
import logo from '../../images/icons/logo-VNW.svg';
import IconMenu from '../../images/images/menu_hamburger.svg';
import IconClosed from '../../images/images/close.svg';

import { navigate } from 'gatsby';

const Nav = (props) => {
	const [isShow, setIsShow] = useState(false);

	const handleMenu = () => {
		setIsShow(!isShow)
	}

	let widthViewPort;

	if (typeof document !== `undefined`) {
		widthViewPort = document.documentElement.clientWidth
	}

	const isDesktop = widthViewPort > 769

	const redirectToConcact = () => {
		navigate('/contact/');
	}

	return (
		<S.Menu>
			<S.Figure>
				<Link to={'/'} rel="noopener noreferrer">
					<S.Image src={logo} alt='Logotipo' />
				</Link>
			</S.Figure>
			<S.BoxImg>
				<S.ImgMenuOpen	
					isShow={isShow}
					src={IconMenu}
					alt="Icon menu hamburguer"
					onClick={handleMenu}
				/>
				<S.ImgMenuClosed
					isShow={isShow}
					src={IconClosed}
					alt="Icon closed menu"
					onClick={handleMenu}
				/>
			</S.BoxImg>
			<S.Wrap isShow={isShow}>
				<S.Ul>
					<S.Li>
						<Link to={'/'} rel="noopener noreferrer">Sobre</Link>
					</S.Li>
					<S.Li>
						<Link to={'/services'} rel="noopener noreferrer">Serviços</Link>
					</S.Li>
					<S.Li>
						<Link rel="noopener noreferrer">Cases</Link>
					</S.Li>
					<S.Li>
						<Link rel="noopener noreferrer">Escola</Link>
					</S.Li>
				</S.Ul>
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
			</S.Wrap>
		</S.Menu>
	)
}

export default Nav;