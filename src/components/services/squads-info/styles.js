import styled from 'styled-components';

export const SquadsContainer = styled.section`
  max-width: 90vw;
  min-height: 70vh;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 1366px) {
    max-width: 85vw;
    padding: 0.5rem 3rem;
  }

  @media (max-width: 1024px) {
    max-width: 100vw;
    display-flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 10rem;
  }

  @media (max-width: 790px) {
    padding: 0 0; 
    padding-bottom: 4rem;
    max-width: 100vw;
    justify-content: space-around;
    margin-bottom: 8rem;
  }
`;

export const SquadsContent = styled.figure`
  margin-top: 1rem;
  position: relative;

  @media (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

export const SquadsTitle = styled.h2`
  font: 800 3rem 'Usual', sans-serif;
  color: #ff611e;
  line-height: 3.625rem;
  padding: 0 1.55rem;
  margin-bottom: 1rem;

  @media (max-width: 1366px) {
    font-size: 2rem;
    padding: 0 1rem;
    line-height: 2.625rem;
  }

  @media(max-width: 1024px) {
    width: 87.3vw;
    font-size: 1.980rem;
    line-height: 2.5rem;
  }

  @media(max-width: 425px) {
    width: 100vw;
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
`;

export const SquadsText = styled.p`
  padding: 0 1.55rem;
  font: 300 1.625rem 'Usual', sans-serif;
  line-height: 2.438rem;
  margin: 0;

  @media(max-width: 1366px) {
    font-size: 1.150rem;
    line-height: 2rem;
    padding: 0 1rem;
  }

  @media(max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  @media(max-width: 425px) {
    font-size: 1.020rem;
    line-height: 1.4rem;
    width: 95%;
  }
`;

export const SquadsImg = styled.img`
  width: 100%;
  
  @media(max-width: 1366px) {
    width: 100%;
  }

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const SquadsImgMobile = styled.img`
  display: none;
  width: 100vw;

  @media(max-width: 1024px) {
    display: flex;
    width: 75%;
    padding-top: 2rem;
  }

  @media(max-width: 425px) {
    width: 100%;
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
