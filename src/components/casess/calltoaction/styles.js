import styled from 'styled-components';

export const CallContainer = styled.section`
    @media (max-width: 1024px) {
        padding: 5rem 0 0;
    }

    @media (max-width: 480px) {
        padding: 0;
    }
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1024px){
        width: 90%;
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

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 0 0;
        text-align: center;
    }
`;

export const TitleBox = styled.div`
    font: 300 0.9rem 'Usual', sans-serif;
    line-height: 1.5;
    
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.4em;
    }

    @media (max-width: 680px) {
        font-size: 0.8em;
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 800;

    @media (min-width: 2200px) {
        font-size: 3.7rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        color: #272727;
    }
`;

export const SubTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 500;

    @media (min-width: 2200px) {
        font-size: 2.7rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    width: 18rem;
    height: 4rem;

    button {
        width: 100%;
        font-size: 1.5em;
        border-radius: 22px;
        transition: all 0.3s ease-out;

        @media (max-width: 1024px) {
            height: 3rem;
            font-size: 1em;
        }
    }

    @media (min-width: 2200px) {
        width: 28rem;
        height: 10rem;

        button {
            height: 6.8rem;
            font-size: 2.2rem;
            font-weight: 500;
            border-radius: 45px;
        }
    }

    @media (max-width: 680px) {
        margin-top: 0.5rem;
        width: 11.5rem;

        button {
            height: 2.7rem;
            font-size: 1.2em;
            font-weight: 500;
        }
    }
`;

export const TextBox = styled.div`
    padding: 1rem 0;
    width: 39%;

    strong {
        font-weight: 600;
    }

    @media (max-width: 1024px) {
        width: 65vw;
    }

    @media (max-width: 680px) {
        width: 100%;
    }
`;

export const Text = styled.p`
    font: 300 1.3rem 'Usual', sans-serif;
    line-height: 1.6;

    @media (min-width: 2200px) {
        font-size: 2rem;
        line-height: 1.4;
    }

    @media (max-width: 480px) {
        font-size: .8rem;
    }
`;
