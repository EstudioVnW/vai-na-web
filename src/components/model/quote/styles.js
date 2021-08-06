import styled from 'styled-components';

export const QuoteContainer = styled.section`
    padding: 2rem 0;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
`;

export const Profile = styled.img`
    width: 18rem;

    @media (max-width: 1440px) {
        width: 16rem;
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
`;

export const Text = styled.p`
    padding-left: 2rem;
    font: 500 1.4em 'Usual', sans-serif;
    line-height: 1.5;
    color: #00145D;

    @media (max-width: 1440px) {
        font-size: 1.2em;
    }
`;

export const BottomLine = styled.img`
    margin: 0 auto;
    width: 80%;
`;

export const QuoteMark = styled.p`
    height: 1.4rem;
    font: 800 3em 'Usual', sans-serif;
    color: #FFAC2D;
`;

export const BottomQuoteMark = styled.p`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font: 800 3em 'Usual', sans-serif;
    color: #FFAC2D;
`;