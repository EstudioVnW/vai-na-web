import styled from 'styled-components';

export const Menu = styled.nav`
	background: #fff;
	box-shadow: 0px 8px 40px #00000019;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 7rem;
	position: fixed;
	top: 0;
	z-index: 10;
	padding: 0 7.25rem;

	@media (max-width: 1024px) {
		padding: 1rem 2rem;
		box-shadow: none;
	}
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
	padding-left: 7.25rem;

	@media (max-width: 768px) {
		background: #00145D;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
    flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 0;
		display: ${props => props.isShow ? 'flex' : 'none'};
	}
`;


export const Ul = styled.ul`
  display: flex;
  align-items: center;

	@media (max-width: 768px) {
		display: flex;
    flex-direction: column;
		width: 70vw;
		height: 50vh;
		justify-content: space-evenly;
	}
`;

export const Li = styled.li`
	width: 6.65rem;
	padding: 0.25rem 0.15rem;
	margin-right: 0.85rem;
	text-align: center;
	font-size: 1.5rem;
	line-height: 1.813rem;
	border-bottom: 0.2rem solid transparent;
	cursor: pointer;
	color: #0F2B92;

	&:hover{
		border-bottom: 0.2rem solid #0F2B92;
		font-weight: bold;
	}

	a {
		text-decoration: none;
		color: currentColor;	
		transition: all 0.15s ease-in;
		padding: 0.25rem 0;
	}

	@media (max-width: 768px) {
		width: 5.45rem;
		color: #FDE7A9;
		font-size: 1.938rem;
		line-height: 2.313rem;
		padding-bottom: 0.65rem;
		border-bottom: 0.15rem solid currentColor;
		width: auto;
	}
`;

export const Figure = styled.figure`
	@media (max-width: 768px) {
		z-index: 1;
	}
`;

export const BoxImg = styled.span`
	display: none;

	@media (max-width: 768px) {
		display: initial;
		z-index: 1;
	}
`;

export const Image = styled.img`
	display: flex; 
	width: 7rem;

	@media (max-width: 768px) {
		width: 4rem;
	}
`;

export const ImgMenuOpen = styled.img`
	display: none;
	@media (max-width: 768px) {
		display: ${props => props.isShow ? 'none' : 'flex'};
		justify-content: flex-end;
		width: 2rem;
	}
`;

export const ImgMenuClosed = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: ${props => props.isShow ? 'flex' : 'none'};
		justify-content: flex-end;
		width: 2rem;
	}
`;