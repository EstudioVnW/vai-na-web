import styled from 'styled-components';




export const Contato = styled.main`

`;

export const ContatoContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 2vw 9vw;
    width: 90%;

    @media (max-width: 1024px) {
        padding: 2vw 4vw;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FormContainer = styled.div`
    width: 80%;

    @media (max-width: 768px) {
        width: auto;
    }
`;

export const FormTitle = styled.h1`
    font-weight: 900;
    font-size: 2rem;
    color: #00145d;

    @media (max-width: 768px) {
        font-size: 2em;
        font-weight: 800;
        line-height: 1.6rem;
        margin: 0.3rem 0;
    }
`;

export const FormText = styled.p`
    margin-top: 1.5rem;
    width: 80%;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5rem;

    @media (max-width: 768px) {
        margin: 0 0 1.5rem;
        width: auto;
        font-size: 1.3rem;
    }

    /* @media (max-width: 490px) {
        font-size: 0.95em;
    } */
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 84%;    

    @media (max-width: 1024px) {
        width: 90%;
    }
    
    @media (max-width: 768px) {
        width: auto;
    }
    
`;

export const FormLabel = styled.label`
    margin-top: 2rem;
    padding: 7px 14px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #00145d;
    border-radius: 10px;
    background: #e7e9f4;

    input:invalid {
        background-color: #ffdddd;
    }

    input:invalid {
        border: 5px solid #ffdddd;
    }

    @media (max-width: 768px) {
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
    font: 300 1.3rem sans-serif;
    color: #00145d;
    background: #e7e9f4;
    border: none;
    outline: none;
    resize: none;
`;

export const FormBtn = styled.div`
    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        width: 6.6rem;
        padding: 0.8rem 0 0.6rem;
        font-size: 1em;
    }
    
`;

export const Sidebar = styled.aside`
    margin-top: 2rem;
    width: 60%;

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 768px) {
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
    font-weight: 800;
    font-size: 1.3rem;
    color: #00145d;

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;

export const SideText = styled.p`
    width: 100%;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`; 