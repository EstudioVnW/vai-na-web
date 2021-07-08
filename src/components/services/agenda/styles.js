import styled from 'styled-components';

export const AgendaContainer = styled.section`
  max-width: 100%;
  min-height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    min-height: 40vh;
  }

`;

export const AgendaWrap = styled.div `
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 790px) {
    flex-direction: column;
    padding: 0;
  }
`

export const AgendaBox = styled.div`
  width: 45%;

  @media (max-width: 790px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const AgendaImg = styled.figure`
  width: 50%;

  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const AgendaTitle = styled.h2`
  font: 800 2rem 'Usual', sans-serif;
  color: #00145d;
`;

export const AgendaText = styled.p`
  margin-top: 1.8rem;
  font: 300 1.3rem 'Usual', sans-serif;
  line-height: 1.6rem;
`;

export const odsImg = styled.img`
  width: 100%;

@media (max-width: 790px) {
    width: 100%;
  }
`;
