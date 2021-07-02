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
   }
`;

export const SquadsImageButton = styled.div`
   width: 40%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-right: 2rem;

   @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
   }
   
`;

export const SquadsImage = styled.div`
   width: 100%;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 768px) {
      margin-top: 50px;
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

   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const SquadsText = styled.div`
   margin-top: 1.2rem;
   width: 55%;

   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const SquadsTextTitle = styled.h1`
   color: #00145D;
   font-size: 2.5rem;

   @media (min-width: 2560px) {
      font-size:  5rem;
   }
   @media (max-width: 768px) {
      font-size: 3.5rem;
   }
   @media (max-width: 480px) {
      font-size: 2rem;
   }
`;

export const SquadsTextSubTitle = styled.h2`
   width: 70%;
   margin-top: 5px;
   color: #272727;
   font-size: 1.7rem;
   font-weight: 500;
   line-height: 2rem;

   @media (min-width: 2560px) {
      font-size:  3rem;
      line-height: 3.5rem;
   }
   @media (max-width: 768px) {
      width: 100%;
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.5rem;   
   }
   @media (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5rem;
   }
`;

export const SquadsTextDescription = styled.p`
   margin-top: 25px;
   width: 90%;
   color: #272727;
   font-size: 1.36rem;

   @media (min-width: 2560px) {
      font-size:  2.5rem;
      width: 100%;
   }
   @media (max-width: 768px) {
      font-size: 2rem;
      margin-top: 50px;
   }
   @media (max-width: 480px) {
      font-size: 1rem;
   }
`;

export const SquadsTextBack = styled.div`
   display: flex;
   align-items: center;
   margin: 2.4rem 0;

   @media (max-width: 768px) {
      margin-top: 50px;
   }
   @media (max-width: 360px) {
      align-items: start;
   }
`;

export const ImageSquadBack = styled.div`
`;

export const ImageBack = styled.img`
   width: 7rem;

   @media (min-width: 2560px) {
      width: 12rem;
   }
   @media (min-width: 1920px){
      width: 9rem;
   }
   @media (max-width: 1440px){
      width: 6rem;
   }
   @media (max-width: 1360px){
      width: 6rem;
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

   @media (max-width: 360px) {
      margin-right: 0;
      width: 65%;
   }
`;
export const BoxTextBackTitle = styled.h1`
   margin-bottom: 2px;
   color: #272727;
   font-size: 1.9rem;

   @media (min-width: 2560px) {
      font-size: 3rem;
      width: 100%;
   }
   @media (max-width: 1360px){
      font-size: 1.5rem;
   }

   @media (max-width: 768px) {
      font-size: 2.5rem;
      width: 90%;
   }
   @media (max-width: 480px) {
      font-size: 1rem;
   }
`;
export const BoxTextBackDescription = styled.p`
   color: #272727;
   font-size: 1.3rem;
   line-height: 2rem;

   span {
      display: block;
   }

   @media (min-width: 2560px) {
      font-size: 2.5rem;
      width: 100%;
   }
   @media (max-width: 1440px){
      font-size: 1rem;
      line-height: 1.5rem;
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