import styled from 'styled-components';

export const Container = styled.div`
    padding: 4rem 0 8rem;
    width: 100%;

    @media (max-width: 480px) {
        padding: 4rem 0;
    }
`;

export const BoxWrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1200px){
        width: 90%;
    }
    @media (max-width: 768px){
        width: 88%;
    }
`;

export const BoxText = styled.div`
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

export const Title = styled.h2`
    font: 800 2rem 'Usual', sans-serif;
    color: #FF611E;
    padding-bottom: 0.8rem;

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.p`
    font: 400 1.3rem 'Usual', sans-serif;
    line-height: 1.6rem;

    @media (max-width: 480px) {
        width: 90%;
        font-size: 1rem;
    }
`;

export const Slide = styled.div`
    width: 100%;
    height: 40rem;
`;

export const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    left: -6%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    
    @media (max-width: 1200px) {
        left: -4%;
    }
    @media (max-width: 768px){
        display:none;
    }
`;

export const RightArrow = styled(LeftArrow)`
    left: auto;
    right: -6%;
    transform: translate(50%,-50%);

    @media (max-width: 1200px) {
        right: -4%;
    }
`;

export const Card = styled.div`
    margin-top: 6rem;
    padding: 10px 1.8rem;
    width: 97% !important;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 15px;
    transition: 0.2s ease-in-out;
    border: 2px solid #00145D;
    box-shadow: 0px 0px 8px #00000029;

    @media (max-width: 480px) {
        border-width: 1px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Description = styled.p`
    font: 300 1rem 'Usual', sans-serif;
    line-height: 1.5;
    margin-bottom: 0.6rem;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid #FED5B2;

    @media (max-width: 1024px) {
        font-size: 0.8rem;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }
`;

export const Name = styled.p`
    font: 800 1.5rem 'Usual', sans-serif;
    line-height: 2.5rem;
    color: #FF611E;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

export const About = styled.p`
    display: flex;
    flex-direction: column;
    font: 0.95rem 'Usual', sans-serif;
    line-height: 1.5rem;
    color: #00145D;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 1rem;

    @media (max-width: 1024px) {
        font-size: 0.8rem;
        line-height: 1.3rem;
    }
`;

export const BoxImg = styled.figure`
    padding: 3rem 0;
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {  
        padding: 2rem 0;
    }
`;

export const ImgPerson = styled.img`
    width: 180px;
    position: absolute;
    transform: translate(-50%,0);
    top: -80%;
    left: 50%;

    @media (max-width: 1024px) {  
        top: auto;
        bottom: -10%;
        width: 10rem;
    }
 `;
