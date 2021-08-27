import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Wrap = styled.div`
    width: 80%;
    min-height: calc(100vh - 6rem);
    margin: 6rem auto 0 auto;
    display: flex;
    align-items:center;
    justify-content: center;

    @media (min-width: 1900px) {
        margin-top: 8rem;
		min-height: calc(100vh - 8rem);
	}

    @media (max-width: 1024px) {
		min-height: calc(50vh - 8rem);
        padding-bottom: 6rem;
	}

    @media (max-width: 768px){
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
        margin-bottom: 430px;
    }

    @media (max-width: 500px){
        margin-bottom: 230px;//200
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
    display:flex;
    width:100%;
    
    @media (max-width: 768px){
        margin: 1rem 0;
    }
`;

export const Title = styled.h1`
    font: 800 2.72rem 'Usual', sans-serif;
    color: #FF611E;

    @media (min-width: 1371px){
        width: 557px;
    }

    @media (max-width: 500px){
        width: 260px;
        font-size: 1.6rem;
    }
`;

export const TitleBar = styled.span`
    position: absolute;
    left: -3rem;
    font: 300 2.72rem 'Usual', sans-serif;
    color: #0F2B92;
    
    @media (max-width: 768px){
        position: relative;
        left:0;
        margin-right: .5rem;
    }

    @media (max-width: 500px){
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

    @media (max-width: 768px){
        text-align: center;
        padding: 0 0 1rem 0;
    }

    @media (max-width: 500px){
        font-size: .9rem;
    }
`;

export const BoxButton = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;

    Button{
        @media (min-width: 1900px) {
            width: 13.5rem;
        }  
    }

    @media (max-width: 768px){
        justify-content: flex-end;
    }

    @media (max-width: 500px){
        height: 60px;

        Button{
            width: 7.5rem;
            height: 3rem;
            font-size: .9rem;
        }
    }
`;

export const Link = styled.a``;

export const IconWhats = styled.img`
    width: 3.3rem;
    margin-left: 2rem;

    @media (max-width: 500px){
        width: 2.8rem;
        margin-left: 1.3rem;
    }
`;
export const DownArrow = styled.img`
    position: absolute;
    left: 0;
    bottom: -6rem;

    @media (max-width: 768px){
        display: none;
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
`;

export const ImgEstudio = styled.img`
    width:100%;
    transform: scale(1.2);
    transition: 0.25s ease-out;
`;
    