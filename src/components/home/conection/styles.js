import styled from 'styled-components';

export const Conection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImagePeoples = styled.img`
  max-width: 30%;

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
  font-size: 2.5rem;
  font-weight: 500;
  
  @media (max-width: 1440px){
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export const ConectionLineImage = styled.img`
`;

export const ConectionButton = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;
