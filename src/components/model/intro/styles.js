import styled from 'styled-components';

export const IntroContainer = styled.section`
    margin-top: 8rem;
    padding: 2rem 0;

    @media (min-width: 1700px) {
        margin-top: 12rem;
    }
    @media (min-width: 2200px) {
        margin-top: 24rem;
    }
    @media (max-width: 1024px) {
        margin-top: 4rem;
    }
    @media (max-width: 768px) {
        margin: 0;
        padding-bottom: 0;
    }
`;

export const Wrap = styled.div`
    margin: 0 auto 2rem;
    width: 80%;

    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 480px) {
        width: 88%;
    }
`;

export const TitleBox = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Title = styled.h3`
    width: 50%;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.3;
    color: #FF611E;

    @media (min-width: 2200px) {
        font-size: 3.8em;
    }
    @media (max-width: 1200px) {
        margin-right: 2rem;
    }
    @media (max-width: 768px) {
        margin: 0 0 2rem;
        width: 100%;
    }
    @media (max-width: 480px) {
        margin-bottom: 1rem;
        padding-right: 1rem;
        font-size: 1.8em;
    }
`;

export const Text = styled.p`
    padding-top: 8px;
    width: 50%;
    font: 400 1.3rem 'Usual', sans-serif;
    line-height: 1.6;

    @media (min-width: 2200px) {
        font-size: 2.1em;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.3em;
    }
    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`;

export const BoxRow = styled.div`
    position: relative;
    display: flex;
    margin: 5rem 0 2rem;

    @media (min-width: 2200px) {
        margin: 5rem 0 4rem;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 2.5rem 0 2rem;
        padding: 0 1.5rem;
    }
`;

export const TextBox = styled.div`
    padding: 2px 3rem 2px 10px;
    width: 22%;
    border-left: 2px solid #FF611E;

    &:last-child {
        position: absolute;
        right: -5%;
        margin-bottom: 0;
        padding-right: 0;
        width: 40%;
    }

    @media (min-width: 2200px) {
        padding: 0 1rem 10px 20px;
    }
    @media (max-width: 768px) {
        margin-bottom: 2rem;
        padding: 0 0.7rem 0.4rem;
        width: 100%;

        &:last-child {
            position: static;
            width: 100%;

            p:nth-child(2) {
                font-size: 0.93em;
            }
        }
    }
`;

export const RowNumber = styled.p`
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    text-transform: uppercase;
    font: 800 3em 'Usual', sans-serif;
    color: #222;

    span {
        margin-left: 10px;
        font-size: 0.52em;
        font-weight: 700;
        line-height: 1.6;
    }
    p {
        margin-left: 10px;
        font-size: 0.38em;
    }

    @media (min-width: 2200px) {
        font-size: 5em;
    }
    @media (max-width: 1440px) {
        font-size: 2.6em;

        p {
            font-size: 0.35em;
        }
    }
    @media (max-width: 1024px) {
        font-size: 2.2em;
    }
    @media (max-width: 768px) {
        display: initial;
        margin: 0;
        font-size: 3.1em;

        span {
            margin-left: 8px;
            font-size: 0.5em;
            font-weight: 600;
        }
        p {
            margin: 0;
            font-size: 0.3em;
        }
    }
`;

export const RowText = styled.p`
    font: 500 1.2em 'Usual', sans-serif;
    text-transform: uppercase;
    line-height: 1.6;
    color: #888;

    @media (min-width: 2200px) {
        font-size: 1.9em;
    }
    @media (max-width: 1440px) {
        font-size: 0.9em;
    }
    @media (max-width: 1024px) {
        font-size: 0.77em;
    }
    @media (max-width: 768px) {
        padding: 0 1rem 0 5px;
        font-size: 1.05em;
        line-height: 1.4;
        font-weight: 600;
    }
`;

export const SourceText = styled.p`
    font: 300 0.7em 'Usual', sans-serif;

    @media (min-width: 2200px) {
        font-size: 1.6em;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;