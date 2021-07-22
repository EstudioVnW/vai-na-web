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

export const BoxText = styled.div `
    margin: 2rem auto;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

export const Title = styled.h2 `
    font: 800 2rem 'Usual', sans-serif;
    color: #FF611E;
    padding-bottom: 0.8rem;

    @media (max-width: 425px) {
        font-size: 1.2rem;
        width: 200px;
    }
`

export const Subtitle = styled.p `
    font: 300 1.3rem 'Usual', sans-serif;
    line-height: 1.6rem;

    @media (max-width: 425px) {
        font-size: 0.8rem;
        width: 230px;
    }
`

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
    
    @media (max-width: 768px){
        width: 450vw;
    }
    
    @media (max-width: 500px){
        width: 720vw;
    }
    `;
    
    export const LeftArrow = styled.img`
    position: absolute;
    top: 50%;
    left: -6%;
    -webkit-transform: translate(-50%,-50%);
    cursor: pointer;
    
    @media (max-width: 768px){
        display:none;
    }
    `;
    
    export const RightArrow = styled(LeftArrow)`
    left: auto;
    right: -6%;
    -webkit-transform: translate(50%,-50%);
    `;
    
    export const Card = styled.div`
    width: 12.2%;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-end;
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    border: 2px solid #00145D;
    box-shadow: 0px 0px 8px #00000029;
    cursor: pointer;
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

        @media (max-width: 1024px) {
            font-size: 0.8rem;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
        }
    `;

    export const Name = styled.p `
        font: 800 1.5rem 'Usual', sans-serif;
        line-height: 2.5rem;
        color: #FF611E;
        text-align: center;

        @media (max-width: 1024px) {
            font-size: 1rem;
            line-height: 1.5rem;
        }
    `;

    export const About = styled.p `
        font: 1rem 'Usual', sans-serif;
        line-height: 1.5rem;
        color: #00145D;    
        text-align: center;
        width: 90%;
        padding-bottom: 1rem;
       /*  margin: 5rem auto 0 auto; */

       @media (max-width: 1024px) {
        font-size: 0.8rem;
        line-height: 1.3rem;
    }
    `

    export const BoxImg = styled.figure `
        padding: 3rem 0;
        width: 100%;
        position: relative;
    `

    export const ImgPerson = styled.img `
        width: 180px;
        position: absolute;
        -webkit-transform: translate(-50%, 0);
        top: -80%;
        left: 50%;
     /*    position: absolute;
        width: 180px;
        top: -25%;
        left: 50%;
         */
    `;