import styled from 'styled-components';

export const SquadsContainer = styled.section`
  max-width: 100%;
  min-height: 50vh;
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const SquadsWrap = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SquadsContent = styled.figure`
  margin-top: 2rem;
  position: relative;

  @media (min-width: 2200px) {
    margin-top: 4rem;
  }

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
  margin: 10px 0;

  @media (min-width: 2200px) {
    font-size: 4rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media(max-width: 425px) {
    margin-bottom: 0.6rem;
    font-size: 1.7rem;
  } 
`;

export const SquadsText = styled.p`
  font: 300 1.3rem 'Usual', sans-serif;
  line-height: 1.4;

  @media (min-width: 2200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media(max-width: 425px) {
    padding-right: 1rem;
    font-size: .9rem;
    line-height: 1.3rem;
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
  margin: 0.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    justify-content: space-around;
  }
`;

export const SquadsPerson = styled.p`
  position: relative;
  width: 50%;
  font: 300 1.3rem 'Usual', sans-serif;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:nth-child(2) {
    height: 13rem;
    bottom: -25%;
  }

  @media (min-width: 2200px) {
    font-size: 2.2rem;
  }

  @media(max-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    width: 40%;
    
    &:nth-child(2) {
      height: auto;
      bottom: 0;
    }
  }

  @media(max-width: 425px) {
    margin-top: 0;
    font-size: 0.9rem;
    left: 0;
    width: 30%;
  }
`;

export const Line = styled.img`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50% , -50%);
  height: 15rem;
  width: 15rem;

  @media(max-width: 1024px) {
    display: none;
  }
`;

export const MobLineH = styled.img`
  display: none;

  @media (max-width: 1024px) {
    position: absolute;
    top: 0.1%;
    left: 15%;
    display: block;
  }
`;

export const MobLineV = styled.img`
  display: none;

  @media(max-width: 1024px) {
    display: block;
    top: 9%;
    left: 50%;
    transform: translate(-50% , -50%);
    position: absolute;
  }
`;
