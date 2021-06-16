import styled from 'styled-components';
import { Link } from "gatsby";

export const Cases = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 3rem;



`;

export const CasesImages = styled.div`
	width: 100%;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
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
	@media (max-width: 768px) {
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		
	}
`;
export const ImageCases = styled.img`
	max-width: 100%;
	max-height: 5rem;
`;
export const ButtonCases = styled.div`
	margin-top: 2rem;
`;
export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;