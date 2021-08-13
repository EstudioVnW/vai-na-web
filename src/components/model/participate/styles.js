import styled from 'styled-components';

export const Participate = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
  
    @media (min-width: 2200px) {
        padding: 0 0 5rem;
    }
    @media (max-width: 1024px) {
        min-height: 40vh;
    }
    @media (max-width: 480px) {
        padding: 0;
    }
`;

export const BoxParticipate = styled.div`
    width: 80%;
    border-top: 4px solid #FF611E;
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;

    @media (min-width: 2200px) {
        padding-top: 3rem;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const BoxTitle = styled.div`
    width: 40%;

    @media (min-width: 2200px) {
        width: 45%;
    }
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

    @media (min-width: 2200px) {
        font-size: 3.8em;
    }
    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const SubtitleButton = styled.h3`
    font: 400 1.5rem 'Usual', sans-serif;
    color: #272727;
    padding-top: 0.8rem;

    @media (min-width: 2200px) {
        font-size: 2.9em;
    }
    @media (max-width: 480px) {
        padding-top: 0.4rem;
        font-size: 1rem;
    }
`;

export const BoxButton = styled.div`
    width: 17rem;
    height: 6rem;
    padding-top: 2rem;

    button {
        width: 100%;
        height: 4rem;
        font-weight: 400;
        border-radius: 30px;
        transition: 0.2s;
    }

    &:hover button {
        height: 4rem;
        transform: translatey(-5px);
    }

    @media (min-width: 2200px) {
        width: 30rem;
        button {
            height: 7rem;
            font-size: 2.2em;
            border-radius: 50px;
        }
    }
    @media (max-width: 1024px) {
        width: 15rem;
        padding-top: 1rem;
        button {
            height: 3.5rem;
        }
    }
    @media (max-width: 768px) {
        width: 12rem;
        height: 5rem;
        button {
            height: 2.6rem;
            font-size: 0.9em;
        }   
    }
    @media (max-width: 480px) {
        width: 11rem;
    }
`;

export const BoxDecription = styled.div`
    padding-top: 0.8rem;
    width: 52%;

    @media (min-width: 2200px) {
        width: 55%;
    }
    @media (max-width: 1024px) {
        width: 95%;
    }
`;

export const Description = styled.p`
    font: 400 1.3em 'Usual', sans-serif;
    line-height: 1.6;

    @media (min-width: 2200px) {
        font-size: 2em;
    }
    @media (max-width: 1440px) {
        font-size: 1em;
    }
    @media (max-width: 1024px) {
        text-align: center;
    }
    @media (max-width: 480px) {
        margin-top: 0.5rem;
        font-size: 0.9em;
        font-weight: 400;
    }
`;