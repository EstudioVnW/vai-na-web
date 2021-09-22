import styled from 'styled-components';
import cardsCircle from '../../../images/images/cardsCircle.svg';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  background: #eff1f8;

  @media (min-width: 2200px) {
    padding: 4rem 0 0;
  }
  
  @media (max-width: 790px) {
    overflow: hidden;
    overflow-x: scroll;
    padding: 0;
  }
`;

export const CardsText = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CardTextTitle = styled.h2`
  font: 800 2rem 'Usual', sans-serif;
  color: #0F2B92;
  padding-top: 1rem;
  padding-left: 10%;

  @media (min-width: 2200px) {
    font-size: 4rem;
  }

  @media (max-width: 425px) {
    font-size: 1.8srem;
  }
`;

export const CardTextSubTitle = styled.p`
  font: 400 1.3rem 'Usual', sans-serif;
  color: #272727;
  padding-top: 0.5rem;
  padding-left: 10%;

  @media (min-width: 2200px) {
    padding-top: 1rem;
    font-size: 2.2rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Weight = styled.span`
  font-weight: 300;
`;

export const Cards = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 35vh;
  padding: 2rem 0;

  @media (min-width: 2200px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 790px) {
    padding: 2rem 1.45rem;
    width: 282vw;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 2rem;
  width: 32.7%;
  height: 32.875rem;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 10px #d2d6e6;
  transition: 0.2s ease-in-out;

  &:nth-child(2) {
    padding: 2rem 1.5rem;
  }
  &:nth-child(3) {
    p {
      padding-top: 1rem;
    }
  }

  @media (min-width: 2200px) {
    padding: 2.8rem 3rem;
    height: auto;

    &:nth-child(2) {
      padding: 2.8rem 2.5rem;
    }
  }
  
  @media (max-width: 1440px) {
    height: auto;
  }

  @media (max-width: 790px) {
    height: auto;
    border-radius: 5vw;
    padding: 1.25rem 1.45rem;
  }

  &:hover{
    transform: scale(1.025);
    box-shadow: 0 4px 10px #bec4d7;
  }
`;

export const CardDetail = styled.div`
  display: flex;
  margin-right: 20%;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  border-bottom: 0.2vw solid #0f2b92;

  @media (min-width: 2200px) {
    padding-bottom: 2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 1366px) {
    margin-bottom: 1.8rem;
  }

  @media (max-width: 790px) {
    padding-bottom: 1rem;
    border-bottom-width: 1vw;
    margin-bottom: 1.75rem;
  }
`;

export const CardCircle = styled.div`
  margin-right: 0.5rem;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: #00145d;

  @media (min-width: 2200px) {
    margin-right: .6rem;
    width: 1.5em;
    height: 1.5em;
  }
  
  @media (max-width: 425px) {
    margin-right: 0.3rem;
    width: .8em;
    height: .8em;
  }
`;

export const CardText = styled.p`
  padding: 1.8rem 5% 0 0;
  font: 300 1.1rem 'Usual', sans-serif;
  line-height: 1.4;
  transition: 0.5s ease;

  @media (min-width: 2200px) {
    padding: 2.5rem 11% 0 0;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 30% 0 0;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding: 1rem 9% 0 0;
  }
`;

export const CardTitle = styled.h3`
  width: 100%;
  font: 800 1.5rem 'Usual', sans-serif;
  color: #333;

  @media (min-width: 2200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    width: 75%;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const IconBg = styled.figure`
  position: absolute;
  top: 7%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  background-image: url(${cardsCircle});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 94%;
  transition: 0.5s ease;

  @media (max-width: 1366px) {
    top: 10%;
    right: 6.5%;
  }

  @media (max-width: 1024px) {
    top: 7%;
  }

  @media (max-width: 425px) {
    width: 21%;
  }
`;

export const CardIcon = styled.img`
  padding: 25%;
  width: 100%;
`;

export const CardVtexImage = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 2200px) {
    padding-top: 12rem;
  }

  @media (max-width: 425px) {
    padding-top: 2rem;
  }
`;

export const ImageVtex = styled.img`
  max-width: 60%;
`;
