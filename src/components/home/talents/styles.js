import styled from 'styled-components';
import { Link } from 'gatsby';

export const Talents = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0 3rem;

  @media (min-width: 2200px) {
    height: 60rem;
  }

  @media (max-width: 1440px) {
    padding: 5rem 0 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0.8rem;
    padding: 0;
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

export const TalentsBackground = styled.div`
  position: absolute;
  width: 70%;
  height: 85%;
  border-radius: 0 20px 20px 0;
  background: #fed5b252;
  z-index: -1;
  
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const TalentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 3rem 0 1rem;
  width: 80%;
  
  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0 0;
    width: 100%;
  }
`;

export const TalentsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
    padding: 0 1.4rem;
  }
`;

export const TalentsTextTitle = styled.h2`
  width: 80%;
  color: #FF611E;
  font-size: 1.8rem;
  font-weight: 800;

  @media (min-width: 1040px) {
    font-size: 2rem;
    line-height: 2.6rem;
  }

  @media (min-width: 2200px) {
    font-size: 3.8rem;
    line-height: 4.5rem;
  }
`;

export const TalentsTextDescription = styled.p`
   margin-top: 1rem;
   color: #272727;
   font: 400 1rem/1.5rem 'Usual', sans-serif;

   @media (min-width: 1040px) {
      font: 400 1rem/1.6rem 'Usual', sans-serif;
   }

   @media (min-width: 2200px) {
     font: 400 2rem/2.7rem 'Usual', sans-serif;
   }
`;

export const ButtonTalents = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1920px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 1200px) {
    margin: 0;
    button {
      width: 9rem;
      height: 3.2rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const ImgBox = styled.figure`
  width: 30rem;
  height: 25rem;
    border-radius: 15px;
  border: 2px solid #FF611E;
  box-shadow: rgb(232, 235, 245) 0px 0px 10px;
  overflow: hidden;

  &:hover {
    img {
       transform: scale(1.1);
    }
  }

  @media (min-width: 2200px) {
    width: 50%;
  }

  @media (min-width: 1800px) {
    width: 45%;
    height: auto;
  }

  @media (max-width: 1440px) {
    width: 25rem;
    height: 20rem;
  }
  
  @media (max-width: 768px) {
    margin: 1rem auto 0;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 0;
  }
`;

export const TalentsImageInfo = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.2s ease-out;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TalentsImageInfoResponsive = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-out;

  @media (max-width: 768px){
      display: block;
  }
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  color: #0F2B92;
  font-size: 1.05rem;
  text-decoration: none;
`;
