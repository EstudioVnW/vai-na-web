import styled from 'styled-components';

export const Hheader = styled.header``;

export const HeaderContainer = styled.section`
    padding: 4vw 5.95vw;

    @media (max-width: 1024px) {
        padding: 4vw 0;
    }
`;

export const HeaderImg = styled.img`
    width: 100%;

    @media (max-width: 490px) {
        display: none;
    }
`;

export const HeaderImgMobile = styled.img`
    display: none;
    width: 100%;

    @media (max-width: 490px) {
        display: block;
    }
`;