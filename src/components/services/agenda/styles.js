import styled from 'styled-components';

export const AgendaContainer = styled.section`
  max-width: 90vw;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  padding: 6rem 2rem;

  
  @media (max-width: 1366px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 790px) {
    flex-direction: column;
    padding: 0;
    max-width: 100vw;
  }
`;

export const AgendaBox = styled.div`
  width: 50%;
  padding: 0 2rem;

  @media (max-width: 1366px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 790px) {
    width: 100%;
    padding: 2.188rem 1.375rem;
  }
`;

export const AgendaImg = styled.figure`
  width: 50%;

  @media (max-width: 1120px) {
    width: 65%;
  }

  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const AgendaTitle = styled.h2`
  font: 800 3rem 'Usual', sans-serif;
  line-height: 3.625rem;
  color: #00145d;

  @media (max-width: 1366px) {
    font-size: 2rem;
  }


  @media (max-width: 790px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export const AgendaText = styled.p`
  margin-top: 1.8rem;
  font: 300 1.5rem 'Usual', sans-serif;
  line-height: 2.125rem;

  @media (max-width: 1366px) {
    font-size: 1.040rem;
  }

  @media (max-width: 1120px) {
    font-size: 1rem;
    width: 90%;
  }


  @media (max-width: 790px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }
`;

export const odsImg = styled.img`
  
@media (max-width: 1366px) {
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 790px) {
    width: 100%;
    margin: 0 auto;
  }
`;
