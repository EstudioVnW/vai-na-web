import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 7rem;
    background: #ffe9e0;  

    @media (max-width: 800px) {
        padding: 7rem 4rem 2.5rem;
    }
`;

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 15vh;

    @media (max-width: 490px) {
        min-height: 30vh;
     }
`;

export const HeaderTitle = styled.h1`
    position: relative;
    font: 800 3.1em 'Usual', sans-serif;
    color: #00145d;
    
    @media (max-width: 490px) {
        font-size: 2.55em;
        line-height: 1;
    }
`;

export const TitleBar = styled.span`
    position: absolute;
    top: 2%;
    left: -4rem;
    font: 300 1.2em 'Usual', sans-serif;
    color: #ff611e;
    
    @media (max-width: 490px) {
        top: -4%;
        left: -2.5rem;
    }
`;

export const HeaderText = styled.p`
    font: 400 1.9em 'Usual', sans-serif;

    @media (max-width: 490px) {
        font-size: 1.45em;
    }
`;
