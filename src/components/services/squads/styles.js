import styled from 'styled-components';

import squadsIcon from '../../../images/images/squadsIcon.png';

export const SquadsContainer = styled.section`
  position: relative;
  display: flex;
  padding: 2rem 0;
  max-width: 95vw;
  height: 75vh;
  margin: 0 auto;

  @media (max-width: 790px) {
    padding: 0;
    padding-bottom: 3rem;
    align-items: flex-end;
  }
`;

export const SquadsBg = styled.div`
  width: 65%;
  padding-left: 7rem;
  border-radius: 0 20px 20px 0;
  background: #eff1f8;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 1rem;
    padding-left: 0;
    width: 100%;
    border-radius: 0;
    justify-content: flex-end;
  }
`;

export const SquadsText = styled.p`
  width: 59.5%;
  font: 300 1.8rem 'Usual', sans-serif;
  line-height: 3rem;

  @media (max-width: 1366px) {
    font-size: 1.2rem;
    line-height: 2rem;
    width: 40%;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 2rem;
    width: 50%;
  }

  @media(max-width: 425px) {
    width: 85%;
  } 
`;

export const BoxButton = styled.div `
  height: 5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 790px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 425px) {
    justify-content: flex-start;
    padding: 1.5rem;
  }
`;

export const SquadsBox = styled.figure`
  width: 60%;
  top: 50%;
  left: 100%;
  transform: translate(-50% , -50%);
  position: absolute;

  @media (max-width: 1024px) {
    left: 50%;
    transform: translate(-50% , -120%);
  }

  @media(max-width: 790px) {
    width: 90%;
    top: 46%;
    display: flex;
   justify-content: center;
  }

   @media(max-width: 425px) {
    width: 100%;
    top: 30%;
  } 
`;

export const SquadsImg = styled.img`
 /*  @media (max-width: 425px) {
    width: 100%;
  } */
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

  @media (max-width: 790px) {
    left: 50%;
    top: 0;
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
  font: 300 1.2rem 'Usual', sans-serif;
  text-align: center;

  &:hover {
    font-weight: 800;

    span {
      font-weight: 800;
    }
  }

  span {
    font: 700 1.8rem 'Usual', sans-serif;
    color: #0f2b92;
  }

  @media(max-width: 1024px) {
    font-size: 0.8rem;

    span {
      font-size: 1.2rem;
    }
  }
`;
