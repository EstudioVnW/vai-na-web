import React, { useState } from "react";
import { Link } from "gatsby";
import ButtonHome from '../button/Button';
import * as S from './styles';


//Image
import logo from '../../images/icons/logo-VNW.svg';
import IconMenu from '../../images/images/menu_hamburger.svg';
import IconClosed from '../../images/images/close.svg';
import ImageHome from '../../images/images/VNW-66.png';



const Header = (props) => {
	const [isShow, setIsShow] = useState(false);

	const handleMenu = () => {
		setIsShow(!isShow)
	}

	return (
		<S.Container home={true}>
			<S.FundoAzul>
				<S.Menu>
					<S.OverMenu>
						<S.Figure>
							<Link to={'/'} rel="noopener noreferrer">
								<S.Image src={logo} home={true} alt='Logotipo' />
							</Link>
						</S.Figure>
						<S.BoxImg>
							<S.ImgMenuOpen isShow={isShow} src={IconMenu} alt="Icon menu hamburguer" onClick={handleMenu} />
							<S.ImgMenuClosed isShow={isShow} src={IconClosed} alt="Icon closed menu" onClick={handleMenu} />
						</S.BoxImg>
					</S.OverMenu>
					<S.NavMenu isShow={isShow}>
						<S.Ul>
							<S.Li><Link to={'/'} rel="noopener noreferrer">Sobre</Link></S.Li>
							<S.Li><Link to={'/over'} rel="noopener noreferrer">Serviços</Link></S.Li>
							<S.Li><Link to={'/blog'} rel="noopener noreferrer">Cases</Link></S.Li>
							<S.Li><Link to='#footer' rel="noopener noreferrer">Escola</Link></S.Li>
						</S.Ul>
						<ButtonHome 
							border='#FFAC2D' 
							color='#FFAC2D'
							background='#0F2B92'
						>
							Reserve seu Squad
						</ButtonHome>				
					</S.NavMenu>
				</S.Menu>	
				<S.HeaderHome>
					<S.CardHome>
						<S.BoxCircle>
							<S.Circles>
								<S.Circle />
								<S.Circle />
								<S.Circle />
							</S.Circles>
							<S.TextCircle>#deeptalent</S.TextCircle>
						</S.BoxCircle>
						<S.Line></S.Line>
						<S.Title>Acelere suas entregas digitais</S.Title>
						<S.SubTitle>Com a força da diversidade e inclusão</S.SubTitle>
					</S.CardHome>
					<S.ImageEstudio src={ImageHome} alt='FotoEStudio' />
				</S.HeaderHome>
			</S.FundoAzul>

		</S.Container>
	)
}

export default Header;