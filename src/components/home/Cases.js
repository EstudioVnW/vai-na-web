import React from "react";
import styled from 'styled-components';

import PageTitle from '../pageTitle/pageTitle';
import ImageBrasil from '../../images/images/Group7507.png'
import PersonaIcon from '../../images/images/peopleVNW/Luan.png'
import CaseImg from '../../images/images/Reg@2x.png'


// styles
const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  padding: 4rem 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
`;


const SubTitleCases = styled.p `
  font-size: 21px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 21.5rem;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 2rem;

  /* @media (min-width: 1920px) {
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	} */
`;

const ContainerCases = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 2rem;

  /* @media (min-width: 1920px) {
	} */
`;

const ImageSideCases = styled.img `
  padding-right: 1rem;

  /* @media (min-width: 1920px) {
    width: 8rem;
	} */
`;

const WrapperCases = styled.div`

`;

const BoxCases = styled.div `
  max-width:950px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 22px #00000029;
  border: 2px solid #00145D;
  border-radius: 20px;
  display: flex;
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

const BoxTextCases = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
`;

const TitleBoxCases = styled.h3 `
  padding-bottom: 7.25rem;
  color: #0F2B92;
  font-size: 2.5rem;
  width: 100%;
  font-weight: 700;
  line-height: 3.125rem;

  /* @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 3.6rem;
	} */
`;

const TextBoxCases = styled.p `
  font-size: 1.0625rem;
  font-weight: 100;
  line-height: 1.5rem;
  width: 100%;

  /* @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 2rem;
    width: 91%;
	} */
`;

// const BoxAllInsideCases = styled.div `
//   width: 70%;
// `;

const ContainerAllTextInsideCases = styled.div `
  width: 75%;
  padding-left: 1rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  /* @media (min-width: 1920px) {
    height: 10rem; */
	}
`;

const BoxTextInsideCases = styled.div `
  display: flex;
  justify-content: space-between;
`;

const BoxItemText = styled.div `
  width: ${props => props.width};
  display: flex;
  padding-bottom: 2rem;
`;

const TextOrangeCases = styled.p `
  width: ${props => props.width};
  color: #FF611E;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11px;
  padding-right: ${props => props.paddingRight};

  /* @media (min-width: 1920px) {
    font-size: 20px;
    margin-right: ${props => props.Mright};
	} */
`;

const TextComplementOrange = styled.p `
  color: #272727;
  text-align: left;
  font-size: 11px;
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
/* 
  @media (min-width: 1920px) {
    font-size: 20px;
    margin-right: ${props => props.Mright};
    margin-left: ${props => props.Mleft};
	} */
`;

const BoxImageCases = styled.div `
  display: flex;

  /* @media (min-width: 1920px) {
    margin-right: 6rem;
	} */
`;

const ImagePersonCases = styled.img `
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
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

const BoxFigure = styled.figure`
`;

const ImgCases = styled.img`
  width: 100%;
`;

const BoxImageScreenCases = styled.div `

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
    display: inline-block;
    width: 27px;
    height: 27x;
    padding: 7px;
    margin-right: 3px;
    background-clip: content-box;
    border: 2px solid #bbbbbb;
    border-radius: 50%;
  }

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

const Cases = (props) => {
  const isTitleCases = { typePage: 'Cases', title: 'Missões <br/> de sucesso'};

  const Case = () => {
    return(
      <BoxCases id="Slide">
        <BoxTextCases>
          <TitleBoxCases>
            Inovando o sistema de atendimento do SUS
          </TitleBoxCases>
          <TextBoxCases>
            Em parceria com o Hospital Sírio-Libanês e o PROADI-SUS desenvolvemos o Reg+.
            Um sistema de telemedicina para regular as filas do SUS em todo o Brasil, otimizando o 
            tempo de atendimento e diagnóstico dos pacientes através da integração das jornadas de médicos,
            enfermeiros, atendentes e consultores de saúde.
          </TextBoxCases>
        </BoxTextCases>
        {/* <BoxAllInsideCases> */}
          <ContainerAllTextInsideCases>
            <BoxTextInsideCases>
              <BoxItemText width= "45%">
                <TextOrangeCases paddingRight= "1.5rem">Cliente</TextOrangeCases>
                <TextComplementOrange >Hospital Sírio-Libanês</TextComplementOrange>
              </BoxItemText>
              <BoxItemText width= "55%">
                <TextOrangeCases  paddingRight= "1rem">tecnologias</TextOrangeCases>
                <TextComplementOrange width= "62%">#Design #React #Redux #Dynamo #StyleComponents</TextComplementOrange>
              </BoxItemText>
            </BoxTextInsideCases>
            <BoxTextInsideCases>
              <BoxItemText width= "45%">
                <TextOrangeCases paddingRight= "2.85rem">Ano</TextOrangeCases>
                <TextComplementOrange >2020</TextComplementOrange>
              </BoxItemText>
              <BoxItemText width= "55%">
                <TextOrangeCases  paddingRight= "3.5rem">equipe</TextOrangeCases>
                <BoxImageCases >
                  <ImagePersonCases src={PersonaIcon} alt="" />
                  <ImagePersonCases src={PersonaIcon} alt="" />
                  <ImagePersonCases src={PersonaIcon} alt="" />
                </BoxImageCases>
              </BoxItemText>
            </BoxTextInsideCases>
            <BoxFigure>
              <ImgCases src= {CaseImg} alt=""/>
            </BoxFigure>
          </ContainerAllTextInsideCases>
        {/* </BoxAllInsideCases> */}
      </BoxCases>
    )
  }

  return (
    <Container>
      <Content>
        <PageTitle data={isTitleCases} isPage='isHome' />
        <SubTitleCases>Saiba como ajudamos os nossos clientes a realizar suas missões:</SubTitleCases>
        <ContainerCases>
          <ImageSideCases src={ImageBrasil} alt='Conjunto de Imagens'/>
          {Case()}
          {/* <WrapperSelector>
            <input type="radio" name="radio" id="radio1" onClick={() => handleOptionSelect('p')} />
            <input type="radio" name="radio" id="radio2" onClick={() => handleOptionSelect('s')} />
            <input type="radio" name="radio" id="radio3" onClick={() => handleOptionSelect('t')} />
          </WrapperSelector> */}
        </ContainerCases>
      </Content>
    </Container>
  )
}

export default Cases;
