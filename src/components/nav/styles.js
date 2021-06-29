import styled from 'styled-components';
import { Link } from "gatsby";

export const Menu = styled.nav`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 7.25rem;
	width: 100%;
	height: 7rem;
	box-shadow: ${props => (props.isScrolled || !props.home) ? '0px 8px 40px #00000019' : 'none'};
	background: ${props => (props.isScrolled || !props.home) ? '#fff' : 'none'};
	z-index: 10;

	@media (max-width: 1220px) {
		padding: 0 4rem;
	}
	@media (max-width: 1024px) {
		padding: 0 1.5rem;
		box-shadow: none;
	}
`;

export const Wrap = styled.div`
  	display: flex;
  	align-items: center;
	padding-left: 7.25rem;
	transition: all 0.3s cubic-bezier(0.55, 0.09, 0.68, 0.53);

	@media (max-width: 1220px) {
		padding-left: 0;
	}
	@media (max-width: 768px) {
		position: absolute;
		top: 0;
		left: ${props => props.isShow ? '0' : '100%'};
		display: flex;
    	flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		padding-top: 5rem;
		width: 100vw;
		height: 100vh;
		background: #00145D;
	}
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem 0;

	@media (max-width: 768px) {
    	flex-direction: column;
		justify-content: space-between;
		height: 51vh;
	}
`;

export const NavItem = styled.li`
	width: 6.65rem;
	margin-right: 0.85rem;
	text-align: center;
	font-size: 1.3em;
	line-height: 1.813rem;
	color: ${props => (props.isScrolled || !props.home) ? '#0F2B92' : '#FDE7A9'};

	a {
		padding: 0.25rem 0;
		text-decoration: none;
		color: currentColor;
		border-bottom: 0.2rem solid transparent;
		transition: all 0.2s ease-in;
		cursor: pointer;

		&:hover{
			border-bottom: 0.2rem solid ${props => (props.isScrolled || !props.home) ? '#0F2B92' : '#FDE7A9'};
			font-weight: bold;
		}
	}

	@media (max-width: 1024px) {
		margin-right: 0;
		font-size: 1.2em;
	}
	@media (max-width: 768px) {
		margin-right: 0;
		width: 5.45rem;
		color: #FDE7A9;
		font-size: 1.938rem;
		line-height: 2.313rem;
		padding-bottom: 0.4rem;
		border-bottom: 0.15rem solid currentColor;
		width: auto;
	}
`;

export const Figure = styled.figure`
	@media (max-width: 768px) {
		z-index: 1;
	}
`;

export const Logo = styled.img`
	display: flex;
	width: 6rem;

	@media (max-width: 1024px) {
		width: 5rem;
	}
`;

export const MenuOpen = styled.div`
	display: none;
	justify-content: flex-end;
	width: 2.4rem;

	&:before,
	&:after,
	& span {
		content: "";
		display: block;
		margin: 8px 0;
		width: 100%;
		height: 3px;
		border-radius: 3px;
		background: #FDE7A9;
	}
	&:before {
		transform: ${props => props.isShow ? 'translateY(12px) rotate(-135deg) scale(1.2)' : 'translateY(0) rotate(0)'};
	}
	&:after {
		transform: ${props => props.isShow ? 'translateY(-10px) rotate(135deg) scale(1.2)' :'translateY(0) rotate(0)'};
	}
	span {
		transform: ${props => props.isShow ? 'scale(0)' : ''};
	} 

	@media (max-width: 768px) {
		display: block;
		z-index: 1;
		transition: 0.5s;
	}
`;

export const BottomList = styled.ul`
	display: ${props => props.isShow ? 'flex' : 'none'};
	flex-direction: column;
`

export const BottomLink = styled(Link)`
	color: #fff;
	font-size: 1.1em;
	line-height: 2.2;
	text-align: center;

	a {
		text-decoration: none;
		cursor: pointer;
	}
`;