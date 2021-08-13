import styled from 'styled-components';
import { Link } from "gatsby";

export const LineCases = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
    justify-content: center;
	margin-top: 4rem;

	@media (min-width: 1900px) {
		margin-top: 8rem;
	}
`;

export const TextCases = styled.p`
	width: 80%;
	color: #2727277C;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

`;

export const BoxImagesCases = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		overflow: scroll hidden;
		width: 100%;
	}
`;
export const BoxImage = styled.figure`
	width: 11%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		min-width: 30%;
		padding-left: 5.25rem;
	}
	@media (max-width: 425px) {
		min-width: 50%;
		padding-left: 2.25rem;
	}
`;
export const ImagesCases = styled.img`
	width: 100%;
    filter: grayscale(100%);
`;