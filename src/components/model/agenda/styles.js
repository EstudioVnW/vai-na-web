import styled from 'styled-components';

export const AgendaContainer = styled.section`
  max-width: 100%;
  min-height: auto;
  margin: 0 auto;
  display: flex;
  padding: 8rem 0 3rem;
  
  @media (min-width: 2200px) {
    padding: 11rem 0;
  }
  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: 40vh;
    flex-direction: column;
  }
`;

export const AgendaWrap = styled.div `
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`;

export const AgendaBox = styled.div`
  padding-top: 1rem;
  width: 52%;

  @media (max-width: 1440px) {
    width: 47%;
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    padding-bottom: 1.5rem;
    width: 90%;
  }
`;

export const AgendaImg = styled.figure`
  width: 45%;

  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AgendaTitle = styled.h2`
  font: 800 2em 'Usual', sans-serif;
  color: #00145d;

  @media (min-width: 2200px) {
    font-size: 3.8em;
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.8em;
  }
`;

export const AgendaText = styled.p`
  margin-top: 1.8rem;
  font: 400 1.3rem 'Usual', sans-serif;
  line-height: 1.6;

  @media (min-width: 2200px) {
    font-size: 2em;
  }
  @media (max-width: 1440px) {
    margin-top: 1.5rem;
    font-size: 1em;
  }
  @media (max-width: 480px) {
    margin-top: 0.8rem;
    font-size: 1em;
  }
`;

export const odsImg = styled.img`
  width: 100%;

@media (max-width: 790px) {
    width: 100%;
  }
`;
