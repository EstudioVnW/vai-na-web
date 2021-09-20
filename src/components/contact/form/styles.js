import styled, { css, keyframes } from 'styled-components';

export const LoadingAnimation = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

export const Contato = styled.main``;

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2vw 0;
    width: 80%;

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        width: 88%;
    }
`;

export const FormContainer = styled.div`
    width: 60%;

    @media (max-width: 768px) {
        margin-bottom: 4rem;
        width: auto;
    }
`;

export const FormTitle = styled.h1`
    font-weight: 900;
    font-size: 2rem;
    color: #00145d;

    @media (min-width: 2200px) {
        font-size: 4rem;
    }

    @media (max-width: 768px) {
        font-size: 1.8em;
        font-weight: 800;
        line-height: 1.6rem;
        margin: 0.3rem 0;
    }
`;

export const FormText = styled.p`
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
    width: 80%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;

    @media (min-width: 2200px) {
        margin: 2.2rem 0 3rem;
        font-size: 2rem;
        line-height: 1.4;
    }

    @media (max-width: 768px) {
        width: auto;
        font-size: .9rem;
    }

    @media (max-width: 480px) {
        margin-top: .6rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 85%;

    @media (max-width: 1024px) {
        width: 90%;
    }
    
    @media (max-width: 768px) {
        width: auto;
    }
`;

export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 7px 14px;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => (props.isError ? '#FF611E' : '#00145d')};
    border-radius: 10px;
    background: ${(props) => (props.isError ? '#FF611E26' : '#e7e9f4')};
    border: ${(props) => (props.isError ? '1px solid #FF611E' : props.selected ? '1px solid #00145D' : 'none')};
    
    @media (min-width: 2200px) {
        margin-top: 3rem;
        padding: 1rem 1.5rem;
        font-size: 2rem;
        border-radius: 20px;
    }

    @media (max-width: 480px) {
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
    margin-top: 3px;
`;

export const ErroInput = styled.span`
    font-weight: 400;
    font-size: 0.8rem;
    white-space: nowrap;

    @media (min-width: 2200px) {
        font-size: 1.7rem;
    }
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
    height: 40vh;
    font: 300 1rem sans-serif;
    color: #00145d;
    background: ${(props) => (props.isError ? '#e7e9f4' : '#ff611e00')};
    border: none;
    outline: none;
    resize: none;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px grey;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #0F2B92;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #0f2b92e0;
    }
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
    background: #FF611E;
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

    @media (min-width: 2200px) {
        width: 60%;
        font-size: 1.8rem;
    }
    
    @media (max-width: 2200px) {
        font-size: 0.9rem;
        width: 60%;
    }

    @media (max-width: 480px) {
        width: 100%;
        font-size: 0.8rem;
        margin-top: 0.5rem;
    }
`;

export const FormBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;

export const BtnError = styled.button`
    margin: 0 1rem 1rem 0;
    padding: 1rem 1.5rem .9rem;
    font-weight: 300;
    font-size: 1.2rem;
    color: #FDE7A9;
    border-radius: 30px;
    box-shadow: 0 0 10px #aaa;
    background: #FF611E;
    border: none;
    outline: none;
    cursor: pointer;

    @media (min-width: 2200px) {
        padding: 1.7rem 0 1.5rem;
        width: 20rem;
        font-size: 2.2rem;
        border-radius: 45px;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

export const Btn = styled.button`
    padding: 1rem 0 0.8rem;
    width: 8.8rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => (props.isError ? '#FDE7A9' : '#FED5B2')};
    border-radius: 30px;
    box-shadow: 0 0 10px #aaa;
    background: #0F2B92;
    border: none;
    outline: none;
    cursor: pointer;

    ${({ isLoading }) => isLoading && css`
        border: 1px solid #00145D;
        background: repeating-linear-gradient(to right, #0F2B9277, #0F2B9277, #00145D);
        background-size: 200% auto;
        background-position: 0 100%;
        animation: ${LoadingAnimation} 1.5s infinite linear;
    `}

    @media (min-width: 2200px) {
        padding: 1.7rem 0 1.5rem;
        width: 14rem;
        font-size: 2.2rem;
        border-radius: 45px;
    }

    @media (max-width: 768px) {
        width: 6.6rem;
        padding: 0.8rem 0 0.6rem;
        font-size: 1em;
    }
`;

export const Sidebar = styled.aside`
    width: 40%;

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
    justify-content: space-between;
    margin-bottom: 3rem;

    &:nth-child(2) img {
        width: 3rem;
    }

    @media (min-width: 2200px) {
        margin-bottom: 5rem;
        
        &:nth-child(2) img {
            width: 5rem;
        }
    }    
`;

export const SideIcon = styled.img`
    width: 2.4rem;
    
    @media (min-width: 2200px) {
        width: 5rem;
    }

    @media (max-width: 1024px) {
        width: 2rem;
    }
`;

export const SideInfo = styled.div`
    width: 84%;

    @media (max-width: 1200px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        margin: 0;
    }
`;

export const SideTitle = styled.h3`
    margin-bottom: .6rem;
    font-weight: 800;
    font-size: 1rem;
    color: #00145d;

    @media (min-width: 2200px) {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;

export const SideText = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 2200px) {
        font-size: 2rem;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`;
