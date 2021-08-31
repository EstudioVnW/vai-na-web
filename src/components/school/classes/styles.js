import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 53rem;
    background: rgb(240,242,248);
    margin-bottom: 20rem;

    @media (min-width: 2200px) {
        margin-bottom: 30rem;
        min-height: 85rem;
    }

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const Wrap = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px){
        width: 90%;
    }
`;

export const Title = styled.h2`
    font: 800 2rem 'Usual', sans-serif;
    text-align: center;
    margin: 5rem 0 4rem;
    color: #00145D;

    @media (min-width: 2200px) {
        font-size: 3.8rem;
    }

    @media (max-width: 480px) {
        margin: 2rem 0;
        width: 80%;
    }
`;

export const BoxTask = styled.div`
    max-width: 800px;
    width: 72%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 2200px) {
        max-width: 100%;
    }

    @media (max-width: 1200px) {
        width: 77%;
    }

    @media (max-width: 900px){
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 480px){
        flex-direction: column;
    }
`;

export const BoxTaskDown = styled(BoxTask)`
    max-width: 1200px;
    width: 100%;
    margin-top: 1.6rem;

    @media (min-width: 2200px) {
        margin-top: 3rem;
        max-width: 100%;
    }

    @media (max-width: 900px){
        margin-top: 1rem;
    }
`;

export const Task = styled.figure`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (min-width: 2200px) {
        width: 20rem;
    }

    @media (max-width: 900px){
        margin-bottom: 2.5rem;
        
        &:nth-child(2){
            order: ${props => props.order};
        }
    }
`;

export const Icon = styled.img`
    width: 40%
`;

export const Paragraph = styled.figcaption`
    font: 400 1rem 'Usual', sans-serif;
    line-height: 1.5;
    color: #222;
    margin-top: 1rem;
    width: 87%;

    @media (min-width: 2200px) {
        width: 95%;
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        width: 85%;
    }
`;

export const BoxVnWSchool = styled.figure`
    position: absolute;
    top: 70%;
    left: 50%;
    width: 52rem;
    -webkit-transform: translateX(-50%);
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid #09255d;
    box-shadow: 0px 0px 20px #0f2b9240;

    @media (min-width: 2200px) {
        top: 72%;
        width: 60%;
    }

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 900px){
        position: relative;
        width: 100%;
        border-radius: 0;
        border: 0;
    }
`;

export const VnWSchool = styled.img`
    width: 100%;
    transform: scale(1.14);

    @media (max-width: 900px) {
        display: none;
    }
`;

export const VnWSchoolMobile = styled.img`
    display: none;
    width: 100%;

    @media (max-width: 900px) {
        display: block;
    }
`;
