import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 14rem 0 7rem 0;    
    background: #ffe9e0;  

    @media (max-width: 1024px) {
        padding: 14rem 2rem 7rem;
    }
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 12vh;
   
    @media (max-width: 490px) {
        min-height: auto;
     }
`;

export const HeaderTitle = styled.h1`
    position: relative;
    font: 800 2.72rem 'Usual', sans-serif;
    color: #00145d;
    
    @media (max-width: 1024px){
        margin-bottom: 2rem;
    }

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
    font: 400 1.6rem 'Usual', sans-serif;
    
    @media (max-width: 490px) {
        font-size: 1.45em;
    }
`;
