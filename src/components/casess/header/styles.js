import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 14rem 0 7rem 0;    
    background: #ffe9e0;  

    @media (min-width: 2200px) {
        padding: 18rem 0 10rem 0;
    }

    @media (max-width: 1024px) {
        padding: 14rem 2rem 7rem;
    }

    @media (max-width: 480px) {
        padding: 8rem 0 3rem;
    }
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;

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
    margin-bottom: 1rem;
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
    top: 2%;
    left: -4rem;
    font: 300 1.2em 'Usual', sans-serif;
    color: #ff611e;
    
    @media (min-width: 2200px) {
        left: -4%;
        font-size: 4rem;
    }

    @media (max-width: 480px) {
        top: -4%;
        left: -20%;
    }
`;

export const HeaderText = styled.p`
    font: 400 1.6rem 'Usual', sans-serif;
    
    @media (min-width: 2200px) {
        font-size: 2.2rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.3em;
    }
`;
