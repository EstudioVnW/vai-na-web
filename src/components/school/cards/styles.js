import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Wrap = styled.div`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px){
        width: 90%;
    }
`;

export const BoxText = styled.div``;
export const Title = styled.h2`
    margin-bottom: 1rem;
    font: 800 2rem 'Usual', sans-serif;
`;
export const SubTitle = styled.h3`
    font: 400 1.3rem 'Usual', sans-serif;
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
    //width: 113rem;
    width: 100vw;
    transition: 1s ease-in-out; 

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
    width: 23.5%;
    height: 28rem;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: ${props => props.justifyContent || "center"};
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: ${props => props.isHover ? 'scale(1)' : 'scale(1.025)'};
    }
`;

export const CardContainer = styled.div`
    width: 90%;
    height: 90%;
`;

export const CardDetail = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.2rem;
  border-bottom: .2rem solid ${props => props.borderFill};

`;

export const CardCircle = styled.div`
  margin-right: 0.5rem;
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 50%;
  background: ${props => props.background};
`;

export const CarreiraTxt = styled.p`
    font: 800 .9rem 'Usual', sans-serif;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;

export const DevTxt = styled.h3`
    width: ${props => props.width || '60%'};
    font: 800 1.7rem 'Usual', sans-serif;
    margin-bottom: 1.3rem;
`;

export const HDesc = styled.p`
    font: 800 1.1rem 'Usual', sans-serif;
    line-height: 1.6rem;
    margin-bottom: .2rem;
`;
export const PDesc = styled.p`
    font: 400 1rem 'Usual', sans-serif;
    line-height: 1.6rem;
`;

export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: start;
    }
`;

export const Paragraph = styled.p`
    width: 700px;
    font: 300 1.3rem 'Usual', sans-serif;
    
    @media (max-width: 768px){
        width: auto;
    }
`;

export const BoxButton = styled.div`
    @media (min-width: 1900px) {
        Button{
            width: 13.5rem;
        }  
    }
    
    @media (max-width: 768px){
        display: flex;
        align-items: center;
        height: 3.75rem;
        margin-top: 1rem;
    }

    @media (max-width: 500px){
        Button{
            width: 7.5rem;
            height: 3rem;
            font-size: .9rem;
        }
    }

`;


export const LittleCard = styled.div`
    width: 100%;
    height: 45%; 
    background: #D4D9EC;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.025);
    }
`;