import styled from 'styled-components';

export const CasesContainer = styled.main`
    margin-top: 6rem;
    
    @media (max-width: 480px) {
        margin: 0;
    }
`;

export const Wrap = styled.div`
    width: 90%;
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 95%;
    }
    
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Case = styled.section`
    position: relative;
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    :not(:first-child) {
        :after {
            content: '';
            position: absolute;
            top: -1%;
            display: none;
            left: 5%;
            width: 90%;
            height: 4px;
            background: #fed5b2;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        margin-bottom: 6rem;

        :not(:first-child) {
            :after {
                display: block;
            }
        }
    }
`;

export const Reverse = styled(Case)`
    flex-direction: row-reverse;
    justify-content: space-between;
    
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        padding-right: 0;
    }
`;

export const InfoBox = styled.div`
    margin: 0 5%;
    width: 50%;

    @media (max-width: 1200px) {
        margin: 0 3%;
        width: 44%;
    }

    @media (max-width: 1024px) {
        width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 480px) {
        width: 88%;
    }
`;

export const CaseTitle = styled.h2`
    margin-bottom: 1rem;
    width: 80%;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.2;
    color: #0f2b92;

    @media (min-width: 2200px) {
        font-size: 3.8rem;
    }

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 1.9rem;
    }
`;

export const CaseText = styled.p`
    margin-top: 10px;
    font: 400 1.1em 'Usual',sans-serif;
    line-height: 1.6;

    @media (min-width: 2200px) {
        font-size: 2rem;
    }

    @media (max-width: 1440px) {
        font-size: 1rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        margin-top: 1.2rem;
        font-size: 0.9rem;
    }
`;

export const Hashtag = styled.p`
    margin: 1.5rem 0 2rem;
    font: 600 1.1rem 'Usual', sans-serif;
    color: #ff611e;

    @media (min-width: 2200px) {
        margin: 2.5rem 0 3rem;
        font-size: 2rem;
    }

    @media (max-width: 1440px) {
        font-size: 1rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        line-height: 1.5;
    }
`;

export const TopClient = styled.div`
    display: flex;
    justify-content: space-between;
    width: 87%;
    
    @media (min-width: 2200px) {
        width: 95%;
    }

    @media (max-width: 1200px) {
        width: 95%;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 85%;
    }

    div {
        margin-right: 1rem;
    }

    figure {
        margin-top: 0.6rem;
    }
`;

export const Client = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const ClientBox = styled.div`
    margin-right: 2rem;
    width: 100%;
`;

export const RightClient = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22rem;

    @media (min-width: 2200px) {
        width: 60%;
    }

    @media (max-width: 1024px) {
        width: 60%;
    }

    @media (max-width: 480px) {  
        width: 80%;
    }
`;

export const RightClientBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;

    @media (min-width: 2200px) {
        width: 100%;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 768px) {
        figure {
            margin-top: 1rem;
        }
    }

    img {
        width: 100%;
    }
`;

export const ClientText = styled.p`
    display: flex;
    flex-direction: column;
    font: 600 1rem 'Usual', sans-serif;
    letter-spacing: 1px;
    color: #0f2b92;
    text-transform: uppercase;

    span{
        margin-top: 0.8rem;
        font: 400 1.2em 'Usual', sans-serif;
        color: #000;
    }

    @media (min-width: 2200px) {
        font-size: 1.8rem;
        span {
            font-size: 2rem;
        }
    }

    @media (max-width: 1440px) {
        font-size: 0.8rem;
        span {
            font-size: 1rem;
        }
    }

    @media (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const Date = styled.div`
    @media (max-width: 1024px) {
        width: 30%;
    }

    @media (max-width: 480px) { 
        font-size: 0.8em;
    }
`;

export const LogoBox = styled.figure`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1024px) {
        margin-top: 10px;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        margin: 0;
     }
`;

export const TopCaseLogo = styled.img`
    width: 50%;

    @media (max-width: 480px) {
        margin-bottom: 10px;
        width: 90%;
    }
`;

export const CaseLogo = styled.img`
    width: 90%;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ImgBox = styled.figure`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
    width: 62%;

    @media (max-width: 1024px) {
        margin: 5rem 0 3rem;
        width: 100%;
    }

    @media (max-width: 480px) {
        margin: 2rem 0;
    }
`;

export const Link = styled.a``;

export const CaseImg = styled.img`
    width: 100%;
`;

export const ImageSmartphone = styled.img`
    width: 20%;
    left: 80%;
    top: 15%;
    position: absolute;

    @media (min-width: 2200px) {
        top: 12%;
    }
`;

export const MobileImg = styled.img`
    display: none;
    
    @media (max-width: 1024px) {
        display: block;
        width: 100%;
    }
`;

export const DesktopImg = styled.img`
    @media (max-width: 1024px) {
        display: none;
    }
`;
