import styled, { keyframes } from 'styled-components';

export const tickerAnimation = keyframes`
	0% {
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, 0, 0);
		visibility: visible;
	}
	100% {
		transform: translate3d(-31%, 0, 0);
    -webkit-transform: translate3d(-31%, 0, 0);
	}
`;

export const LineCases = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto 0;
  max-width: 90%;
  overflow: hidden;
  
  @media (min-width: 1200px) {
    max-width: 80%;
    margin: 4rem auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const TextCases = styled.p`
  width: 80%;
  color: #2727277C;
  align-self: flex-start;
  
  @media (min-width: 2200px) {
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem 0;
    font-size: 1rem;
  }
`;

export const BoxImagesCases = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200vw;
	animation: ${tickerAnimation} 80s linear infinite;

  @media (max-width: 768px) {
    padding: 0 1.45rem;
    overflow: scroll hidden;
    height: 6rem;
  }
`;

export const BoxImage = styled.figure`
  margin: 0 10px;
  width: 11%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1900px) {
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 2rem;
    min-width: 14%;
  }
  
  @media (max-width: 480px) {
    margin-right: 1rem;
    min-width: 20%;
  }
`;

export const ImagesCases = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;
