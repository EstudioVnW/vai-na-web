import styled from 'styled-components';
import StickerBg from '../../../images/images/Group11348.svg';

export const Link = styled.a``;

export const Container = styled.div`
    padding: 5rem 0;
    width: 100%;

    @media (min-width: 2200px) {
        padding: 8rem 0;
    }
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1200px){
        width: 88%;
    }
    @media (max-width: 768px){
        width: 90%;
    }
`;

export const BoxText = styled.div``;

export const Title = styled.h2`
    margin-bottom: .8rem;
    font: 800 2rem 'Usual', sans-serif;

    @media (min-width: 2200px) {
        margin-bottom: 1.4rem;
        font-size: 3.8rem;
    }
    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const SubTitle = styled.h3`
    font: 400 1.3rem 'Usual', sans-serif;

    @media (min-width: 2200px) {
        font-size: 2.4rem;
    }
    @media (max-width: 480px) {
        width: 90%;
        font-size: 1rem;
        font-weight: 300;
    }
`;

export const Slide = styled.div`
    width: 100%;
    position: relative;
`;

export const BoxCards = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    width: 110vw;
    transition: 1s ease-in-out; 

    @media (min-width: 2200px) {
        margin: 4rem 0 2rem;
    }
    @media (max-width: 1200px){
        width: 170vw;    
    }
    @media (max-width: 768px){
        width: 250vw;
    }
    @media (max-width: 480px){
        margin: 1rem 0 0.5rem;
        width: 355vw;    
    }
`;

export const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    left: -6%;
    /* -webkit-transform: translate(-50%,-50%); */
    transform:translate(-50%,-50%);
    cursor: pointer;

    @media (max-width: 1024px){
        display:none;
    }
`;

export const RightArrow = styled(LeftArrow)`
    left: auto;
    right: -6%;
    /* -webkit-transform: translate(50%,-50%); */
    transform:translate(-50%,-50%);
`;

export const Card = styled.div`
    background: ${props => props.background};
    width: 24.4%;
    height: 28rem;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: ${props => props.justifyContent || "center"};
    border-radius: 15px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: ${props => props.isHover ? 'scale(1)' : 'scale(1.025)'};
    }

    @media (min-width: 2200px) {
        height: 44rem;
        border-radius: 30px;
    }
    @media (max-width: 768px) {
        height: 30rem;
    }
    @media (max-width: 480px) {
        height: 21rem;
        border-radius: 20px;
    }
`;

export const CardContainer = styled.div`
    padding: 2rem;
    width: 100%;
    height: 100%;
    color: #272727;

    @media (min-width: 2200px) {
        padding: 2.5rem 3.3rem;
    }
    @media (max-width: 480px) {
        padding: 1.3rem 1.5rem;
    }
`;

export const CardDetail = styled.div`
    position: relative;
    display: flex;
    padding-bottom: 1.2rem;
    width: 90%;
    border-bottom: .2rem solid ${props => props.borderFill};

    @media (min-width: 2200px) {
        padding-bottom: 2rem;
        border-bottom-width: .3rem;
    }
    @media (max-width: 480px) {
        padding-bottom: 1rem;
    }
`;

export const CardCircle = styled.div`
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${props => props.background};

    @media (min-width: 2200px) {
        margin-right: 1rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    @media (max-width: 480px) {
        margin-right: 0.4rem;
        width: 13px;
        height: 13px;
    }
`;

export const StickerBox = styled.figure`
    position: absolute;
    top: 0%;
    right: -12%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7vw;
    height: 7vw;
    background: url(${StickerBg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 2200px) {
        top: 30%;
    }
    @media (max-width: 1200px) {
        top: 20%;
        right: -15%;
        width: 10vw;
        height: 10vw;
    }
    @media (max-width: 768px) {
        width: 15vw;
        height: 15vw;
    }
    @media (max-width: 480px) {
        top: 15%;
        width: 23vw;
        height: 23vw;
    }
`;

export const Sticker = styled.img`
    width: 50%;
`;

export const CarreiraTxt = styled.p`
    padding: 0.8rem 0 0.5rem;
    font: 400 .9rem 'Usual', sans-serif;
    text-transform: uppercase;
    
    @media (min-width: 2200px) {
        font-size: 1.6rem;
    }
    @media (max-width: 480px) {
        font-size: .6rem;
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export const DevTxt = styled.h3`
    width: ${props => props.width || '60%'};
    font: 700 1.7rem 'Usual', sans-serif;
    margin-bottom: 1rem;

    @media (min-width: 2200px) {
        font-size: 2.8rem;
    }
    @media (max-width: 480px) {
        margin-bottom: 1.1rem;
        font-size: 1.1rem;
        line-height: 1.4;
    }
`;

export const DevTxtLittle = styled.h3`
    width: ${props => props.width || '60%'};
    font: 700 1.4rem 'Usual', sans-serif;
    margin-bottom: 1rem;

    @media (min-width: 2200px) {
        font-size: 2.8rem;
    }
    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
    @media (max-width: 480px) {
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
        line-height: 1rem;
    }
`;

export const HDesc = styled.p`
    font: 800 1.1rem 'Usual', sans-serif;
    line-height: 1.6;
    margin-bottom: .2rem;

    @media (min-width: 2200px) {
        font-size: 1.8rem;
    }
    @media (max-width: 480px) {
        margin: 0;
        width: 70%;
        font: 600 .85rem 'Usual',sans-serif;
        line-height: 1.6;
    }
`;
export const PDesc = styled.p`
    font: 400 1rem 'Usual', sans-serif;
    line-height: 1.6;

    @media (min-width: 2200px) {
        font-size: 1.8rem;
    }
    @media (max-width: 480px) {
        font-size: .85rem;
        line-height: 1.6;
    }
`;
export const PDescVtex = styled.p`
    font: 400 1rem 'Usual', sans-serif;
    line-height: 1.3rem;
    color: #272727;

    @media (min-width: 2200px) {
        font-size: 1.8rem;
    }
    @media (max-width: 480px) {
        font-size: 0.85rem;
        line-height: 1rem;
    }
`;

export const Bold = styled.span`
    font-weight: 700;
`;


export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: start;
    }
`;

export const BoxButton = styled.div`

    @media (min-width: 2200px) {
        Button{
            width: 19rem;
            height: 6rem;
            font-size: 2.1rem;
            font-weight: 400;
            border-radius: 3rem;
        }  
    }
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        width: 12rem;
        height: 3.75rem;
        margin-top: 3rem;
        Button {
            font-size: 1.4rem;
            font-weight: 500;
        }
    }
    @media (max-width: 480px) {
        margin-top: 1rem;
        Button{
            width: 7.6rem;
            height: 2.7rem;
            font-size: .9rem;
        }
    }
`;

export const LittleCardCientist = styled.div`
    width: 100%;
    height: 39%;
    background: #D4D9EC;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.025);
    }

    div {  
        color: #00145D;
    }

    @media (max-width: 480px) {
        div h3{  
            width: 65%;
        }
    }
`;
export const LittleCardVtex = styled.div`
    width: 100%;
    height: 59%;
    background: #D4D9EC;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.025);
    }

    div {  
        color: #00145D;
    }

    @media (max-width: 480px) {
        div h3{  
            width: 65%;
        }
    }
`;