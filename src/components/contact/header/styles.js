import styled from 'styled-components';

export const Hheader = styled.header``;

export const HeaderContainer = styled.section`
    margin: 0 auto;
    padding: calc(4vw + 6rem) 0 /*5.95vw*/ 1.5vw;
    width: 83%;
    
    @media (max-width: 1200px) {
        width: 93%;
    }
    
    @media (max-width: 480px) {
        padding-bottom: 0;
        width: 100%;
    }
`;

export const HeaderImg = styled.img`
    width: 100%;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const HeaderImgMobile = styled.img`
    display: none;
    width: 100%;
    transform: scale(1.05);

    @media (max-width: 480px) {
        display: block;
    }
`;
