import styled from 'styled-components';
import { Link } from 'gatsby';

export const Header = styled.header`
  min-height: auto;
  background: #00145D;
  border-radius: 0 0 0 20px;
  margin-left: 3.4rem;

  @media (max-width: 1024px){
    margin: 0;
    border-radius: 0;
  }
`;

export const Wrap = styled.div`
  position: relative;
  height: 70vh;

  @media (max-width: 1024px){
    border-radius: 0;
    min-height: 50vh;
  }

  @media (max-width: 768px){
    height: 85vh;
    height: calc(100vh - 8rem);
  }

  @media (min-height: 2040px){
    height: 50vh;
  }
`;

export const CardHome = styled.div`
  margin-top: 3rem;
  padding: 0.55rem 2rem 2rem;
  border-radius: 15px;
  box-shadow: 0 0 30px #09255d80;
  background: #FED5B2;
  z-index: 1;

  position: absolute;
  left: 5%;
  width: 50%;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px){
    margin: 0;
    padding: 0.55rem 1.2rem 1.2rem;
    left: 5%;
    width: 70%;
    top: 70%;
  }
 `;

export const BoxCircle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Circles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.37rem;

  @media (min-width: 2200px) {
    width: 6rem;
  }
  @media (max-width: 1200px) {
    width: 2.7rem;
  }
`;
export const Circle = styled.div`
  display: flex;
  width: 17px;
  height: 17px;
  background: #FFAC2D;
  border-radius: 50%;
  margin-top: 15px;
  
  @media (min-width: 2200px) {
    margin: 1rem 0;
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1200px) {
    width: 10px;
    height: 10px;
  }
`;
export const TextCircle = styled.p`
  display: flex;
  margin-top: 15px;
  color: #FF611E;
  font-size: 1.1rem;
  font-weight: lighter;

  @media (min-width: 2200px) {
    font-size: 2rem;
  }
    @media (max-width: 1200px){
     font-size: 0.8rem;
   }
`;
export const Line = styled.div`
  display: flex;
  background: #FFAC2D;
  height: 2px;
  margin-top: 15px;

  @media (max-width: 1200px) {
    margin-top: 8px;
  }
`;

export const Title = styled.h1`
  margin-top: 15px;
  padding-top: 0.45rem;
  font-size: 2.7rem;
  font-weight: 800;
  color: #272727;

  @media (min-width: 2200px) {
    font-size: 4rem;
  }
  @media (max-width: 1440px){
    font-size: 2rem;
  }
  @media (max-width: 1200px){
     font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    margin-top: 4px;
    font-size: 1.7rem;
  }
  @media (max-width: 480px) {
     font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #272727;
  margin-top: 10px;
  
  @media (min-width: 2200px) {
    font-size: 2.9rem;
  }
  @media (max-width: 1440px){
    font-size: 1.4rem;
  }
  @media (max-width: 1200px){
     font-size: 1rem;
    }
  @media (max-width: 768px) {
    margin-top: 2px;
    font-weight: 500;
  }
    @media (max-width: 480px) {
     font-size: 1.3rem;
    line-height: 1.4;
   }
`;

export const ImageEstudio = styled.img`
  position: absolute;
  right: 0;
  width: 50%;
  top: 65%;
  transform: translateY(-50%);
  position: absolute;

  @media (max-width: 1024px){
    top: 50%;
    transform: translateY(-50%);
    width: 60%;
  }

  @media (max-width: 768px){
    right: 0;
    width: 70%;
    top: 40%;
    width: 85%;
    border-radius: 10px 0 0 10px;
  }
`;

export const StyledLink = styled(Link)`
`;
