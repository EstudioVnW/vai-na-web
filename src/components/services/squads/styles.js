import styled from 'styled-components';

import squadsIcon from '../../../images/images/squadsIcon.png';

export const SquadsContainer = styled.section`
  display: flex;
  max-width: 100%;
  min-height: 65vh;
  
  @media (max-width: 1024px) {
    min-height: 55vh;
  }

  @media (max-width: 425px) {
    justify-content: flex-end;
    margin-top: 1rem;
    min-height: 40vh;
  }
`;

export const SquadsBg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  ::before {
    border-radius: 0 20px 20px 0;
    background: #fff1e6;
    content: '';
    display: block;
    width: 60%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;

    ::before {
      width: 100%;
      height: 70%;
      border-radius: 0;
    }
  }
`;

export const SquadsWrap = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const SquadsText = styled.p`
  margin: 1rem 0;
  width: 100%;
  font: 400 1.3rem 'Usual', sans-serif;
  line-height: 1.5;

  @media (min-width: 2200px) {
    margin: 0 0 3rem;
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    order: 1;
  }

  @media(max-width: 425px) {
    width: 90%;
    font-size: 1rem;
    line-height: 1.6;
  } 
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  
  button {
    height: 3.4rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media (min-width: 2200px) {
    button {
      width: 30rem;
      height: 6rem;
      font-size: 2rem;
      font-weight: 400;
      border-radius: 50px;
    }
  }

  @media (max-width: 1024px) {
    order: 2;
  }

  @media (max-width: 425px) {
    button {
      font-size: 0.8rem;
      height: 40%;
      width: 55%;

      &:hover {
        height: 45%;
      }
    }
  }
`;

export const SquadsBox = styled.figure`
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    transform: none;
    order: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 96%;
  }
`;

export const SquadsImg = styled.img`
    width: 80%;

    @media (max-width: 768px) {
      width: 100%;
    }
`;

export const SquadsIcon = styled.div`
  position: absolute;
  top: 5%;
  left: 75%;
  transform: translate(-50% , -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14vw;
  height: 14vw;
  border-radius: 50%;
  background-image: url(${squadsIcon});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) {
    width: 20vw;
    height: 20vw;
    left: 50%;
    top: 0;
  }

  @media (max-width:768px) {
    top: -5%;
    width: 25vw;
    height: 25vw;
  }

  @media(max-width: 425px) {
    width: 40vw;
    height: 40vw;
  }
`;

export const IconText = styled.p`
  display: flex;
  flex-direction: column;
  width: 72%;
  padding: 20% 0;
  font: 500 1.1rem 'Usual', sans-serif;
  text-align: center;
  transition: 0.1s;

  &:hover {
    font-weight: 700;

    span {
      font-weight: 800;
    }
  }

  span {
    font: 600 2rem 'Usual', sans-serif;
    color: #0f2b92;
  }

  @media (min-width: 2200px) {
    font-size: 2.2rem;

    span {
      font-size: 3.8rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;

    span {
      font-size: 1.8rem;
    }
  }
`;
