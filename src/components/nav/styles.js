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
`;

export const Ul = styled.ul`
  display: flex;
  padding-right: 7.45rem;
  align-items: center;

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