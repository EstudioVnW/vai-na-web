import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

//Image
import logo from '../../images/icons/logo-VNW.svg';

// styles
const Container = styled.header`
  display: flex;
	justify-content:  ${props => props.home ? 'space-between' : 'space-between'};
	width: 100%;
	height: 15rem;

	nav{
		font-family: "usual", sans-serif;
		position: fixed;
		right: 0;
	}  
`;

const Image = styled.img`
	display: ${props => props.home};
  width: 6rem;
  margin: 50px;
  position: fixed; 
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
		color: #FDE7A9;
		position: relative;
		::before{
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			background: #FDE7A9;
			top: 20px;
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
					<Li><Link to={'/contato'} rel="noreferrer">Contato</Link></Li>
				</Ul>
			</nav>
		</Container>
	)
}

export default Header;