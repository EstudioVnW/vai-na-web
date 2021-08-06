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
    @media (max-width: 480px) {
        padding: 8rem 0 3rem;
    }
`;

export const Wrap = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    width: 80%;
    height: 100%;

    @media (max-width: 480px) {
        width: 65%;
    }
`;

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 480px) {
        min-height: auto;
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
    @media (max-width: 1024px) {
        margin-bottom: 2rem;
    }
    @media (max-width: 480px) {
        margin-bottom: 10px;
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
    @media (max-width: 480px) {
        top: -4%;
        left: -20%;
    }
`;

export const HeaderText = styled.p`
    font: 400 1.5rem 'Usual', sans-serif;
    
    @media (min-width: 2200px) {
        font-size: 2.2rem;
    }
    @media (max-width: 480px) {
        font-size: 1.3em;
    }
`;

export const HeaderImage = styled.img`
    position: absolute;
    top: 28%;
    right: 0;
    width: 70%;

    @media (max-width: 1024px) {
        top: 44%;
        width: 60%;
    }
`;