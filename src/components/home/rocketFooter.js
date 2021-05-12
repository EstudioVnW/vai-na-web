import React from "react";
import styled from 'styled-components';

// images
import Rocket from '../../images/images/Grupo10472.svg';

// styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    margin-top: 8rem;

    @media (max-width: 768px) {
        height: 50rem;
      }

      @media (max-width: 425px) {
        height: 41rem;
      }
`;

const Text = styled.p `
    color: #00145D;
    font-size: 32px;
    line-height: 3rem;
    width: 56%;
    font-weight: 100;
    text-align: center;


  @media (min-width: 1920px) {
        width: 37%;
    }

    @media (min-width: 2560px) {
        font-size: 43px;
        line-height: 3.5rem;
      }

      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 2.4rem;
      }

      @media (max-width: 425px) {
        font-size: 20px;
        line-height: 1.8rem;
        font-weight: 400;
        width: 70%;
    }
`;

const BoxLine = styled.div `
    display: flex;
    margin-left: 1rem;
    margin-top: 3rem;

    @media (max-width: 425px) {
        margin-top: 1.5rem;
        margin-left: 34px;
      }
`;

const LineStraight = styled.div `
    width: 13rem;
    height: 1px;
    background-color: #FFAC2D;
    margin-left: -2rem;

    @media (max-width: 768px) {
        width: 7rem;
        height: 2px;
        margin-right: 11px;
        margin-left: -2.1rem;
    }
`;

const BoxLineCrooked = styled.div `
    display: flex;
`;

const LineLeft = styled.div `
    width: 3rem;
    height: 1px;
    background-color: #FFAC2D;
    transform: rotate(45deg);
    position: relative;
    top: 1.1rem;
    left: -8px;
    
    @media (max-width: 768px) {
        width: 2.1rem;
        height: 2px;
        top: 12px;
        left: -16px;
    }
`;

const LineRight = styled.div `
    width: 2.79rem;
    height: 1px;
    background-color: #FFAC2D;
    transform: rotate(130deg);
    position: relative;
    top: 17px;
    left: -1.45rem;

    @media (max-width: 768px) {
        top: 12px;
        left: -1.7rem;
        width: 1.98rem;
        height: 2px;
    }
`;

const BoxRocket = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageRocket = styled.img `
    width: 50%;
    position: relative;
    bottom: -8rem;

    @media (min-width: 2560px) {
        width: 65%;
        bottom: -1rem;
    } 

    @media (max-width: 768px) {
        bottom: -22rem;
    }


    @media (max-width: 425px) {
        width: 57%;
        bottom: -21.5rem;
      }
`;

const Button = styled.button `
    width: 13.5rem;
    height: 3.375rem;
    font-size: 1rem;
    font-weight: 600;
    color: #0F2B92;
    background: #FFFDF8;
    border-radius: 35px;
    text-align: center;
    position: relative;
    top: 5rem;
    left: 18rem;
    border: 1px solid  #FFAC2D; 

    :hover {
        color: #FDE7A9;
        background-color: #0F2B92;  
        border: none;
    }

    @media (min-width: 2560px) {
        width: 320px;
        height: 4.375rem;
        font-size: 1.5rem;
        left: 24rem;
        top: 3rem;
    }  

    @media (max-width: 768px) {
        background-color: #FFFDF8;
        left: -11px;
        width: 14.5rem;
        height: 3rem;

        :hover {
            background-color: #FFFDF8;
            color: #0F2B92;
            border: 1px solid  #FFAC2D; 
        }
    }
`;

const RocketFooter = () => (
	<Container>
		<Text>
            Queremos conectar os nossos talentos digitais às mais responsáveis e inovadoras 
            organizações do país. Juntos, vamos explorar toda a imensidão da economia digital!
        </Text>
        <BoxLine>
            <LineStraight />
                <BoxLineCrooked>
                    <LineLeft />
                    <LineRight />
                </BoxLineCrooked>
            <LineStraight />
        </BoxLine>
        <div>
          <a href="https://forms.gle/vZCme7DnSTrBKoMB6" target="_blank"><Button>Quero fazer parte!</Button></a>
        </div>
        <BoxRocket>
            <ImageRocket src={Rocket} alt="Imagem do Foguete dando partida" />
        </BoxRocket>
	</Container>
)

export default RocketFooter;