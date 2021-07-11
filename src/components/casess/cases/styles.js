import styled from 'styled-components';

export const CasesContainer = styled.main`
    margin-top: 7vw;
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Case = styled.section`
    position: relative;
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    :after{
        content: '';
        position: absolute;
        top: -1%;
        display: none;
        left: 5%;
        width: 90%;
        height: 4px;
        background: #fed5b2;
    }

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        margin-bottom: 1rem;
        
        :after {
            display: block;
        }
    }
`;

export const Reverse = styled(Case)`
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-right: 3rem;
    
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        padding-right: 0;
    }
`;

export const InfoBox = styled.div`
    margin-top: 3rem;
    width: 38vw;

    @media (max-width: 1000px) {
        width: 80%;
        margin: 0 auto;
    }
`;

export const CaseTitle = styled.h2`
    width: 70%;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.2;
    color: #0f2b92;

    @media (max-width: 1617px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        font-size: 1.7rem;
    }
`;

export const CaseText = styled.p`
    margin-top: 0.8rem;
    font: 300 1.3rem 'Usual', sans-serif;
    line-height: 1.6;

    @media (max-width: 1200px) {
        margin-top: 1.2rem;
        font-size: 1.2em;
    }
    
    @media (max-width: 500px) {
        font-size: 1.05em;
    }
`;

export const Hashtag = styled.p`
    margin: 1.5rem 0 2.5rem;
    font: 600 1.2rem 'Usual', sans-serif;
    color: #ff611e;

    @media (max-width: 1200px) {
        font-size: 1rem;
    }

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const Client = styled.div`
    display: flex;
    justify-content: space-between;
    width: 32vw;
    
    @media (max-width: 1000px) {
        width: 80vw;
    }
`;

export const ClientBox = styled.div``;

export const ClientText = styled.p`
    display: flex;
    flex-direction: column;
    font: 600 1rem 'Usual', sans-serif;
    color: #0f2b92;
    text-transform: uppercase;

    span{
        margin-top: 0.6rem;
        font: 300 1.2em 'Usual', sans-serif;
        color: #000;00
    }

    @media (max-width: 500px) {
        font-size: 1em;
    }
`;

export const Date = styled.div`
    @media (max-width: 1000px) {
        width: 50%;
    }
`;

export const LogoBox = styled.figure`
    margin-top: 0.6rem;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
     }
`;

export const CaseLogo = styled.img`
    width: 49%;

    @media (max-width: 500px) {
        width: 70%;
    }
`;

export const ImgBox = styled.figure`
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const CaseImg = styled.img`
    width: 100%;
`;

export const MobileImg = styled.img`
    display: none;
    
    @media (max-width: 1000px) {
        display: block;
        width: 100%;
    }
`;

export const DesktopImg =  styled.img`
    @media (max-width: 1000px) {
        display: none;
    }
`;