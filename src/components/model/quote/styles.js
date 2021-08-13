import styled from 'styled-components';

export const QuoteContainer = styled.section`
    padding: 2rem 0;

    @media (min-width: 2200px) {
        padding: 8rem 0 4rem;
    }
    @media (max-width: 768px) {
        padding-bottom: 0;
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    width: 80%;

    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        width: 88%;
    }
`;

export const Profile = styled.img`
    width: 18rem;

    @media (min-width: 2200px) {
        width: 26rem;
    }
    @media (max-width: 1440px) {
        width: 16rem;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 68%;
    
    @media (max-width: 1440px) {
        width: 66%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Text = styled.p`
    padding-left: 2rem;
    font: 500 1.4em 'Usual', sans-serif;
    line-height: 1.5;
    color: #00145D;

    @media (min-width: 2200px) {
        padding-left: 3rem;
        font-size: 2.3em;
    }
    @media (max-width: 1440px) {
        font-size: 1.2em;
    }
    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
        padding-left: 0;
        text-align: center;
        font-size: 1.05em;
    }
`;

export const QuoteLine = styled.img`
    margin: 0 auto;
    width: 80%;

    @media (max-width: 1024px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const QuoteLineMobile = styled.img`
    display: none;
    margin: 0 auto;
    width: 80%;
    
    @media (max-width: 768px) {
        display: block;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const QuoteMark = styled.p`
    height: 1.4rem;
    font: 800 3em 'Usual', sans-serif;
    color: #FFAC2D;
    
    @media (min-width: 2200px) {
        height: 2.2rem;
        font-size: 6em;
    }
    @media (max-width: 768px) {
        height: 2.5rem;
        font-size: 2.6em;
    }
`;

export const BottomQuoteMark = styled.p`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font: 800 3em 'Usual', sans-serif;
    color: #FFAC2D;

    @media (min-width: 2200px) {
        height: 5rem;
        font-size: 6em;
    }
    @media (max-width: 768px) {
        height: 0;
        font-size: 2.6em;
    }
`;