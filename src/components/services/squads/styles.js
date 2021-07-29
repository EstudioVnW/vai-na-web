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
    margin-top: 3rem;
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
    background: #eff1f8;
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

export const SquadsWrap = styled.div `
  width: 30%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1024px) {
    width: 90%;
  }
`

export const SquadsText = styled.p`
  margin: 1rem 0;
  width: 100%;
  font: 300 1.3rem 'Usual', sans-serif;
  line-height: 1.5;

  @media (max-width: 1024px) {
    width: 100%;
    order: 1;
  }

  @media(max-width: 425px) {
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.3rem;
  } 
`;

export const BoxButton = styled.div `
  display: flex;
  align-items: center;
  height: 6rem;

  @media (max-width: 1024px) {
    order: 2;
  }

  button {
    height: 3.4rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 425px) {
    Button {
      font-size: 0.8rem;
      height: 40%;
      width: 50%;

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
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  background-image: url(${squadsIcon});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

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
  transition: 0.2s;

  &:hover {
    font-weight: 800;

    span {
      font-weight: 800;
    }
  }

  span {
    font: 700 2rem 'Usual', sans-serif;
    color: #0f2b92;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;

    span {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;

    span {
      font-size: 1.3rem;
    }
  }

`;
