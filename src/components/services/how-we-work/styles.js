import styled from 'styled-components';

export const InfoContainer = styled.section`
  padding: 6rem 4rem;
  
  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

export const InfoTitle = styled.h2`
  margin: 1rem 3rem;
  font: 800 3rem 'Usual', sans-serif;
  color: #00145d;

  @media (max-width: 790px) {
    font-size: 2.5rem;
    width: 100%;
  }
`;

export const InfoText = styled.p`
  margin-left: 3rem;
  font: 300 1.5em 'Usual', sans-serif;

  @media (max-width: 430px) {
    margin: 0;
    width: 90%;
    font-size: 1rem;
    line-height: 1.438rem;
  }
`;

export const Infographic = styled.picture`
  display: flex;
  justify-content: center;
  padding: 1.5rem 4vw;
  margin: 2rem 0;
  border-radius: 20px;
  background: #fef4d8;

  @media (max-width: 1366px) {
    padding: .5rem 2vw;
    margin: 1rem 0;
  }
`;

export const InfoImg = styled.img`
  width: 100%;

  @media (max-width: 790px) {
    display: none;
  }
`;

export const InfoImgMobile = styled.img`
  display: none;
  width: 100%;

  @media (max-width: 790px) {
    display: block;
  }
`;


