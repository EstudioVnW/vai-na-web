import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

//Image
import logo from '../../images/icons/logo-VNW.svg';

// styles
const Container = styled.header`
  display: flex;
	justify-content: space-between;
	width: 100%;
	height: ${props => props.home ? '11rem' : '12rem'};

	nav{
		font-family: "usual", sans-serif;
		position: fixed;
		right: 0;
		z-index: 1;
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
  margin: 70px;
`;

const Li = styled.li`
	padding-left: 2.25rem;
	cursor: pointer;
	
	a{
		text-decoration: none;
		font-size: 1.125rem;
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

const Header = ({ home }) => {
	return (
		<Container home={home}>
			<Link to={'/'} rel="noreferrer"><Image src={logo} home={home} alt='Logotipo' /></Link>
			<nav>
				<Ul>
					<Li><Link to={'/'} rel="noreferrer">Sobre</Link></Li>
					<Li><Link to={'/blog'} rel="noreferrer">Blog</Link></Li>
					<Li><Link to='#footer' rel="noreferrer">Contato</Link></Li>
				</Ul>
			</nav>
		</Container>
	)
}

export default Header;