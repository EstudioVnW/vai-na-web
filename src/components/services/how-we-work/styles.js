import styled from 'styled-components';

export const InfoContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;

  @media (min-width: 2200px) {
    padding: 6rem 0;
  }
  
  @media (max-width: 790px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
  }
`;

export const Wrap = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InfoText = styled.p`
  font: 400 1.3rem 'Usual', sans-serif;
  padding-left: 3%;

  @media (min-width: 2200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
    padding-left: 0;
    width: 87%;
    font-size: 1rem;
  }
`;

export const Infographic = styled.figure`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  margin: 3rem 0;
  border-radius: 20px;
  background: #fef4d8;

  @media (min-width: 2200px) {
    margin: 5rem 0;
  }

  @media (max-width: 1366px) {
    padding: .5rem 2vw;
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
