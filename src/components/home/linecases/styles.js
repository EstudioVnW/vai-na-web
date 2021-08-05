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
`;

export const BoxImagesCases = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
`;
export const BoxImage = styled.figure`
	max-width: 11%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ImagesCases = styled.img`
	width: 100%;
    filter: grayscale(100%);
`;