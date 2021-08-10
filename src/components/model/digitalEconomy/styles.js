import styled from 'styled-components';
import { Link } from "gatsby";

export const DigitalEconomy = styled.section`
	width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const BoxDigitalEconomy = styled.div`
	width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 8rem;

    @media (max-width: 768px){
        width: 90%;
        flex-direction: column;
    }

`;

export const TextDigitalEconomy = styled.div`
	width: 34%;

    @media (min-width: 2200px){
        width: 38%;
    }

    @media (max-width: 1024px){
        width: 45%;  
    }

    @media (max-width: 768px){
        width: 100%;
    }

`;

export const TitleBoxDigitalEconomy = styled.h2`
	width: 100%;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.3;
    color: #FF611E;

    @media (min-width: 2200px){
        font-size: 3.8rem;
    }
    @media (max-width: 1024px){
        line-height: 1.1;
    }

    @media (max-width: 768px){
        line-height: 1.3;
    }
`;

export const DescriptionBoxDigitalEconomy = styled.p`
	width: 100%;
    font-size: 1.3rem;
    margin-top: 1rem;

    @media (min-width: 2200px){
        font-size: 2rem;
    }

    @media (max-width: 1024px){
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 768px){
        font: 300 1.3rem 'Usual',sans-serif;
        margin-top: 1rem;
    }

`;

export const BoxImageDigitalEconomy = styled.div`
    width: 60%;
    z-index: 2;

    @media (max-width: 1024px){
        width: 57%;  
    }
    @media (max-width: 768px){
        width: 100%;
    }

`;

export const ImageDigitalEconomy = styled.img`
    display: flex;

    @media (max-width: 768px){
        display: none;
    }

`;

export const ImageDigitalEconomyResponsive = styled.img`
    display: none;

    @media (max-width: 768px){
        display: flex;
        width: 100%;
    }
`;

export const BoxDigitalEconomyInformations = styled.div`
    width: 80%;
    margin-top: -5rem;

    @media (max-width: 1024px){
        margin-top: -2rem;
    }

    @media (max-width: 768px){
        width: 100%;
        margin-top: 0;
    }
    
    
`;
export const BoxOrange = styled.div`
    width: 50rem;
    height: 30rem;
    background: #FF611E20;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 2200px){
        width: 65rem;
        height: 39rem;
        
    }

    @media (max-width: 1024px){
        width: 30rem;
        height: 18rem;
    }

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    
`;
export const BoxImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-bottom: 4rem;

    @media (max-width: 768px){
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
    }
`;

export const BoxImageInformation = styled.figure`
   width: 50%;

   @media (max-width: 768px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
   
`;
export const ImageInformation = styled.img`
   margin-top: 5rem;

   
`;

