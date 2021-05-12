import React from "react";
import styled from 'styled-components';

import PageTitle from '../pageTitle/pageTitle';

// Image
import Persona from '../../images/images/Vania-HSL@2x.png'
import HSlLogo from '../../images/images/hospitalSirio.png'

// styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
`;

const SubTitle = styled.p `
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5rem;
  width: 17.5rem;

  /* @media (min-width: 1920px) {
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	} */
`;

const WrapperContent = styled.div `
  display: flex;
  justify-content: flex-end;
  padding-right: 4rem; 

  @media (max-width: 1024px) {
    padding: 0 2.5rem; 
	}
`;

const BoxImg = styled.figure`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -3rem;
  left: -8rem;

  @media (max-width: 1024px) {
    left: -9rem;
  }

  @media (max-width: 1024px) {
    position: initial;
  }
`;

const ImageSide = styled.img `
  max-width: 240px;
  width: 100%;
  /* height: 20rem; */

  @media (max-width: 1024px) {
    /* width: 8rem; */
	}
`;

const Box = styled.div `
  max-width:950px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 22px #00000029;
  border: 2px solid #00145D;
  border-radius: 20px;
  display: flex;
	flex-direction: column;
  padding: 1.5rem;

  @media (max-width: 1024px) {
    /* width: 100%; */
	}

  @media (max-width: 768px) {
    /* width: 760px; */
	}
  @media (max-width: 620px) {
    padding: 1rem;
	}
`;

const BoxText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 1rem;
`;

const TitleBox = styled.h3 `
  color: #0F2B92;
  font-size: 30px;
  width: 90%;
  font-weight: 700;
  line-height: 2.6rem;

  /* @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 3.6rem;
	} */
`;

const TextBox = styled.p `
  width: 85%;
  padding-left: 2rem;
  color:#272727;
  font-size: 1.3125rem;
  font-weight: 100;
  line-height: 2.25rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5rem;
	}

  @media (max-width: 620px) {
    font-size: .75rem;
    line-height: 1.5rem;
	}
`;

const HighlightedText = styled.p`
  font-size: 1.625rem;
  color: #272727;
  font-weight: 800;
  width: 88%;
  padding-left: 2.8rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5rem;
	}

  @media (max-width: 620px) {
    font-size: .75rem;
    line-height: 1.5rem;
	}
`;

const BoxAllInside = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
	border-top: 1px solid #FED5B2;

  @media(max-width: 768px) {
    align-items: center;
  }
`;

const ContainerAllTextInside = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7rem;


  /* @media (min-width: 1920px) {
    height: 10rem;
	} */
`;

const BoxTextInside = styled.div `
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 80%;
  padding-left: .7rem;

  @media (max-width: 1024px) {
    padding-left: 1rem;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width:100%;
    padding: 0;
  }
`;

const BoxItemText = styled.div `
  display: flex;
	flex-direction: column;
  
`;

const ImageLogo = styled.img`
  width: 100%;
  padding-left: 2.5rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TextOrange = styled.p `
  padding-bottom: .65rem;
  color: #FF611E;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.875rem;

  @media (max-width: 768px) {
    font-size: 1rem;
	}

  @media (max-width: 620px) {
    font-size: .9375rem;
	}
`;

const TextComplementOrange = styled.p `
  color: #00145D;
  text-align: left;
  font-size: 1.1875rem;

  @media (max-width: 768px) {
    width: 10rem;
    font-size: .8rem;
	}

  @media (max-width: 620px) {
    width: 7rem;
    font-size: .5rem;
  }
`;

const BoxImage = styled.div `
  display: flex;


  /* @media (min-width: 1920px) {
	} */
`;

const ImagePerson = styled.div `
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: red;
  border: 1px solid #0F2B92;
  box-shadow: 0px 0px 33px #FF611E40;
  position: relative;
  z-index: ${props => props.index};
  left: ${props => props.left};


  /* @media (min-width: 1920px) {
    width: 5rem;
    height: 5rem;
    left: ${props => props.Mleft};
	} */
`;

const BoxImageScreen = styled.div `

`;

// CASE SELECTOR
const WrapperSelector = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputSelector = styled.input`

  ::[type="radio"] {
    display: none;
  }

  ::[type="radio"]+label:before {
    content: "";
    /* create custom radiobutton appearance */
    display: inline-block;
    width: 27px;
    height: 27x;
    padding: 7px;
    margin-right: 3px;
    /* background-color only for content */
    background-clip: content-box;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
  }

  /* appearance for checked radiobutton */
  ::[type="radio"]:checked + label:before {
    background-color: blue;
  }
`;

const handleOptionSelect = (option) => {
  switch (option) {
  case 'p':
    console.log('eu sou o primeiro')
    break;
  case 's':
    console.log('eu sou o segundo')
    break;
  case 't':
    console.log('eu sou o terceiro')
    break;
  default:
    break;
  }
}
const ReinvestedMoney = () => {
	
  const isTitleCase = { typePage: 'Depoimentos', title: 'Mensagens <br/> de impacto'};

	const FrameBox = () => {
    return(
    <Box id="Slide">
      <BoxText>
        <TextBox>
        “O Vai na Web trabalha muito em sinergia com nosso propósito, entendemos que a transformação por meio da educação é o melhor caminho para o desenvolvimento de jovens e sua comunidade.</TextBox>
        <HighlightedText> Estes meninos e meninas são preparados para o mercado de trabalho e desenvolvem entregas brilhantes.</HighlightedText> 
        <TextBox>O Sírio-Libanês tem muito orgulho dessa parceria que mostrou como é possível investir em inovação e formação com parceiros preocupados com o desenvolvimento sustentável e assim diminuir a desigualdade social.”
        </TextBox>
      </BoxText>
      <BoxAllInside>
            <BoxImg>
              <ImageSide src={Persona} alt='Conjunto de Imagens'/>
            </BoxImg>
          <BoxTextInside>
            <BoxItemText>
              <TextOrange>Vânia Bezerra</TextOrange>
              <TextComplementOrange left='1rem'>Superintendente de Responsabilidade Social</TextComplementOrange>
            </BoxItemText>
            <BoxItemText>
              <ImageLogo src={HSlLogo} alt='Logo Hospital Sirio Libanes'/>
            </BoxItemText>
        </BoxTextInside>
      </BoxAllInside>
    </Box>
	)
}

	return (
		<Container>
      <Content>
        <PageTitle data={isTitleCase} isPage='isHome' />
        <WrapperContent>
          {FrameBox()}
          {/* <WrapperSelector>
            <input type="radio" name="radio" id="radio1" onClick={() => handleOptionSelect('p')} />
            <input type="radio" name="radio" id="radio2" onClick={() => handleOptionSelect('s')} />
            <input type="radio" name="radio" id="radio3" onClick={() => handleOptionSelect('t')} />
          </WrapperSelector> */}
        </WrapperContent>
      </Content>
		</Container>
	)
}

export default ReinvestedMoney;

