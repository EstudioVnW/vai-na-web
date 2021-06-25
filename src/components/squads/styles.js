import { Link } from "gatsby";
import styled from 'styled-components';


export const Squads = styled.div`
width: 100%;
margin-top: 7rem;
display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
   width: 100%;
   flex-direction: column-reverse;
   align-items: center;
}
@media (max-width: 360px) {
	margin-top: 4rem;
}

`;
export const SquadsImageButton = styled.div`
width: 35%;
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 2560px) {
   width: 40%;
}

@media (max-width: 1920px){
	width: 40%;
}

@media (max-width: 1440px){
   width: 40%;
}

@media (max-width: 768px) {
      width: 80%;
   }
   @media (max-width: 360px) {
      width: 100%;
   }
   
`;

export const SquadsImage = styled.div`
border-radius: 20px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;

@media (min-width: 2560px) {
   width: 100%;
}

@media (max-width: 1920px){
	width: 100%;
}

@media (max-width: 1440px){
   width: 100%;
}

@media (max-width: 1360px){
	width: 100%;
}

@media (max-width: 768px) {
   width: 100%;
   margin-top: 50px;
}
@media (max-width: 360px) {
	width: 100%;
}

`;
export const ButtonSquads = styled.div`


`;

export const ImageSquad = styled.img`
width: 80%;

@media (min-width: 2560px) {
   width: 100%;
}

@media (max-width: 1920px){
	width: 100%;
}
@media (max-width: 1440px){
   width: 100%;
}
@media (max-width: 1360px){
	width: 100%;
}

@media (max-width: 768px) {
   width: 100%;
}
`;

export const SquadsText = styled.div`
margin-top: 1rem;
width: 45%;

@media (min-width: 2560px) {
   width: 50%;
}

@media (max-width: 1440px){
   width: 50%;
}
@media (max-width: 768px) {
   width: 85%;
}
@media (max-width: 360px) {
	width: 80%;
}


`;
export const SquadsTextTitle = styled.h1`
color: #00145D;
font-size: 1.8rem;

@media (min-width: 2560px) {
   font-size:  5rem;
}

@media (max-width: 1920px){
	font-size: 3.5rem;
}

@media (max-width: 1440px){
   font-size: 2.6rem;
}

@media (max-width: 1360px){
	font-size: 2.5rem;
}

@media (max-width: 768px) {
   font-size: 3.5rem;
}

@media (max-width: 360px) {
	font-size: 2rem;
}
`;
export const SquadsTextSubTitle = styled.h2`
width: 70%;
margin-top: 5px;
color: #272727;
font-size: 1.2rem;
font-weight: 500;

@media (min-width: 2560px) {
   font-size:  3rem;
}

@media (max-width: 1920px){
	font-size: 2rem;
}

@media (max-width: 1440px){
   font-size: 1.2rem;
}

@media (max-width: 1360px){
	font-size: 1.5rem;
}

@media (max-width: 768px) {
   width: 100%;
   font-size: 2rem;
   font-weight: 600;
}

@media (max-width: 360px) {
	font-size: 1rem;
}
`;
export const SquadsTextDescription = styled.p`
width: 95%;
margin-top: 25px;
color: #272727;
font-size: 1rem;

@media (min-width: 2560px) {
   font-size:  2.5rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 1.5rem;
}

@media (max-width: 1440px){
   font-size: 1.2rem;
   width: 100%;
}

@media (max-width: 1360px){
	font-size: 1rem;
}

@media (max-width: 768px) {
   font-size: 2rem;
   margin-top: 50px;
}
@media (max-width: 360px) {
	font-size: 1rem;
}
`;

export const SquadsTextBack = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;

@media (min-width: 2560px) {
   justify-content: space-around;
}
@media (max-width: 1920px){
	justify-content: space-around;
}

@media (max-width: 1440px){
   justify-content: space-around;
}

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
width: 6rem;

@media (min-width: 2560px) {
   width: 12rem;
}
@media (max-width: 1920px){
	width: 9rem;
}
@media (max-width: 1440px){
	width: 7rem;
}

@media (max-width: 1360px){
	width: 7rem;
}

@media (max-width: 768px) {
   width: 8rem;
}

@media (max-width: 360px) {
	width: 5rem;
}
`;
export const BoxTextBack = styled.div`
width: 70%;
margin-right: 2.5rem;

@media (max-width: 360px) {
	margin-right: 0;
   width: 65%;
}

`;
export const BoxTextBackTitle = styled.h1`
font-size: 1.2rem;
color: #272727;

@media (min-width: 2560px) {
   font-size:  3rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 2rem;
}

@media (max-width: 1440px){
   font-size: 1.5rem;
}

@media (max-width: 1360px){
	font-size: 1.5rem;
}

@media (max-width: 768px) {
   font-size: 2.5rem;
   width: 90%;
}

@media (max-width: 360px) {
	font-size: 1rem;
}
`;
export const BoxTextBackDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;

@media (min-width: 2560px) {
   font-size:  2.5rem;
   width: 100%;
}
@media (max-width: 1920px){
	font-size: 1.5rem;
}

@media (max-width: 1440px){
   font-size: 1rem;
}

@media (max-width: 1360px){
	font-size: 1rem;
}

@media (max-width: 768px) {
   font-size: 2rem;
   
}

@media (max-width: 360px) {
	font-size: 0.8rem;
}
`;	
                
                
                


export const SquadsTextCanais = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;

@media (min-width: 2560px) {
   justify-content: space-around;
}

@media (max-width: 1920px){
	justify-content: space-around;
}

@media (max-width: 1440px){
   justify-content: space-around;
}

@media (max-width: 768px) {
   margin-top: 50px;
}
@media (max-width: 360px) {
	align-items: start;
}
`;
export const ImageSquadCanais = styled.div`

`;
export const ImageCanais = styled.img`
width: 6rem;

@media (min-width: 2560px) {
   width: 12rem;
}

@media (max-width: 1920px){
	width: 9rem;
}

@media (max-width: 1360px){
	width: 7rem;
}

@media (max-width: 1440px){
	width: 7rem;
}

@media (max-width: 768px) {
   width: 8rem;
}

@media (max-width: 360px) {
	width: 6rem;
}
@media (max-width: 360px) {
	width: 5rem;
}
`;
export const BoxTextCanais = styled.div`
width: 70%;
margin-right: 2.5rem;

@media (max-width: 360px) {
	margin-right: 0;
   width: 65%;
}
`;
export const BoxTextCanaisTitle = styled.h1`
font-size: 1.2rem;
color: #272727;

@media (min-width: 2560px) {
   font-size:  3rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 2rem;
}

@media (max-width: 1440px){
   font-size: 1.5rem;
}

@media (max-width: 1360px){
	font-size: 1.5rem;
}

@media (max-width: 768px) {
   font-size: 2.5rem;
}

@media (max-width: 360px) {
	font-size: 1rem;
   width: 100%;
}

`;
export const BoxTextCanaisDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;

@media (min-width: 2560px) {
   font-size:  2.5rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 1.5rem;
}

@media (max-width: 1440px){
   font-size: 1rem;
}

@media (max-width: 1360px){
	font-size: 1rem;
}

@media (max-width: 768px) {
   font-size: 2rem;
}

@media (max-width: 360px) {
	font-size: 0.8rem;
   width: 100%;
}
`;	
                
                
                


export const SquadsTextMVPs = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;

@media (min-width: 2560px) {
   justify-content: space-around;
}

@media (max-width: 1920px){
	justify-content: space-around;
}

@media (max-width: 1440px){
   justify-content: space-around;
}

@media (max-width: 768px) {
   margin-top: 50px;
}

@media (max-width: 360px) {
	align-items: start;
}
`;
export const ImageSquadMVPs = styled.div`

`;
export const ImageMVPs = styled.img`
width: 6rem;

@media (min-width: 2560px) {
   width: 12rem;
}

@media (max-width: 1920px){
	width: 9rem;
}

@media (max-width: 1360px){
	width: 7rem;
}

@media (max-width: 1440px){
	width: 7rem;
}

@media (max-width: 768px) {
   width: 8rem;
}

@media (max-width: 360px) {
	width: 5rem;
}
`;
export const BoxTextMVPs = styled.div`
width: 70%;
margin-right: 2.5rem;

@media (max-width: 360px) {
	margin-right: 0;
   width: 65%;
}
`;
export const BoxTextMVPsTitle = styled.h1`
font-size: 1.2rem;
color: #272727;

@media (min-width: 2560px) {
   font-size:  3rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 2rem;
}

@media (max-width: 1440px){
   font-size: 1.5rem;
}

@media (max-width: 1360px){
	font-size: 1.5rem;
}

@media (max-width: 768px) {
   font-size: 2.5rem;
}
@media (max-width: 360px) {
	font-size: 1rem;
   width: 100%;
}
`;
export const BoxTextMVPsDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;

@media (min-width: 2560px) {
   font-size:  2.5rem;
   width: 100%;
}

@media (max-width: 1920px){
	font-size: 1.5rem;
}

@media (max-width: 1440px){
   font-size: 1rem;
}

@media (max-width: 1360px){
	font-size: 1rem;
}

@media (max-width: 768px) {
   font-size: 2rem;
}
@media (max-width: 360px) {
	font-size: 0.8rem;
   width: 100%;
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