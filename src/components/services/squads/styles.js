import styled from 'styled-components';

import squadsIcon from '../../../images/images/squadsIcon.png';

export const SquadsContainer = styled.section`
  position: relative;
  display: flex;
  padding: 6rem 0;
  max-width: 95vw;
  height: 75vh;
  margin: 0 auto;

  @media(max-width: 1440px) {
    align-itemns: flex-start;
    padding: 0;
  }

  @media(max-width: 1366px) {
    max-width: 100vw;
    padding: 4rem 0;
  }

  @media(max-width: 1024px) {
    padding: 0;
    align-items: flex-end;
    justify-content: center;
  }

`;

export const SquadsBg = styled.div`
  padding: 9.7rem 7.5rem;
  width: 65%;
  border-radius: 0 20px 20px 0;
  background: #eff1f8;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  @media(max-width: 1440px) {
    padding: 13.5rem 7.5rem;
   }

  @media(max-width: 1366px) {
    padding: 0;
    min-height: 70vh;
    width: 65%;
    padding: 4rem 7rem;
    justify-content: space-evenly;
  }

  @media(max-width: 1024px) {
    width: 100%;
    padding-bottom: 0.8rem;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0;
  }

  @media(max-width: 425px) {
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    padding-bottom: 3rem;
  }
`;

export const SquadsText = styled.p`
  width: 59.5%;
  font: 300 2.188rem 'Usual', sans-serif;
  line-height: 3rem;

  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) {
    width: 60%;
    font-size: 1.4rem;
  }

  @media (max-width: 1120px) {
    font-size: 1.3rem;
    width: 70%;
  }

  @media(max-width: 1024px) {
    width: 70%;
    line-height: 2.5rem;
    padding-bottom: 1rem;
  }

  @media(max-width: 790px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }

  @media(max-width: 425px) {
    width: 90%;
    padding-top: 20rem;
  }
`;

export const SquadsBox = styled.figure`
  width: 60%;
  top: 50%;
  left: 100%;
  transform: translate(-50% , -50%);
  position: absolute;

  @media(max-width: 1024px) {
    left: 50%;
    width: 55%;
    top: 25%;
    display: flex;
    justify-content: center;
  }

  @media(max-width: 790px) {
    width: 90%;
    top: 40%;
  }

  @media(max-width: 425px) {
    width: 100%;
    top: 30%;
  }
`;

export const SquadsImg = styled.img`

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 65%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const SquadsIcon = styled.div`
  position: absolute;
  top: 5%;
  left: 100%;
  transform: translate(-50% , -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  background-image: url(${squadsIcon});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media(max-width: 1366px) {
    width: 15vw;
    height: 15vw;
  }

  @media(max-width: 1024px) {
    width: 20vw;
    height: 20vw;
    top: -14%;
    left: 50%;
    transform: translate(-50% , -50%);
  }

  @media(max-width: 790px) {
    width: 25vw;
    height: 25vw;
  }

  @media(max-width: 425px) {
    width: 42vw;
    height: 42vw;
  }

`;

export const IconText = styled.p`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 20% 0;
  font: 300 1.875rem 'Usual', sans-serif;
  text-align: center;

  &:hover {
    font-weight: 800;

    span {
      font-weight: 800;
    }
  }

  span {
    font: 700 3.938rem 'Usual', sans-serif;
    color: #0f2b92;
  }

  @media(max-width: 1440px) {
    font-size: 1.500rem;

    span {
      font-size: 1.8rem;
    }

  }

  @media(max-width: 1366px) {
    font-size: 1.2rem;

  }

  @media(max-width: 768px) {
    font-size: 0.8rem;

    span {
      font-size: 1.2rem;
    }
  }

`;
