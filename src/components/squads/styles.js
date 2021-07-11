import { Link } from "gatsby";
import styled from 'styled-components';


export const Squads = styled.div`
   width: 100%;
   margin-top: 7rem;

   @media (max-width: 360px) {
      margin-top: 4rem;
   }
`;

export const Wrap = styled.div`
   position: relative;
   width: 95vw;  
   display: flex;
   justify-content: center;
   margin: 0 auto;

   @media (max-width: 768px) {
      flex-direction: column-reverse;
      width: 88vw;
   }
`;

export const SquadsImageButton = styled.div`
   width: 40%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-right: 2rem;

   button {
      @media (min-width: 2560px) {
         width: 40rem;
         height: 7rem;
         font-size: 2.9rem;     
         border-radius: 3rem;
      }
      @media (max-width: 1440px) {
         width: 14rem;
         height: 3rem;
         font-size: 1.1rem;
      }
      @media (max-width: 430px) {
         bottom: 15%;
         width: 13rem;
         height: 3rem;
         border-radius: 25px;
      }
   }

   @media (max-width: 1440px) {
      width: 33%;
   }
   @media (max-width: 768px) {
      position: relative;
      width: 100%;
      margin-right: 0;

      button {
         position: absolute;
         bottom: 8%;
      }
   }
`;

export const SquadsImage = styled.div`
   width: 100%;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 15px;
   border: 2px solid #09255d;
   box-shadow: 0 0 10px #e8ebf5;
   overflow: hidden;

   &:hover {
      img {
         transform: scale(1.1) translate(4%, 0);
      }
   }

   @media (max-width: 768px) {
      margin-top: 1rem;
   }
`;

export const ButtonSquads = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 80px;
`;

export const ImageSquad = styled.img`
   width: 100%;
   height: 100%;
   transition: 0.25s ease-out;
`;

export const SquadsText = styled.div`
   margin-top: 1.2rem;
   width: 55%;

   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const SquadsTextTitle = styled.h2`
   color: #00145D;
   font-size: 2rem;

   @media (min-width: 2560px) {
      font-size: 4.5rem;
   }
   @media (max-width: 1440px) {
      font-size: 1.8rem;
   }
   @media (max-width: 1300px) {
      font-size: 1.5rem;
   }
   @media (max-width: 768px) {
      font-size: 3.5rem;
   }
   @media (max-width: 480px) {
      font-size: 2rem;
   }
`;

export const SquadsTextSubTitle = styled.h2`
   width: 61%;
   margin-top: 5px;
   color: #272727;
   font-size: 1.5rem;
   font-weight: 500;
   line-height: 2rem;

   @media (min-width: 2560px) {
      width: 75%;
      font-size: 3rem;
      line-height: 1.3;
   }
   @media (max-width: 1440px) {
      font-size: 1.1rem;
      line-height: 1.3;
   }
   @media (max-width: 1300px) {
      margin-bottom: 1rem;
      width: 55%;
      font-size: 1rem;
   }
   @media (max-width: 768px) {
      width: 100%;
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.5rem;   
   }
   @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.5rem;
   }
`;

export const SquadsTextDescription = styled.p`
   margin-top: 25px;
   width: 90%;
   color: #272727;
	font-size: 1.3rem;
	line-height: 1.6rem;

   @media (min-width: 2560px) {
      font-size:  2.5rem;
      width: 100%;
   }
   @media (max-width: 1440px) {
      width: 78%;
      font-size: 0.9rem;
   }
   @media (max-width: 768px) {
      font-size: 2rem;
   }
   @media (max-width: 480px) {
      width: 100%;
      font-size: 0.84rem;
      line-height: 1.6;
   }
`;

export const SquadsTextBack = styled.div`
   display: flex;
   align-items: center;
   margin: 2.4rem 0;

   @media (min-width: 2560px) {
      margin: 3rem 0;
   }
   @media (max-width: 1440px) {
      margin: 1.4rem 0;
   }
   @media (max-width: 1300px) {
      margin: 0;
   }
   @media (max-width: 768px) {
      margin-top: 50px;
   }
   @media (max-width: 360px) {
      align-items: start;
      margin-top: 2.4rem;
   }
`;

export const ImageSquadBack = styled.div`
`;

export const ImageBack = styled.img`
   width: 9rem;

   @media (min-width: 2560px) {
      width: 16rem;
   }
   @media (max-width: 1440px){
      width: 5rem;
   }
   @media (max-width: 768px) {
      width: 8rem;
   }
   @media (max-width: 480px) {
      width: 5rem;
   }
`;

export const BoxTextBack = styled.div`
   margin-left: 2rem;
   width: 78%;

   @media (min-width: 2560px) {
      margin-left: 3rem;
      width: 100%;
   }
   @media (max-width: 1440px) {
      width: 68%;
   }
   @media (max-width: 360px) {
      margin-right: 0;
      width: 65%;
   }
`;

export const BoxTextBackTitle = styled.h4`
   margin-bottom: 0.5rem;
   color: #272727;
   font-size: 1.5rem;

   @media (min-width: 2560px) {
      width: 100%;
      font-size: 3.3rem;
   }
   @media (max-width: 1440px){
      margin-bottom: 0.2rem;
      font-size: 1.2rem;
   }
   @media (max-width: 1300px) {
      font-size: 1rem;
   }
   @media (max-width: 768px) {
      font-size: 2.5rem;
      width: 90%;
   }
   @media (max-width: 480px) {
      font-size: 1.4rem;
   }
`;

export const BoxTextBackDescription = styled.p`
   color: #272727;
	font-size: 1.3rem;
	line-height: 1.6rem;

   span {
      display: block;
   }

   @media (min-width: 2560px) {
      width: 100%;
      font-size: 2.3rem;
      line-height: 1.4;
   }
   @media (max-width: 1440px){
      font-size: 0.95rem;
      line-height: 1.5;
   }
   @media (max-width: 768px) {
      font-size: 2rem; 
      line-height: 2.5rem;  
   }
   @media (max-width: 480px) {
      font-size: 0.8rem;
      line-height: 1.2rem;
   }
`;	
                             
export const Bold = styled.span`
   font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
`;