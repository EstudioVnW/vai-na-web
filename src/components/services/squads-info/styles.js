import styled from 'styled-components';

export const SquadsContainer = styled.section`
  max-width: 90vw;
  min-height: 70vh;
  margin: 0 auto;
  padding: 6rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 790px) {
    padding: 4rem 0;
    max-width: 100vw;
  }
`;

export const SquadsContent = styled.figure`
  margin-top: 1rem;
  position: relative;
`;

export const SquadsTitle = styled.h2`
  font: 800 3rem 'Usual', sans-serif;
  color: #ff611e;
  line-height: 3.625rem;
  padding: 0 1.55rem;
  margin-bottom: 1rem;

  @media(max-width: 1024px) {
    width: 87.3vw;
    font-size: 1.688rem;
    line-height: 2.125rem;
  }
`;

export const SquadsText = styled.p`
  padding: 0 1.55rem;
  font: 300 1.625rem 'Usual', sans-serif;
  line-height: 2.438rem;
  margin: 0;

  @media(max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.563rem;
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
  width: 100vw;

  @media(max-width: 1024px) {
    display: flex;
  }
`;

export const Squads = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 3rem;
  text-align: center;

  @media(max-width: 768px) {
    padding: 2rem 0;
  }
  @media(max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const SquadsBox = styled.div`
  width: 100%;
  margin: 0.25rem;
  display: flex;
  justify-content: center;
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

  @media(max-width: 1024px) {
    font-size: 1.063rem;
    line-height: 1.375rem;
    margin: 0.45rem;
    width: 40%;
    bottom: 0;

    &:nth-child(2) {
      height: auto;
    }
  }
`

export const Line = styled.img`
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50% , -50%);
  height: 21rem;

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
