import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

//Image
import logo from '../../images/icons/logo-VNW.svg';

// styles
const Container = styled.header`
  display: flex;
	justify-content:  ${props => props.home ? 'flex-end' : 'space-between'};
	align-items: center;
	width: 75%;
	margin: auto;
  height: 5rem;
`;

const Image = styled.img`
	display: ${props => props.home && 'none'};
  width: 5rem;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
	padding-left: 2.25rem;
	cursor: pointer;
`;

const Header = ({ home }) => {
	return (
		<Container home={home}>
			<Image src={logo} home={home} alt='Logotipo' />
			<nav>
				<Ul>
					<Li>Sobre</Li>
					<Li><Link to={'/blog'}>Blog</Link></Li>
					<Li>Contato</Li>
				</Ul>
			</nav>
		</Container>
	)
}

export default Header;