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
  overflow: hidden;

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: 4rem auto;
  }
`;

export const TextCases = styled.p`
  width: 80%;
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
  width: 200vw;
	animation: ${tickerAnimation} 50s linear infinite;

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

  @media (max-width: 768px) {
    margin-right: 2rem;
    min-width: 14%;
  }
  @media (max-width: 480px) {
    margin-right: 1rem;
    min-width: 24%;
  }
`;

export const ImagesCases = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;
