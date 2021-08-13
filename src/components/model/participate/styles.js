import styled from 'styled-components';

export const Participate = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
  
    @media (max-width: 1024px) {
        min-height: 40vh;
    }
`;

export const BoxParticipate = styled.div`
    width: 80%;
    border-top: 4px solid #FF611E;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const BoxTitle = styled.div`
    width: 40%;

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;
export const TitleButton = styled.h1`
    font: 800 2rem 'Usual', sans-serif;
    color: #272727;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;
export const SubtitleButton = styled.h3`
    font: 400 1.5rem 'Usual', sans-serif;
    color: #272727;
    padding-top: 0.8rem;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
export const BoxButton = styled.div`
    width: 17rem;
    height: 5rem;
    padding-top: 3rem;

    @media (max-width: 1024px) {
        padding-top: 1rem;
    }
`;

export const BoxDecription = styled.div`
    width: 55%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;
export const Description = styled.p`
    font: 300 1.3rem 'Usual', sans-serif;
    line-height: 1.4;

    @media (max-width: 1440px) {
        font-size: 1rem;
    }
    @media (max-width: 1024px) {
        text-align: center;
    }
    @media (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 1.3rem;
        margin-top: 1rem;
    }
`;