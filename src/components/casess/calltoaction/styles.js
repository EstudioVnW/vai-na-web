import styled from 'styled-components';

export const CallContainer = styled.section`
    padding: 5rem 8rem;

    @media (max-width: 1200px) {
        padding: 5rem;
    }

    @media (max-width: 800px) {
        padding: 5rem 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3rem 1.5rem 3rem 0;
    border-top: 4px solid #ff611e;

    @media (max-width: 1200px) {
        padding: 3rem 0;
    }
    
     @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 0;
        text-align: center;
    }
`;

export const TitleBox = styled.div`
    font: 300 1.6em sans-serif;
    line-height: 1.5;

    @media (max-width: 960px) {
        font-size: 1.4em;
    }

    @media (max-width: 680px) {
        font-size: 0.8em;
    }
`;

export const Title = styled.h2`
    font-weight: 800;
`;

export const SubTitle = styled.h3`
    font-weight: 300;
`;

export const TextBox = styled.div`
    padding: 1rem 0;
    width: 34vw;
    font: 300 1.4em sans-serif;

    @media (max-width: 960px) {
        width: 65vw;
        font-size: 1.2em;
    }

    @media (max-width: 680px) {
        width: 72vw;
        font-size: 0.8em;
    }
`;

export const Text = styled.p``;