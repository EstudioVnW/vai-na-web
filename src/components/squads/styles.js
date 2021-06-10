import { Link } from "gatsby";
import styled from 'styled-components';


export const Squads = styled.div`
width: 100%;
margin-top: 7rem;
display: flex;
justify-content: space-evenly;
`;
export const SquadsImageButton = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const SquadsImage = styled.div`
border-radius: 20px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`;
export const ButtonSquads = styled.div`
z-index: 2;
margin-top: -50px;
`;

export const ImageSquad = styled.img`
width: 95%;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;

:hover{
    -webkit-transform: scale(1.1);
       transform: scale(1.1);
    
}
`;

export const SquadsText = styled.div`
margin-top: 1rem;
width: 45%;
`;
export const SquadsTextTitle = styled.h1`
color: #00145D;
font-size: 1.8rem;
`;
export const SquadsTextSubTitle = styled.h2`
width: 70%;
margin-top: 5px;
color: #272727;
font-size: 1.2rem;
font-weight: 500;
`;
export const SquadsTextDescription = styled.p`
width: 95%;
margin-top: 25px;
color: #272727;
font-size: 1rem;
`;

export const SquadsTextBack = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`;
export const ImageSquadBack = styled.div`

`;
export const ImageBack = styled.img`
width: 6rem;
`;
export const BoxTextBack = styled.div`
width: 70%;
margin-right: 2.5rem;
`;
export const BoxTextBackTitle = styled.h1`
font-size: 1.2rem;
color: #272727;
`;
export const BoxTextBackDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;
`;	
                
                
                


export const SquadsTextCanais = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`;
export const ImageSquadCanais = styled.div`

`;
export const ImageCanais = styled.img`
width: 6rem;
`;
export const BoxTextCanais = styled.div`
width: 70%;
margin-right: 2.5rem;
`;
export const BoxTextCanaisTitle = styled.h1`
font-size: 1.2rem;
color: #272727;
`;
export const BoxTextCanaisDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;
`;	
                
                
                


export const SquadsTextMVPs = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`;
export const ImageSquadMVPs = styled.div`

`;
export const ImageMVPs = styled.img`
width: 6rem;
`;
export const BoxTextMVPs = styled.div`
width: 70%;
margin-right: 2.5rem;
`;
export const BoxTextMVPsTitle = styled.h1`
font-size: 1.2rem;
color: #272727;
`;
export const BoxTextMVPsDescription = styled.p`
color: #272727;
margin-top: 5px;
font-size: 0.9rem;
`;			

export const Bold = styled.span`
font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
	
	
`;