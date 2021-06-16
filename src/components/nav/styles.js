import styled from 'styled-components';

export const Menu = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 7.25rem;
	margin: 0 auto;
	position: fixed;
	top: 0;
	z-index: 10;
	
	@media (min-width: 2560px) {
		width: 95%;
		margin-left: 5rem;
		margin-top: 5rem;
	}
	@media (max-width: 1440px) {
		width: 95%;
		margin-top: 2rem;
	}
	@media (max-width: 1024px) {
		width: 95%;
		margin-top: 2rem;
		justify-content: space-around;
		
	}
	@media (max-width: 768px) {
		margin-top: 0;		
	}

`;

export const Ul = styled.ul`
  display: flex;
  padding-right: 7.45rem;
  align-items: center;

  @media (min-width: 2560px) {
	
	}
  

	@media (max-width: 768px) {
		display: flex;
    	flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 30%;
		padding: 0;
	}
`;

export const Li = styled.li`
	min-width: 5rem;
	text-align: center;
	margin-left: 1rem;
	cursor: pointer;

	@media (min-width: 2560px) {
		
		
	}
	

	@media (max-width: 768px) {
		padding: 0;
	}
	
	a{
		text-decoration: none;
		font-size: 1.125rem;
		color: #FDE7A9;
		width: 1rem;
		transition: all 0.15s ease-in;
		padding: 0.25rem 0;
	}
	a:hover{
		border-bottom: 0.15rem solid #FDE7A9;
		font-weight: bold;
	}
`;

export const Figure = styled.figure`
`;

export const BoxImg = styled.span`
	display: none;

	@media (max-width: 768px) {
		display: initial;
	}
`;

export const Image = styled.img`
	display: flex; 
	width: 7rem;
	margin-left: 50px;

	@media (min-width: 2560px){
		margin-left: 6rem;
		width: 14rem;
	}
	@media (max-width: 1440px){
		margin-left: 5rem;
		width: 9rem;
	}
	@media (max-width: 1024px) {
		margin-left: 3rem;
		width: 7rem;
		
	}
	@media (max-width: 768px) {
		margin-left: 3rem;
		width: 5rem;
	
		
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