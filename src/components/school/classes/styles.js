import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height 50rem;
    background: rgb(240,242,248);
    margin: 10rem 0 20rem 0;
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px){
        width: 90%;
    }
`;

export const Title = styled.h2`
    font: 800 2rem 'Usual', sans-serif;
    text-align: center;
    margin: 4.5rem 0; 
    color: #00145D;
`;

export const BoxTask = styled.div`
    max-width: 800px;
    width: 72%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px){
        width: 100%;
        flex-direction: column;
    }
`;

export const BoxTaskDown = styled(BoxTask)`
    max-width: 1200px;
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 1024px){
        margin: 0;   
    }
`;

export const Task = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    
    @media (max-width: 1024px){
        margin-bottom: 2.5rem;
        
        &:nth-child(2){
            order: ${props => props.order};
        }
    }
`;

export const Icon = styled.img`
    width: 40%`;

export const Paragraph = styled.p`
    font: 400 1rem 'Usual', sans-serif;
    line-height: 1.3rem;
    margin-top: 1rem;
`;

export const BoxVnWSchhol = styled.figure`
    width: 65rem;
    //width: 70%;
    position: absolute;
    bottom: -35%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid #09255d;
    box-shadow: 0px 0px 20px #0f2b9240;

    @media (max-width: 1024px){
        position: relative;
        width: 100%;
        border-radius: 0;
        border: 0;
    }
`;

export const VnWSchhol = styled.img`
    width: 100%;
    transform: scale(1.14);
`;