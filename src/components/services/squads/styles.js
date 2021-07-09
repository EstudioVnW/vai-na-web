import styled from 'styled-components';

import squadsIcon from '../../../images/images/squadsIcon.png';

export const SquadsContainer = styled.section`
  position: relative;
  display: flex;
  max-width: 100%;
  min-height: 60vh;

 @media (max-width: 1024px) {
    align-items: flex-end;
    min-height: 0;
 }

  @media (max-width: 425px) {
   padding-top: 5rem;
 } 
`;

export const SquadsBg = styled.div`
  width: 65%;
  border-radius: 0 20px 20px 0;
  background: #eff1f8;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    padding-left: 0;
    padding-bottom: 1rem;
    border-radius: 0;
    justify-content: center;
    position: relative;
    flex-direction: column-reverse;
  }
`;

export const SquadsWrap = styled.div `
  width: 80%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  
`

export const SquadsText = styled.p`
  width: 59.5%;
  font: 300 1.3rem 'Usual', sans-serif;
  line-height: 1.6rem;

  @media (max-width: 1024px) {
    width: 100%;
    order: 1;
  }

  @media(max-width: 425px) {
    width: 100%;
    font-size: 1.05rem;
  } 
`;

export const BoxButton = styled.div `
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  
  @media (max-width: 1024px) {
    order: 2;
    padding-top: 4rem;
  }
`;

export const SquadsBox = styled.figure`
  width: 60%;
  top: 50%;
  left: 100%;
  transform: translate(-50% , -50%);
  position: absolute;

  @media (max-width: 1024px) {
    position: initial;
    transform: none;
    order: 0;
    left: 0;
    display: flex;
    justify-content: center;
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
  @media (max-width: 1024px) {
    width: 80%;
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

  @media (max-width: 1024px) {
    left: 50%;
    top: 0;
  }

  @media (max-width: 790px) {
    width: 25vw;
    height: 25vw;
  }

  @media(max-width: 425px) {
    top: -5%;
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
