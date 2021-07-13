import styled from 'styled-components';

export const InfoContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 790px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  `;
  
  export const Wrap = styled.div `
  width: 80%;
  margin: 0 auto;
`

export const InfoTitle = styled.h2`
  font: 800 2rem 'Usual', sans-serif;
  color: #00145d;
  padding-top: 4rem;

  @media (max-width: 425px) {
    font-size: 1.7rem;
  }
`;

export const InfoText = styled.p`
  font: 300 1.3rem 'Usual', sans-serif;
  padding-top: 0.5rem;

    @media (max-width: 425px) {
      font-size: 1.05rem;
      padding-bottom: 1.5rem;
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


