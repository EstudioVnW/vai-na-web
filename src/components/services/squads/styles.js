import styled from 'styled-components';

import squadsIcon from '../../../images/images/squadsIcon.png';

export const SquadsContainer = styled.section`
  position: relative;
  display: flex;
  padding: 6rem 0;
  max-width: 95vw;
  height: 75vh;
  margin: 0 auto;

  @media(max-width: 1366px) {
    max-width: 100vw;
    padding: 4rem 0;
  }

  @media(max-width: 1024px) {
    max-width: 100vw;
    padding: 0;
    align-items: flex-end;
    justify-content: center;
    background: red;
  }
`;

export const SquadsBg = styled.div`
  padding: 9.7rem 7.5rem;
  width: 65%;

  border-radius: 0 20px 20px 0;
  background: #eff1f8;
  position: relative;

  @media(max-width: 1366px) {
    padding: 0;
    min-height: 70vh;
    width: 65%;
    padding: 4rem 7rem;
    display: flex;
    align-items: center;
  }

  @media(max-width: 1024px) {
    padding-bottom: 0.8rem;
    min-height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0;
  }

  @media(max-width: 640px) {
    border-radius: 0;
    padding: 8rem 1.375rem 2.188rem;
  }
`;

export const SquadsText = styled.p`
  width: 59.5%;
  font: 300 2.188rem 'Usual', sans-serif;
  line-height: 3rem;

  @media (max-width: 1366px) {
    width: 60%;
    font-size: 1.6rem;
  }

  @media (max-width: 1120px) {
    font-size: 1.4rem;
    width: 70%;
  }

  @media(max-width: 1024px) {
    width: 70%;
    font-size: 1.4rem;
    line-height: 2.5rem;
    padding-bottom: 1rem;
  }

  @media(max-width: 790px) {
    font-size: 1rem;
    line-height: 1.625rem;
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
    top: 80%;
  }
`;

export const SquadsImg = styled.img`

  @media (max-width: 1024px) {
    width: 85%;
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

  
  @media(max-width: 1440px) {
    width: 25vw;
    height: 25vw;
  }

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
    width: 40vw;
    height: 40vw;
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

  @media(max-width: 1366px) {
    font-size: 1.2rem;

    span {
      font-size: 2.5rem;
    }
  }

  @media(max-width: 1120px) {
    font-size: 1rem;

    span {
      font-size: 1.9rem;
    }
  }

  @media(max-width: 768px) {
    font-size: 0.938rem;

    span {
      font-size: 2rem;
    }
  }
`;
