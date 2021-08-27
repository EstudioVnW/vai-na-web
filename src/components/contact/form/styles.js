import styled, { css, keyframes } from 'styled-components';

export const LoadingAnimation = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

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
    font-weight: 400;
    line-height: 1.5rem;

    @media (max-width: 768px) {
        margin: 0 0 1.5rem;
        width: auto;
        font-size: 1.3rem;
    }
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
    color: ${(props) => (props.isError ? '#FF611E' : '#00145d')};
    border-radius: 10px;
    background: ${(props) => (props.isError ? '#FF611E26' : '#e7e9f4')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${(props) => (props.isError ? '1px solid #FF611E' : props.selected ? '1px solid #00145D' : 'none')};

    @media (max-width: 768px) {
        margin: 0 0 1rem;
        font-size: 1.2em;
    }
    
    @media (max-width: 490px) {
        font-size: 1em;
    }
`;

export const BtnLimpar = styled.span`
    font-weight: 400;
    font-size: 0.8rem;
`;

export const BtnLimparMsg = styled.span`
    font-weight: 400;
    font-size: 0.8rem;
    margin-left: 60%;
    margin-top: 2%;
`;

export const ErroInput = styled.span`
    font-weight: 400;
    font-size: 0.8rem;
    white-space: nowrap;
`;

export const FormLabelMsg = styled(FormLabel)`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;

export const FormInput = styled.input`
    margin: 0 0.5rem;
    width: 100%;
    font: 300 1em sans-serif;
    color: #00145d;
    border: none;
    outline: none; 
    background: ${(props) => (props.isError ? '#e7e9f4' : '#ff611e00')};

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const MsgInput = styled.textarea`
    margin: 1rem 0;
    width: 100%;
    height: 35vh;
    font: 300 1.3rem sans-serif;
    color: #00145d;
    background: ${(props) => (props.isError ? '#e7e9f4' : '#ff611e00')};
    border: none;
    outline: none;
    resize: none;
`;

export const MessageFalha = styled.span`
    padding: 1rem 1.875rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #FDE7A9;
    text-align: center;
    border-radius: 60px;
    box-shadow: 0px 0px 20px #0F2B9240;
    border: 2px solid #FF611E;
    background:  #FF611E;
    transition: border 0.15s ease-out, height 0.18s ease-in, color 0.15s ease;
    white-space: nowrap;
    
    @media (min-width: 2560px) {
        font-size: 1.5rem;
        padding: 1.5rem 1.875rem;
    }
`;

export const ButtonReload = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1.375rem 0 0.75rem;
    border: 2px solid #FFAC2D;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFAC2D;

    img{
        width: 70%;
    }

    @media (min-width: 2560px) {
        width: 5rem;
        height: 5rem;
    }

    @media (min-width: 1024px) {
        margin: 0 1rem 0 0.75rem;
    }
`;

export const TextError = styled.p`
    width: 50%;
    font-size: 0.8rem;
    color: #272727;
    font-weight: 600;
    
    @media (max-width: 2560px) {
        font-size: 0.9rem;
        width: 60%;
    }

    @media (max-width: 1024px) {
        width: 34%;
        font-size: 0.6rem;
    }

    @media (max-width: 425px) {
        width: 100%;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`;

export const FormBtn = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    @media (max-width: 425px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;

export const BtnError = styled.button`
    padding: 1rem 1.5rem;
    font-weight: 300;
    font-size: 1.5rem;
    color: #FDE7A9;
    border-radius: 30px;
    box-shadow: 0 0 10px #aaa;
    border: none;
    outline: none;
    background: #FF611E;

    @media (max-width: 768px) {
        font-size: 1em;
    }
    
`;

export const Btn = styled.button`
    /* margin-top: 2.4rem; */
    padding: 1rem 0 0.8rem;
    width: 8.8rem;
    font-weight: 300;
    font-size: 1.5rem;
    color: ${(props) => (props.isError ? '#FDE7A9' : '#FED5B2')};
    border-radius: 30px;
    box-shadow: 0 0 10px #aaa;
    border: none;
    outline: none;

    ${({ isLoading }) => isLoading && css`
        border: 1px solid #00145D;
        background: repeating-linear-gradient(to right, #0F2B9277, #0F2B9277, #00145D);
        background-size: 200% auto;
        background-position: 0 100%;
        animation: ${LoadingAnimation} 1.5s infinite linear;
    `}

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
