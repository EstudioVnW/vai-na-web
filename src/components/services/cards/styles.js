import styled from 'styled-components';
import cardsCircle from '../../../images/images/cardsCircle.svg';

export const Container = styled.section`
  @media (max-width: 790px) {
    overflow: hidden;
    overflow-x: scroll;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 7.5rem;
  min-height: 35vh;
  background: #eff1f8;
  cursor: pointer;

  @media (max-width: 1440px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 790px) {
    padding: 2rem 1.45rem;
    width: 282vw;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  width: 32.7%;
  height: 32.875rem;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 4px 5px #d2d6e6;
  transition: 0.2s ease-in-out;
  will-transform: scale;

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
  }
`;

export const CardDetail = styled.div`
  display: flex;
  margin-right: 20%;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  border-bottom: 0.2vw solid #0f2b92;

  @media (max-width: 790px) {
    padding-bottom: 1rem;
    border-bottom-width: 1vw;
    margin-bottom: 1.75rem;
  }
`;

export const CardCircle = styled.div`
  margin-right: 0.5rem;
  width: 1.05em;
  height: 1.05em;
  border-radius: 50%;
  background: #00145d;

  @media (max-width: 790px) {
    width: 1.2em;
    height: 1.2em;
  }
`;

export const CardText = styled.div`
  padding: 2rem 9% 0 0;
  font: 300 1.5rem 'Usual', sans-serif;
  line-height: 2.188rem;
  transition: 0.5s ease;

  @media (max-width: 790px) {
    font-size: 0.875rem;
    line-height: 1.313rem;
    padding: 1.45rem 1.25rem 0 0;
  }
`;

export const CardTitle = styled.h3`
  font: 800 2.188rem 'Usual', sans-serif;
  line-height: 2.938rem;

  @media (max-width: 790px) {
    font: 800 1.188rem 'Usual', sans-serif;
    line-height: 1.625rem;
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

  @media (max-width: 790px) {
    width: 20%;
    top: 5%;
    right: 6.5%;
  }

  @media (max-width: 460px) {
    top: 9%;
  }
`;

export const CardIcon = styled.img`
  padding: 25%;
  width: 100%;
`;
