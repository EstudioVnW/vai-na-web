import { Link } from "gatsby";
import styled from 'styled-components';


export const Squads = styled.div`
   width: 100%;
   padding: 7rem 0 4rem;

   @media (min-width: 2200px) {
      padding: 12rem 0;
   }
   @media (max-width: 360px) {
      padding: 4rem 0;
   }
`;

export const Wrap = styled.div`
   position: relative;
   width: 80%;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;

   @media (max-width: 1200px) {
      width: 90%;
   }
   @media (max-width: 768px) {
      flex-direction: column-reverse;
      width: 88%;
   }
`;

export const SquadsImageButton = styled.div`
   width: 40%;
   display: flex;
   flex-direction: column;
   align-items: center;

   button {
      @media (min-width: 2200px) {
         width: 25rem;
      height: 5.5rem;
      font-size: 2rem;
      font-weight: 500;
      border-radius: 3rem;
      }
      @media (max-width: 1440px) {
         width: 14rem;
         height: 3rem;
         font-size: 1.1rem;
      }
   }

   
   @media (max-width: 1200px) {
      width: 45%;
   }
   @media (max-width: 768px) {
      position: relative;
      margin: 1rem auto 0;
      width: 80%;
      
      button {
         position: absolute;
         width: 12.5rem;
         font-size: 0.95rem;
      }
   }
   @media (max-width: 480px) {
      width: 100%;
      
      button {
         bottom: -3%;
         width: 13rem;
         height: 3rem;
         border-radius: 25px;
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
   box-shadow: 0px 0px 20px #0f2b9240;
   overflow: hidden;

   &:hover {
      img {
         transform: scale(1.1) translate(4%, 0);
      }
   }

   @media (max-width: 768px) {
      margin-top: 1rem;
      border-radius: 10px;
   }
`;

export const ButtonSquads = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1rem;

   @media (min-width: 2200px) {
      margin-top: 4rem;
   }
`;

export const ImageSquad = styled.img`
   width: 100%;
   height: 100%;
   transition: 0.25s ease-out;
`;

export const SquadsText = styled.div`
   width: 54%;

   @media (max-width: 1200px) {
      width: 50%;
   }
   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const SquadsTextTitle = styled.h2`
   color: #00145D;
   font-size: 2rem;
   font-weight: 800;
   letter-spacing: -1px;

   @media (min-width: 2200px) {
      font-size: 3.8rem;
   }
   @media (max-width: 1440px) {
      font-size: 1.8rem;
   }
   @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 1.1;
   }
   @media (max-width: 480px) {
      font-size: 2rem;
   }
`;

export const SquadsTextSubTitle = styled.h3`
   margin-top: 5px;
   width: 68%;
   color: #272727;
   font-size: 1.3rem;
   font-weight: 500;
   line-height: 2rem;

   @media (min-width: 2200px) {
      width: 80%;
      font-size: 2.5rem;
      line-height: 1.3;
   }
   @media (max-width: 1440px) {
      font-size: 1.1rem;
      line-height: 1.3;
   }
   @media (max-width: 768px) {
      margin-top: 0.6rem;
      width: 100%;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.4;
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
   font-size: 1.1rem;
   line-height: 1.6;

   @media (min-width: 2200px) {
      width: 100%;
      font-size: 1.8rem;
   }
   @media (max-width: 768px) {
      font-size: 1rem;
   }
   @media (max-width: 480px) {
      width: 100%;
      font-size: 0.8rem;
   }
`;

export const SquadsTextBack = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 1.2rem 0 2rem;

   @media (min-width: 2200px) {
      margin: 3rem 0;
   }
   @media (max-width: 1440px) {
      margin: 1rem 0;
   }
   @media (max-width: 768px) {
      margin: 1.5rem 0;
   }
   @media (max-width: 360px) {
      align-items: start;
      justify-content: flex-start;
      margin-top: 2.2rem;
   }
`;

export const ImageSquadBack = styled.figure`
   margin-right: 1.3rem;
`;

export const ImageBack = styled.img`
   width: 6rem;

   @media (min-width: 2200px) {
      width: 13rem;
   }
   @media (max-width: 1440px){
      width: 5rem;
   }
   @media (max-width: 480px) {
      width: 4.7rem;
   }
`;

export const BoxTextBack = styled.div`
   width: 82%;

   @media (min-width: 2200px) {
      margin-left: 3rem;
      width: 100%;
   }
   @media (max-width: 360px) {
      margin-right: 0;
      width: 68%;
   }
`;

export const BoxTextBackTitle = styled.h4`
   margin-bottom: 0.5rem;
   color: #272727;
   font-size: 1.5rem;

   @media (min-width: 2200px) {
      width: 100%;
      font-size: 2.4rem;
   }
   @media (max-width: 1440px){
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
   }
   @media (max-width: 768px) {
      width: 88%;
      font-size: 1.4rem;
   }
   @media (max-width: 480px) {
      font-size: 1.4rem;
   }
`;

export const BoxTextBackDescription = styled.p`
   color: #000;
   font-size: 1.1rem;
	line-height: 1.6rem;

   span {
      display: block;
   }

   @media (min-width: 2200px) {
      width: 100%;
      font-size: 1.8rem;
      line-height: 1.4;
   }
   @media (max-width: 1440px){
      font-size: 1rem;
      line-height: 1.5;
   }
   @media (max-width: 768px) {
      font-size: 1rem; 
      line-height: 1.5;  
   }
   @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
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