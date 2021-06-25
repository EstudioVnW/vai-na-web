import styled from 'styled-components';
import { Link } from "gatsby";

export const Conection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    max-width: 100%;

    @media (max-width: 768px) {
		flex-direction: column;
	}

`;
export const ImagePeoples = styled.img`
    width: 30%;
    @media (max-width: 768px) {
		display: none;
	}
`;
export const ImagePeoplesResponsive = styled.img`
    display: none;

    @media (max-width: 768px) {
		display: flex;
    width: 100%;
	}
`;

export const ConectionCenter = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;
export const ConectionTitle = styled.h1`
    width: 100%;
    color: #00145D;
    text-align: center;
    font-weight: 500;

    @media (min-width: 2560px) {
      font-size: 3rem;
    }

    @media (max-width: 1920px) {
      font-size: 3rem;
    }

    @media (max-width: 1440px){
      font-size: 2rem;
    }

    @media (max-width: 1360px){
      font-size: 2rem;
    }

    @media (max-width: 768px) {
		width: 90%;
	}

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }

`;
export const ConectionLineImage = styled.img`
    width: 100%;
    @media (max-width: 768px) {
        width: 90%;
    }

`;
export const ConectionButton = styled.div`

`;

