import styled from 'styled-components';

export const InfoContainer = styled.section`
  padding: 6rem 4rem;

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

export const InfoTitle = styled.h2`
  margin: 1rem 4.5vw;
  font: 800 2.3em 'Usual', sans-serif;
  color: #00145d;
  
  @media (max-width: 430px) {
    margin: 1rem 0;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export const InfoText = styled.p`
  margin-left: 4.5vw;
  font: 300 1.9em 'Usual', sans-serif;

  @media (max-width: 430px) {
    margin: 0;
    width: 90%;
    font-size: 1rem;
    line-height: 1.438rem;
  }
`;

export const Infographic = styled.picture`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4vw;
  margin: 2rem 0;
  border-radius: 20px;
  background: #fef4d8;

  @media (max-width: 430px) {
    margin-top: 2rem;
  }
`;

export const InfoImg = styled.img`
  width: 100%;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const InfoImgMobile = styled.img`
  display: none;
  width: 100%;

  @media (max-width: 430px) {
    display: block;
  }
`;


