import styled from 'styled-components';

export const DigitalEconomy = styled.section`
	width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 6rem;
    overflow: hidden;
    
    @media (max-width: 768px){
        padding-top: 4rem;
    }
`;

export const BoxDigitalEconomy = styled.div`
    position: relative;
    margin-bottom: 3rem;
	width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1200px){
        width: 90%;
    }

    @media (max-width: 768px){
        margin: 0;
        width: 90%;
        flex-direction: column;
    }
`;

export const TextDigitalEconomy = styled.div`
    padding-top: 2rem;
    width: 38%;

    @media (min-width: 2200px){
        width: 41%;
    }

    @media (max-width: 1440px){
        width: 34%;
    }

    @media (max-width: 1200px) {
        width: 40%;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const TitleBoxDigitalEconomy = styled.h2`
    width: 25rem;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.3;
    color: #FF611E;

    @media (min-width: 2200px){
        width: 100%;
        font-size: 3.8rem;
    }

    @media (max-width: 1200px){
        width: 22rem;    
        font-size: 1.8em;
    }

    @media (max-width: 1024px) {
        width: 88%;
    }
`;

export const DescriptionBoxDigitalEconomy = styled.p`
    margin-top: 1rem;
	width: 100%;
    font-size: 1.3rem;
    line-height: 1.6;

    @media (min-width: 2200px){
        font-size: 2rem;
        font-weight: 300;
    }

    @media (max-width: 1440px) {
        margin-top: 0.5rem;
        font-size: 1em;
    }

    @media (max-width: 768px){
        margin-top: 1rem;
        width: 90%;
        font: 300 1rem 'Usual',sans-serif;
        line-height: 1.6;
        font-weight: 400;
    }
`;

export const BoxImageDigitalEconomy = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    z-index: 2;

    @media (min-width: 2200px) {
        width: 58%;
    }

    @media (max-width: 768px){
        position: static;
        margin-top: 5rem;
        width: 100%;
    }

    @media (max-width: 480px) {
        margin-top: 3rem;
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
        transform: scale(1.3);
    }
`;

export const BoxDigitalEconomyInformations = styled.div`
    width: 80%;

    @media (max-width: 1200px){
        width: 90%;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const BoxOrange = styled.div`
    padding: 2rem 5rem;
    width: 58rem;
    height: 30rem;
    background: #ffdfd2;
    border-radius: 20px;

    @media (min-width: 2200px){
        width: 65rem;
        height: 39rem;
    }

    @media (max-width: 1440px) {
        width: 52rem;
        height: 28rem;
    }

    @media (max-width: 1200px){
        width: 43rem;
    }

    @media (max-width: 768px){
        padding: 4rem 3rem;
        width: 100%;
        height: 100%;
        border-radius: 0 0 20px 20px;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const BoxImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    height: 100%;

    @media (max-width: 768px){
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
    }
`;

export const BoxImageInformation = styled.figure`
    margin-top: 1rem;
    width: 50%;

    @media (max-width: 768px){
        width: 70%;
        display: flex;
        justify-content: center;
        margin-bottom: 5rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin-bottom: 3rem;
    }
`;

export const ImageInformation = styled.img`
   width: 100%;
`;
