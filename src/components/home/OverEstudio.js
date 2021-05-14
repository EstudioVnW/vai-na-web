import React from "react";
import styled from 'styled-components';

//Conponent
import PageTitle from '../pageTitle/pageTitle';
import Button from '../button/Button';

//images
import ImageEstudioVnW from '../../images/images/logoEstudio.svg';
import FirstPhotoEstudio from '../../images/images/PhotoEstudio1.png';
import FirstImageServiceEstudio from '../../images/images/Grupo10441.png';
import SecondImageServiceEstudio from '../../images/images/Grupo10445.png';
import ThirdImageServiceEstudio from '../../images/images/Grupo10443.png';
import FourthImageServiceEstudio from '../../images/images/Grupo10444.png';
import CircleOrangeEstudio from '../../images/images/VnW-Background-2_borda.png';
import SecondPhotoEstudio from '../../images/images/VNW2-63.png';

// styles
const ContainerEstudio = styled.div `
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
	}
`;

const ContainerText = styled.div `
  margin-top: 2rem;
`;

const ContainerTextMain = styled.div `
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextDescriptionAll = styled.p`
  font-size: .938rem;
  font-weight: 400;
  line-height: 1.5rem;
  width: 21rem;
  /* margin-left: 11.4rem; */
  /* margin-top: -1rem; */
  margin-bottom: 2rem;

  /* @media (min-width: 1920px) { */
    /* margin-left: 16.4rem; */
    /* line-height: 2.5rem;
    font-size: 22px;
    width: 26.5rem;
  } */
  
  @media (max-width: 768px) {
    width: 50%;
    /* margin-left: 0px; */
  }

  @media (max-width: 425px) {
    width: 75%;
    line-height: 1.8rem;
    font-size: 16px;
  }
`;

const BoldTextAll = styled.b`
  font-weight: 600;
`;

const ContainerImagesEstudio = styled.div `
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3rem;
  position: relative;
  right: 1rem;

  @media (min-width: 1920px) {
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    position: none;
    right: 0px;
    margin-top: 2rem;
  }
`;

const ImageLogoEstudio = styled.img `
  width: 20%;

  @media (max-width: 1920px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
  
  @media (max-width: 425px) {
    width: 60%;
  }
`;

const LineBlue = styled.div `
  transform: rotate(89deg);
  width: 2rem;
  height: 2px;
  background-color: #00145D;
  margin-top: 3rem;

  /* @media (min-width: 1920px) {
    width: 3.3rem;
    margin-top: 5rem;
  }
  
  @media (min-width: 2560px) {
    width: 4.6rem;
  } */
`;

const FirstImagePhotoEstudio = styled.img `
  width: 80%;
  z-index: 0;
  
  @media (max-width: 1920px) {
    margin-top: -14px;
    width: 95%;
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    width: 100%;
  }
  
  @media (max-width: 425px) {
    margin-top: 1px;
    width: 24rem;
  }
`;

const DetailsTitleService = styled.p `
  color: #FFAC2D;
  font-size: 22px;

`;

const TitleServices = styled.p `
  color: #0F2B92;
  font-size: 22px;
  display: flex;
  font-weight: 600;
  width: 14%;
  /* margin-left: 11.4rem; */
  margin-top: 2rem;

  /* @media (min-width: 2560px) {
    width: 11%;
    font-size: 34px;
  } */

  /* @media (min-width: 1920px) { */
    /* margin-left: 16.4rem; */
    /* font-size: 32px;
    width: 13%;
    margin-top: 5rem;
  } */
  
  
  @media (max-width: 768px) {
    font-size: 26px;
    width: 28%;
  }

  @media (max-width: 425px) {
    margin-left: 4rem;
    width: 42%;
    font-size: 20px;
  }
`;

const SubTitleServices = styled.p `
  /* margin-left: 11.4rem; */
  color: #272727;
  font-size: 13px;
  width: 18%;
  line-height: 1.4rem;
  margin-top: 1rem;
  
  /* @media (min-width: 2560px) { */
    /* margin-left: 16.4rem; */
    /* font-size: 24px;
    width: 17%;
    line-height: 2.4rem;
  } */

  /* @media (min-width: 1920px) { */
    /* margin-left: 16.4rem; */
    /* font-size: 23px;
    width: 21%;
    line-height: 2.4rem;
  } */
  
  
  @media (max-width: 768px) {
    font-size: 18px;
    width: 42%;
    font-weight: 300;
    line-height: 1.7rem;
    margin-bottom: 8rem;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    /* margin-left: 4rem; */
    width: 67%;
  }
`;

const ContainerServicesTextEstudio = styled.div `
  display: flex;
  margin-bottom: 10rem;
  margin-top: 5rem;
/* 
  @media (min-width: 1920px) {
    margin-top: 9rem;
  } */

  @media (max-width: 425px) {
    margin-bottom: 6rem;
  }
`;


const BoxPresentationItemServicesFirst = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 6rem;
  left: 7rem;
  
  /* @media (min-width: 2560px) {
    top: 11rem;
    left: 8rem;
  }

  @media (min-width: 1920px) {
    top: 6rem;
    left: 13rem;
  } */

  @media (max-width: 768px) {
    top: 0px;
    left: 0px;
    display: none;
  }
`;

const BoxPresentationItemServicesSecond = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -4rem;
  left: -1rem;
  
  /* @media (min-width: 2560px) {
    top: -7rem;
    left: -9rem;
  }

  @media (min-width: 1920px) {
    top: -13rem;
    left: 1rem;
  } */

  @media (max-width: 768px) {
    top: 0px;
    left: 0px;
    display: none;
  }
`;

const BoxPresentationItemServicesThird = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0rem;
  left: -4rem;

  /* @media (min-width: 2560px) {
    top: -4rem;
    left: -17rem;
  }

  @media (min-width: 1920px) {
    top: -6rem;
    left: -5rem;
  } */

  @media (max-width: 768px) {
    top: 0px;
    left: 0px;
    display: none;
  }
`;

const BoxPresentationItemServicesFourth = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -12rem;
  left: -7rem;

  /* @media (min-width: 2560px) {
    top: -19rem;
    left: -27rem;
  }

  @media (min-width: 1920px) {
    top: -21rem;
    left: -11rem;
  } */

  @media (max-width: 768px) {
    top: 0px;
    left: 0px;
  }
`;

const TitlePresentationServices = styled.p `
  color: #00145D;
  text-align: center;
  font-size: 24px;
  width: 10rem;

  /* @media (min-width: 1920px) {
    font-size: 24px;
    width: 48%;
  }

  @media (min-width: 2560px) {
    font-size: 38px;
    width: 48%;
    line-height: 2.8rem;
  } */

`;

const ImageService = styled.img `
  width: 60%;
/* 
  @media (min-width: 1920px) {
    width: 50%;
  }   */

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const ImageServiceSmaller = styled.img `
  width: 50%;

  /* @media (min-width: 1920px) {
    width: 40%;
  }   */

  @media (max-width: 768px) {
    margin-top: -1rem;
  }
`;

const DescriptionServices = styled.p `
  color: #272727;
  font-size: 13px;
  width: 53%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  /* @media (min-width: 1920px) {
    font-size: 16px;
    width: 53%;
    line-height: 2rem;
  }  
  
  @media (min-width: 2560px) {
    font-size: 22px;
    width: 53%;
    line-height: 2rem;
  } */

  @media (max-width: 768px) {
    font-size: 16px;
    width: 40%;
    line-height: 1.6rem;
    margin-top: -1rem;
  }

  @media (max-width: 425px) {
    width: 69%;
  }
`;

const DescriptionServicesIntefaces = styled.p `
  color: #272727;
  font-size: 13px;
  width: 64%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  /* @media (min-width: 1920px) {
    font-size: 16px;
    width: 52%;
    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;
    width: 52%;
    line-height: 2rem;
  } */

  @media (max-width: 768px) {
    font-size: 16px;
    width: 40%;
    line-height: 1.6rem;
    margin-top: -1rem;
  }

  @media (max-width: 425px) {
    width: 63%;
  }
`;

const DescriptionServicesSecond = styled.p `
  color: #272727;
  font-size: 13px;
  width: 80%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;
  
  /* @media (min-width: 1920px) {
    font-size: 16px;
    width: 62%;
    line-height: 2rem;
  }   */

  /* @media (min-width: 2560px) {
    font-size: 22px;
    width: 62%;
    line-height: 2rem;
  } */

  @media (max-width: 768px) {
    font-size: 16px;
    width: 40%;
    line-height: 1.6rem;
    margin-top: -1rem;
  }

  @media (max-width: 425px) {
    width: 54%;
  }
`;

const BoxButton = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-right: 18rem;
  margin-top: -7rem;

  /* @media (min-width: 2560px) {
    margin-right: 40rem;
  } */

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const ContainerProfiteCircle = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  /* justify-content: space-between; */

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const WarpperImg = styled.div`
  position: relative;
  display: flex;
`;

const ContainerProfit = styled.div `
  margin-top: 6rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    margin-top: 4rem;
  }
`;

const TextProfit = styled.p `
  width: 100%;
  max-width: 27.375rem;
  font-size: 1.65rem;
  font-weight: 300;
  line-height: 2.75rem;
  color: #272727;

  /* @media (min-width: 1920px) {
    font-size: 22px;
    line-height: 2.5rem;
    width: 92%;
  }

  @media (min-width: 2560px) {
    width: 41%;
    font-size: 28px;
    margin-bottom: 2rem;
  } */

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 42%;
  }

  @media (max-width: 425px) {
    width: 76%;
  }
`;

const TextProfitBold = styled.b `
  font-weight: 600;
`;

const CircleOrange = styled.div `
/* NEW */
  position: absolute;
  top: 2.75rem;
  left: -8rem;
  width: 200px;
  height: 200px;
  background: linear-gradient(15deg, #f6611f, #fdb13c, #fff);
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


/* Old */
  /* background: url(${CircleOrangeEstudio}); 
  background-repeat: no-repeat; 
  background-size: 31%;
  height: 11rem;
  background-position: center; */
  /* position: relative;  */
  /* top: 2rem;
  left: 16rem;  */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  :hover {
    width: 226px;
    height: 226px;
  }

  /* @media (min-width: 1920px) {
    left: 24rem;
    background-size: 31%;
    height: 16rem;
  } */

  /* @media (min-width: 2560px) {
    height: 19.5rem;
    left: 29rem;
    top: 5rem;
  } */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    top: 8rem;
    left: 0px;
    background-size: 45%;
    height: 18rem;
    margin-top: -7rem;

    :hover {
      background-size: 45%;
    }
  }

  @media (max-width: 425px) {
    :hover {
      background-size: 46%;
    }
  }
`;

const TextNumberCircle = styled.h2 `
  font-size: 2.5rem;
  font-weight: 600;
  color: #0F2B92;

  /* @media (min-width: 1920px) {
    font-size: 60px;
  } */

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const TextCircle = styled.p `
  width: 100%;
  max-width: 8.3125rem;
  text-align: center;
  font-size: .9375rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #272727;

  /* @media (min-width: 1920px) {
    font-size: 17px;
    width: 23%;
    line-height: 1.5rem;
  }

  @media (min-width: 2560px) {
    width: 18%;
  } */

  @media (max-width: 768px) {
    width: 32%;
  }

  @media (max-width: 425px) {
    font-size: 9px;
  }
`;

const SecondImagePhotoEstudio = styled.img `
  width: 100%;
  /* margin-right: 8rem; */

  /* @media (min-width: 1920px) {
    width: 100%;
    margin-right: 10rem;
  }

  @media (min-width: 2560px) {
    margin-right: 22rem;
  } */
  
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 88%;
  }
`;


const PartnerOverEstudio = () => {
	const isTitleEstudio = { typePage: 'Estúdio', title: 'Avançando o <br/> espaço inexplorado'};
	
	return (
    <div>
        <ContainerText>
          <PageTitle data={isTitleEstudio} isPage='isHome' />
        </ContainerText>
        <ContainerEstudio>
            <ContainerTextMain>
              <TextDescriptionAll>
                Desenvolvemos o SIaaS: Social Impact as a Service, um modelo de ciclo 
                fechado que <BoldTextAll>entrega serviços digitais</BoldTextAll>, de alto nível de agilidade e inovação digital, 
                ao mesmo tempo que <BoldTextAll>garante experiência para estudantes recém-formados na Escola.</BoldTextAll>
              </TextDescriptionAll>
              <TextDescriptionAll>
                A cada missão, nossos parceiros e clientes recebem uma injeção de criatividade e 
                diversidade em seus projetos, compartilhando a chance de nossos jovens <BoldTextAll>trabalharem 
                em projetos reais</BoldTextAll>, desenvolver <BoldTextAll>experiência técnica, soft skills e habilidades 
                empreendedoras</BoldTextAll> – capacidades imprescindíveis para um talento digital de sucesso.
              </TextDescriptionAll>
            </ContainerTextMain>
          <ContainerImagesEstudio>
            <ImageLogoEstudio src={ImageEstudioVnW} alt="Logo Vai na Web"/>
            <LineBlue></LineBlue>
            <FirstImagePhotoEstudio src={FirstPhotoEstudio} alt="Foto"/>
          </ContainerImagesEstudio>
        </ContainerEstudio>
          <div> 
           <TitleServices>Conheça os nossos serviços</TitleServices>
            <SubTitleServices>O seu projeto estratégico com a nossa visão de inovação sustentável.<br/> Veja como podemos ajudar:</SubTitleServices> 
          </div>
        <ContainerServicesTextEstudio>
          <BoxPresentationItemServicesFirst>
            <TitlePresentationServices>Squads estendidos</TitlePresentationServices>
            <ImageServiceSmaller src={FirstImageServiceEstudio} alt="Imagem Ilustrativa" />
            <DescriptionServices>
              Conecte-se ao nosso time de profissionais diversos e multidisciplinares, aumentando a sua força de trabalho e 
              acelerando as suas entregas de média e baixa complexidade, através de squads ágeis de desenvolvimento web e mobile.
            </DescriptionServices>
          </BoxPresentationItemServicesFirst>
          <BoxPresentationItemServicesSecond>
            <DescriptionServicesIntefaces>
              Desenvolvemos produtos digitais – sites, portais e e-commerces – que beneficiem a todos, e não apenas alguns. 
              Foco nos princípios da acessibilidade, inclusão e adaptabilidade multitelas.
            </DescriptionServicesIntefaces>
            <ImageService src={SecondImageServiceEstudio} alt="Imagem Ilustrativa" />
            <TitlePresentationServices>Interfaces acessíveis e inclusivas</TitlePresentationServices>
          </BoxPresentationItemServicesSecond>
          <BoxPresentationItemServicesThird>
            <TitlePresentationServices>Inovação com diversidade</TitlePresentationServices>
            <ImageService src={ThirdImageServiceEstudio} alt="Imagem Ilustrativa" />
            <DescriptionServicesSecond>
              Aceleramos o seu projeto de inovação com tecnologias emergentes para gerar mais valor ao seu negócio. 
              Criamos e implementamos MVPs rápidos e em escala.
            </DescriptionServicesSecond>
          </BoxPresentationItemServicesThird>
          <BoxPresentationItemServicesFourth>
            <DescriptionServicesSecond>
              Ajudamos a formar profissionais para desenvolvimento em plataformas e/ou tecnologias específicas, 
              através da criação e implementação de bootcamps personalizados.
            </DescriptionServicesSecond>
            <ImageService src={FourthImageServiceEstudio} alt="Imagem Ilustrativa" />
            <TitlePresentationServices>Tecnologias e plataformas</TitlePresentationServices>
          </BoxPresentationItemServicesFourth>
        </ContainerServicesTextEstudio> 
        <BoxButton>
          <a href="https://forms.gle/bVRiWcWoHnL9D5tU8" target="_blank" rel="noopener noreferrer"><Button colorHover='#272727'>Desejo Contratar!</Button></a>
        </BoxButton>
        <ContainerProfit>
          <ContainerProfiteCircle>
            <TextProfit>
              Toda vez que sua empresa contrata serviços do Estúdio Vai na Web, ela contribui diretamente 
              para <TextProfitBold> inspirar, equipar e educar mais pessoas </TextProfitBold> para a economia digital. 
            </TextProfit>
          </ContainerProfiteCircle>
          <WarpperImg>
            <CircleOrange>
              <TextNumberCircle>100%</TextNumberCircle>
              <TextCircle>do lucro gerado pelo Estúdio VnW é reinvestido para formar mais pessoas.</TextCircle>
            </CircleOrange>
            <SecondImagePhotoEstudio src={SecondPhotoEstudio} alt="Foto"/>
          </WarpperImg>
        </ContainerProfit>
      </div>
	)
}

export default PartnerOverEstudio;
