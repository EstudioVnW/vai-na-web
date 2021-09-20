import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Wrap = styled.div`
    width: 80%;
    min-height: calc(100vh - 6rem);
    margin: 6rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1900px) {
        margin-top: 8rem;
        min-height: calc(100vh - 8rem);
    }

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 1024px) {
        margin-top: 10rem;
        padding-bottom: 6rem;
        min-height: calc(50vh - 8rem);
    }

    @media (max-width: 768px){
        align-items: center;
        margin-top: 4rem;
        padding: 0;
        width: 90%;
        min-height: calc(100vh - 6rem);
    }
`;

export const BoxHeader = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

export const BoxInfo = styled.div`
    width:50%;
    height: 100%;

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const BoxTitle = styled.div`
    position: relative;
    display: flex;
    width: 100%;

    @media (max-width: 768px){
        margin-bottom: 2rem;
    }
`;

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    font: 800 2.7rem 'Usual', sans-serif;
    color: #FF611E;

    @media (min-width: 2200px) {
        width: 100%;
        font-size: 4rem;
    }

    @media (max-width: 1440px) {
        font-size: 2rem;
    }

    @media (max-width: 500px) {
        width: 90%;
        font-size: 1.6rem;
    }
`;

export const TitleBar = styled.span`
    position: absolute;
    left: -3rem;
    font: 300 2.72rem 'Usual', sans-serif;
    color: #0F2B92;

    @media (min-width: 2200px) {
        left: -10%;
        font-size: 4rem;
    }

    @media (max-width: 1440px) {
        left: -2rem;
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        position: relative;
        left: 0;
        margin-right: .5rem;
    }

    @media (max-width: 500px) {
        font-size: 1.6rem;
    }
`;

export const BoxText = styled.div`
    width: 100%;
 
    @media (max-width:768){
        position: absolute;
        bottom: -155px;
    }

    @media (max-width: 500px){
        bottom: -95px;
    } 
`;

export const Paragraph = styled.h3`
    font: 400 1.6rem 'Usual', sans-serif;
    padding: 2rem 0;

    @media (min-width: 2200px) {
        padding: 3rem 0;
        font-size: 2.2rem;
    }

    @media (max-width: 1440px){
        font-size: 1.2rem;
    }

    @media (max-width: 768px){
        text-align: center;
        padding: 1rem 0;
    }

    @media (max-width: 500px){
        font-size: .9rem;
    }
`;

export const BoxButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    
    button {
        font-weight: 400;

        @media (min-width: 2200px) {
            width: 17rem;
            height: 5rem;
            font-size: 1.8rem;
            border-radius: 40px;
        }
    }

    @media (max-width: 768px) {
        justify-content: flex-end;

        button {
            width: 10rem;
            height: 3.3rem;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 500px) {
        height: 60px;

        button{
            width: 8rem;
            height: 2.8rem;
            font-size: .9rem;
        }
    }
`;

export const Link = styled.a``;

export const IconWhats = styled.img`
    width: 3.3rem;
    margin-left: 2rem;

    @media (min-width: 2200px) {
        width: 5rem;
    }

    @media (max-width: 500px){
        width: 2.8rem;
        margin-left: 1.3rem;
    }
`;
export const DownArrow = styled.img`
    position: absolute;
    bottom: -6rem;
    left: 0;

    @media (min-width: 2200px) {
        bottom: -10rem;
        width: 2rem;
    }

    @media (max-width: 768px){
        bottom: -3rem;
        left: 42vw;
        width: 1.2rem;
    }
`;

export const BoxImgs = styled.div`
    width: 50%;

    @media (max-width: 768px){
        position: static;
        width: 100%;
    }
`;

export const BoxEstudio = styled.div`
    width: 100%;
    border-radius: 15px;
    border: 2px solid #09255d;
    box-shadow: 0px 0px 20px #0f2b9240;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.3);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const BoxEstudioMobile = styled(BoxEstudio)`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const ImgEstudio = styled.img`
    width: 100%;
    transform: scale(1.2);
    transition: 0.25s ease-out;
`;