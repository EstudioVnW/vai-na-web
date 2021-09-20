import styled from 'styled-components';

export const Link = styled.a`
    text-decoration: none;
`;

export const Container = styled.div`
    width: 100%;
    background: rgb(255, 240, 233);
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font: 800 2rem 'Usual', sans-serif;
    color: #00145D;
    padding: 3rem 0;

    @media (min-width: 2200px){
        padding: 5rem 0;
        font-size: 4rem;
    }

    @media (max-width: 768px){
        text-align: center;
    }
`;

export const BoxSlide = styled.div`
    width: 100%;
    
    @media (max-width: 1024px){
        overflow: hidden;
        overflow-x: scroll;
    }
`;

export const Slide = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1024px){
        width: 516vw;
    }
`;

export const Img = styled.img`
    width: 100%;
`;

export const BoxDesc = styled.figcaption`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(253, 231, 169, 0.8);
    transition: .5s;
    opacity: 0;

    @media (max-width: 1024px){
        position: relative;
        height: auto;
        opacity: 1;
        background: none;
    }
`;

export const Project = styled.figure`
    position: relative;
    width: 23%;
    overflow: hidden;
    margin-bottom: 2rem;
    text-align: center;

    &:hover ${BoxDesc} {
        opacity: 1;
    }

    @media (max-width: 1024px){
        width: 15.5%;
        margin-bottom: 3rem;
    }
`;

export const Name = styled.h3`
    font: 800 1.1rem 'Usual', sans-serif;
    color: #00145D;

    @media (min-width: 2200px) {
        margin-bottom: .5rem;
        font-size: 2rem;
    }
    
    @media (max-width: 1024px){
        padding-top: 1rem;
        font-size: 1.5rem;
    }

    @media (max-width: 500px){
        font-size: 1rem;
    }
`;

export const Address = styled.p`
    font: 600 .9rem 'Usual', sans-serif;
    color: #00145D;

    @media (min-width: 2200px) {
        font-size: 1.7rem;
    }

    @media (max-width: 1024px){
        font-size: 1.2rem;
    }

    @media (max-width: 500px){
        font-size: .8rem;
    }
`;
