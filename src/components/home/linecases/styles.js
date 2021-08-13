import styled from 'styled-components';

export const LineCases = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: 4rem auto;
  }
`;

export const TextCases = styled.p`
  color: #2727277C;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 0;
    font-size: 1rem;
  }
`;

export const BoxImagesCases = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1.45rem;
    overflow: scroll hidden;
    height: 6rem;
    width: 100%;
  }
`;
export const BoxImage = styled.figure`
  width: 11%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-width: 50%;
    margin-right: 2rem;
  }
`;
export const ImagesCases = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;
