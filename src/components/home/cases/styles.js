import styled from 'styled-components';
import { Link } from 'gatsby';

export const Cases = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0 8rem;

  @media (max-width: 768px) {
    padding: 0 0 4rem;
  }
`;

export const TitleCases = styled.h2`
  margin-bottom: 3rem;
  color: #00145D;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  padding: 0 2rem;
  width: 50%;

  @media (min-width: 2200px) {
    font-size: 3.8rem;
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const BoxCasesImages = styled.div`
  width: 80%;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const CasesImages = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 400vw;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0;
  }
`;

export const BoxImage = styled.figure`
  width: 21%;
  height: 6rem;
  margin: 0.2rem 1.2rem;
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  -webkit-fter: grayscale(100%);
  filter: grayscale(100%);
  transition: box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    filter: none;
    box-shadow: 0 0 30px #0F2B9233;
  }

  @media (min-width: 2200px) {
    margin: 0.5rem;
    padding: 1rem;
    width: 24%;
      height: 10rem;
    border-radius: 2rem;
  }

  @media (max-width: 1200px){
    width: 20%;
  }

  @media (max-width: 768px) {
    filter: none;
    width: 11%;
    height: 6rem;
    padding: 0;
    margin: 0 auto;

    &:hover{
      box-shadow: none;
    }
  }

`;

export const ImageCases = styled.img`
  max-width: 100%;

  @media (min-width: 2200px) {
    width: 80%;
    max-height: 20rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

export const ImageCasesM4A = styled.img`
  max-width: 70%;

  @media (min-width: 2200px) {
    width: 50%;
    max-height: 20rem;
  }
`;

export const ButtonCases = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 4rem;
  font-size: 0.8rem;
  font-weight: 500;

  @media (min-width: 2200px) {
    margin: 4rem 0 3rem;

    button {
      width: 35rem;
      height: 5.5rem;
      border-radius: 3rem;
      font-size: 2rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;

    button {
      width: 21rem;
      height: 3.3rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {

    button {
      width: 17rem;
      height: 2.7rem;
      font-size: 1rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #0F2B92;
  font-size: 1.125rem;
  text-decoration: none;
`;
