import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const BoxWrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        width: 90%;
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
    padding-top: 6rem;

    &::-webkit-scrollbar {
        width: 0;
    }
    `;
    
    export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    //width: 113rem;
    width: 211.5vw;
    transition: 0.5s ease-in-out; 
    
    @media (max-width: 1185px){
        width: 150vw;
    }
    
    @media (max-width: 768px){
        width: 250vw;
    }
    
    @media (max-width: 500px){
        width: 340vw;
    }
    `;
    
    export const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    left: -6%;
    -webkit-transform: translate(-50%,-50%);
    cursor: pointer;
    
    @media (max-width: 1024px){
        display:none;
    }
    `;
    
    export const RightArrow = styled(LeftArrow)`
    left: auto;
    right: -6%;
    -webkit-transform: translate(50%,-50%);
    `;
    
    export const Card = styled.div`
    background: ${props => props.background};
    //width: 27rem;
    width: 12.2%;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-end;
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    border: 2px solid #00145D;
    cursor: pointer;

    position: relative;


    
    /* &:hover{
        transform: ${props => props.isHover ? 'scale(1)' : 'scale(1.025)'};
    } */
    `;
    
    export const CardContainer = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;
    
    export const Descrition = styled.p`
    font: 300 1rem 'Usual', sans-serif;
    line-height: 1.4rem;
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid #FED5B2;
    margin: 4.5rem auto 1rem auto;
    `;

    export const Name = styled.p `
        font: 800 1.5rem 'Usual', sans-serif;
        line-height: 2rem;
        color: #FF611E;
        text-align: center;
    `;

    export const About = styled.p `
        font: 1rem 'Usual', sans-serif;
        line-height: 1.5rem;
        color: #00145D;    
        text-align: center;
        width: 90%;
        padding-bottom: 1rem;
       /*  margin: 5rem auto 0 auto; */
    `

    export const ImgPerson = styled.img `
        position: absolute;
        width: 180px;
        top: -25%;
        left: 50%;
        -webkit-transform: translate(-50%, 0);
    `;