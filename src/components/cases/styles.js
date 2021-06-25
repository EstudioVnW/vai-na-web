import styled from 'styled-components';
import { Link } from "gatsby";

export const Cases = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 3rem;
`;

export const BoxCasesImages = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		overflow: hidden;
		overflow-x: scroll;	
	}
`;


export const CasesImages = styled.div`
	width: 100%;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		width: 800vw;
		justify-content: space-evenly;
		flex-wrap: nowrap;
	}
`;

export const BoxImage = styled.figure`
	width: 20%;
	height: 6.5rem;
	margin: 0.5rem;
	padding: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	
	&:hover {
		border-radius: 20px;
		filter: none;
		box-shadow: 0 0 30px #0F2B9233;
	}

	@media (min-width: 2560px) {
		width: 25%;
		height: 10rem;
		margin: 0;
		padding: 0.5rem;
	}

	@media (max-width: 768px) {
		filter: none;
		width: 100vw;
		height: auto;

		&:hover{
			box-shadow: none;
		}

	}

`;
export const ImageCases = styled.img`
	max-width: 100%;

	@media (min-width: 2560px) {
		max-height: 20rem;
	}

	@media (max-width: 768px) {
		width: 50%;
	}

`;
export const ButtonCases = styled.div`
	margin-top: 2rem;
`;
export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;