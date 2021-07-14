import styled from 'styled-components';

export const SquadsContainer = styled.section`
  max-width: 100%;
  min-height: 50vh;
  padding-top: 4rem;

  @media (max-width: 1024px) {
    display-flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SquadsWrap = styled.div `
  width: 80%;
  margin: 0 auto;
  background: pink;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const SquadsContent = styled.figure`
  margin-top: 1rem;
  position: relative;

  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    width: 100%;
  }
`;

export const SquadsTitle = styled.h2`
  font: 800 2rem 'Usual', sans-serif;
  color: #ff611e;
  margin: 1rem 0;

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }
   @media(max-width: 425px) {
    font-size: 1.7rem;
  } 
`;

export const SquadsText = styled.p`
  font: 300 1.3rem 'Usual', sans-serif;
  line-height: 1.6rem;
  margin: 0;

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media(max-width: 425px) {
    font-size: 1.05rem;
  } 
`;

export const SquadsImg = styled.img`
  width: 100%;

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const SquadsImgMobile = styled.img`
  display: none;

  @media(max-width: 1024px) {
    display: block;
    width: 100%;
    padding-top: 2rem;
  }
`;

export const Squads = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 3rem;
  text-align: center;

  @media(max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media(max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const SquadsBox = styled.div`
  width: 100%;
  margin: 0.25rem;
  display: flex;
  justify-content: center;
  
  @media(max-width: 1366px) {
    margin: 0;
  }

  @media(max-width: 1024px) {
    margin: 0;
 
  }
`
export const SquadsPerson = styled.p`
  position: relative;
  width: 50%;
  font: 800 1.5em 'Usual', sans-serif;
  bottom: -25%;

  &:nth-child(2) {
    height: 15rem;
    bottom: 0%;
  }

  @media(max-width: 1366px) {
    font-size: 1.2rem;
    top: -30%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 2%;

    &:nth-child(2) {
      height: 8rem;
      top: 0;
    }
  }

  @media(max-width: 1120px) {
    font-size: 1rem;
    top: -30%;
    width: 45%;

    &:nth-child(2) {
      height: 5rem;
      top: 0;
    }
  }

  @media(max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.375rem;
    margin: 0.45rem;
    width: 40%;
    bottom: 0;

    &:nth-child(2) {
      height: auto;
    }
  }

  @media(max-width: 425px) {
    font-size: 0.8rem;
    left: 0;
  }
`
export const Line = styled.img`
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50% , -50%);
  height: 21rem;
  
  @media(max-width: 1366px) {
    width: 30px;
    height: 200px;
    bottom: -10%;
  }

  @media(max-width: 1120px) {
    width: 30px;
    height: 150px;
    bottom: -10%;
  }

  @media(max-width: 1024px) {
    display: none;
  }
`

export const MobLineH = styled.img`
  display: none;

  @media(max-width: 1024px) {
    position: absolute;
    top: 0.1 %;
    left: 15 %;
    display: block;
  }
`;

export const MobLineV = styled.img`
  display: none;

  @media(max-width: 1024px) {
    display: block;
    top: 10%;
    left: 50%;
    transform: translate(-50% , -50%);
    position: absolute;
  }
`;
