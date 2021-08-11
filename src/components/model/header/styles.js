import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 2.5rem 0;
    height: 26rem;
    background: linear-gradient(
        90deg, 
        #FED5B2 0%, #FED5B2 80%, 
        transparent 80%, transparent 100%);

    @media (min-width: 2200px) {
        height: 30rem;
    }
    @media (max-width: 1440px) { 
        height: 23rem;
    }
    @media (max-width: 768px) {
        padding: 10rem 0 2rem;
        height: 100vh;
        background: linear-gradient(
            #FED5B2 0%, #FED5B2 60%,
            transparent 60%, transparent 100%);
    }
    @media (max-width: 480px) {
        padding-top: 9rem;
    }
`;

export const Wrap = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    width: 80%;
    height: 100%;

    @media (max-width: 768px) {
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`;

export const Header = styled.section`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 68%;
    }
    @media (max-width: 480px) {
        margin: 0 auto;
        width: 64%;
    }
`;

export const HeaderTitle = styled.h1`
    position: relative;
    margin-bottom: 4px;
    font: 800 2.72rem 'Usual', sans-serif;
    color: #00145d;
    
    @media (min-width: 2200px) {
        font-size: 4rem;
    }
    @media (max-width: 768px) {
        margin-bottom: 0.4rem;
    }
    @media (max-width: 480px) {
        font-size: 2.4em;
        line-height: 1.1;
    }
`;

export const TitleBar = styled.span`
    position: absolute;
    top: 0;
    left: -18%;
    font: 300 1em 'Usual',sans-serif;
    color: #ff611e;
    
    @media (min-width: 2200px) {
        font-size: 4rem;
    }
    @media (max-width: 768px) {  
        left: -12%;
    }
    @media (max-width: 480px) {
        top: -4%;
        left: -16%;
    }
`;

export const HeaderText = styled.p`
    font: 400 1.5rem 'Usual', sans-serif;
    
    @media (min-width: 2200px) {
        font-size: 2.2rem;
    }
    @media (max-width: 480px) {
        font-size: 1em;
    }
`;

export const HeaderImage = styled.img`
    position: absolute;
    top: 28%;
    right: 0;
    width: 70%;

    @media (min-width: 1700px) {  
        width: 60rem;
    }
    @media (min-width: 2200px) {  
        width: 90rem;
    }
    @media (max-width: 1024px) {
        top: 50%;
        right: -6%;
        width: 66%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeaderImageMobile = styled.img`
    position: absolute;
    display: none;
    width: 100%;

    @media (max-width: 768px) {
        display: block;
        top: 15%;
    }
    @media (max-width: 480px) { 
        top: 17%;
    }
`;

export const DownArrow = styled.img`
    display: none;
    width: 1.5rem;
    
    @media (max-width: 768px) {
        display: block;
    }
    @media (max-width: 480px) {
        width: 1rem;
    }
`;