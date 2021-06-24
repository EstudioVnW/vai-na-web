import styled from 'styled-components';

export const Contato = styled.main`
`;

export const ContatoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2vw 7.5vw;

    @media (max-width: 1024px) {
        padding: 2vw 6vw;
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const FormContainer = styled.div`
    width: 80%;

    @media (max-width: 700px) {
        width: auto;
    }
`;

export const FormTitle = styled.h1`
    font: 800 2.5em sans-serif;
    color: #00145d;

    @media (max-width: 700px) {
        font-size: 2em;
        margin: 0.3rem 0;
    }
`;

export const FormText = styled.p`
    margin-top: 1.5rem;
    width: 80%;
    font: 300 1.4em sans-serif;
    line-height: 1.4;

    @media (max-width: 700px) {
        margin: 0 0 1.5rem;
        width: auto;
        font-size: 1.2em;
    }

    @media (max-width: 490px) {
        font-size: 0.95em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 84%;

    @media (max-width: 1024px) {
        width: 90%;
    }
    
    @media (max-width: 700px) {
        width: auto;
    }
    
`;

export const FormLabel = styled.label`
    margin-top: 2rem;
    padding: 7px 14px;
    font: 600 1.4em sans-serif;
    color: #00145d;
    border-radius: 10px;
    background: #e7e9f4;

    @media (max-width: 700px) {
            margin: 0 0 1rem;
            font-size: 1.2em;
    }
    
    @media (max-width: 490px) {
            font-size: 1em;
    }
`;

export const FormLabelMsg = styled(FormLabel)`
    height: 50vh;
`;

export const FormInput = styled.input`
    margin-left: 0.5rem;
    width: 80%;
    font: 300 1em sans-serif;
    color: #00145d;
    border: none;
    outline: none;
    background: #e7e9f4;
`;

export const MsgInput = styled.textarea`
    margin: 1rem 0;
    width: 100%;
    height: 85%;
    font: 300 1em sans-serif;
    color: #00145d;
    background: #e7e9f4;
    border: none;
    outline: none;
    resize: none;
`;

export const FormBtn = styled.div`
    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
    }
`;

export const Btn = styled.button`
    margin-top: 2.4rem;
    padding: 1rem 0 0.8rem;
    width: 8.8rem;
    font: 300 1.5em sans-serif;
    color: #fed5b2;
    border-radius: 30px;
    box-shadow: 0 0 10px #aaa;
    border: none;
    background: #0f2b92;

    @media (max-width: 700px) {
        width: 6.6rem;
        padding: 0.8rem 0 0.6rem;
        font-size: 1em;
    }
    
`;

export const Sidebar = styled.aside`
    margin-top: 2rem;
    width: 54%;

    @media (max-width: 700px) {
        width: 50%;
    }

    @media (max-width: 700px) {
        width: 95%;
    }
`;

export const SideBox = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;
`;

export const SideIcon = styled.img`
    width: 3rem;

    @media (max-width: 1024px) {
        width: 2rem;
    }
`;

export const SideInfo = styled.div`
    margin: 0 1.5rem;
`;

export const SideTitle = styled.h3`
    font: 800 1.4em sans-serif;
    color: #00145d;

    @media (max-width: 700px) {
        font-size: 1.1em;
    }
`;

export const SideText = styled.p`
    font: 300 1.4em sans-serif;

    @media (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media (max-width: 700px) {
        font-size: 1.1em;
    }
`; 