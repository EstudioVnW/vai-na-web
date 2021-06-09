import styled from 'styled-components';
import { Link } from "gatsby";


export const Container = styled.header`
  	display: flex;
	justify-content: end;
	align-items: flex-end; 
	flex-direction: column;
	width: 100%;
	background: white;
	height: ${props => props.home ? '11rem' : '32rem'};
`;

export const FundoAzul = styled.div`
	width: 97%;
	background: #00145D;
	border-bottom-left-radius: 15px;
`;

export const Menu = styled.header`
  	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 20%;
`;

export const NavMenu = styled.nav`
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


export const Image = styled.img`
	display: flex; 
	width: 8vw;
	margin-left: 50px;
  	
  
`;
// display: ${props => props.home && 'none'};
	// margin: ${props => props.home ? '10rem 0 0 20rem' : '3.125rem 0 0 6.438rem'};
  	// width: ${props => props.home ? '10rem' : '6rem'};
// position: ${props => !props.home && 'fixed'};

export const Ul = styled.ul`
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

export const Li = styled.li`
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

export const OverMenu = styled.div`
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

export const Figure = styled.figure`
`;

export const ImgLogo = styled.img`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		width: 60%;
		padding-left: 2rem;
	}
`;

export const BoxImg = styled.span`
	display: none;

	@media (max-width: 768px) {
		display: initial;
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

export const BelowList = styled.ul`
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
export const HeaderHome = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const CardHome = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #FED5B2;
	width: 42rem;
	height: 12rem;
	left:100px;
	top: 200px;
	border-radius: 15px;
`;
export const BoxCircle = styled.div`
	display: flex;
	width: 90%;
	justify-content: space-between;
`;
export const Circles = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70px;
`;
export const Circle = styled.div`
	display: flex;	 
	width: 17px;
	height: 17px;
	background: #FFAC2D;
	border-radius: 50%;
	margin-top: 15px;
`;
export const TextCircle = styled.p`
	display: flex;
	margin-top: 15px;
	color: #FF611E;
`;

export const Line = styled.div`
	display: flex;
	background: #FFAC2D;
	width: 90%;
	height: 2px;
	margin-top: 15px;

`;

export const Title = styled.h1`
	font-size: 40px;
	color: #272727;
	margin-top: 15px;
	
`;
export const SubTitle = styled.p`
	font-size: 27px;
	width: 90%;
	font-weight: 600;
	color: #272727;
	margin-top: 10px;
	
`;


export const ImageEstudio = styled.img`
	margin-top: 35px;
	margin-right: -19px;
	width: 40rem;
	border: 15px;
  
`;

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;