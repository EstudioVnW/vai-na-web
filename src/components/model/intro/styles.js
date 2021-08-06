import styled from 'styled-components';

export const IntroContainer = styled.section`
    margin-top: 8rem;
    padding: 2rem 0;
`;

export const Wrap = styled.div`
    margin: 0 auto 5rem;
    width: 80%;
`;

export const TitleBox = styled.div`
    display: flex;
`;

export const Title = styled.h3`
    width: 50%;
    font: 800 2rem 'Usual', sans-serif;
    line-height: 1.3;
    color: #FF611E;
`;

export const Text = styled.p`
    padding-top: 8px;
    width: 50%;
    font: 400 1.2rem 'Usual', sans-serif;
    line-height: 1.6;

    @media (max-width: 1440px) {
        font-size: 1rem;
    }
`;

export const BoxRow = styled.div`
    position: relative;
    display: flex;
    padding-top: 5rem;
`;

export const TextBox = styled.div`
    padding: 2px 3rem 2px 10px;
    width: 22%;
    border-left: 2px solid #FF611E;

    &:last-child {
        position: absolute;
        right: -7%;
        padding-right: 0;
        width: 41%;
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
        font-size: 0.4em;
    }

    @media (max-width: 1440px) {
        font-size: 2.6em;

        p {
            font-size: 0.35em;
        }
    }
`;

export const RowText = styled.p`
    font: 500 1.2em 'Usual', sans-serif;
    text-transform: uppercase;
    line-height: 1.6;
    color: #888;

    @media (max-width: 1440px) {
        font-size: 0.9em;
    }
`;

export const FontText = styled.p`
    padding-top: 2rem;
    font: 300 0.7em 'Usual', sans-serif;
`;