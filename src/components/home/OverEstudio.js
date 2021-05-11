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
  margin-top: 8rem;
`;

const TextDescriptionAll = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 17.5rem;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 2rem;

  @media (min-width: 1920px) {
    margin-left: 16.4rem;
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	}
`;

const BoldTextAll = styled.b`
  font-weight: 500;
`;

const ContainerImagesEstudio = styled.div `
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  position: relative;
  right: 4rem;
`;

const ImageLogoEstudio = styled.img `
  width: 20%;
`;

const LineBlue = styled.div `
  transform: rotate(89deg);
  width: 2rem;
  height: 2px;
  background-color: #00145D;
  margin-top: 3rem;

  @media (min-width: 1920px) {
    width: 3.3rem;
    margin-top: 5rem;
  }
  
  @media (min-width: 2560px) {
    width: 4.6rem;
	}
`;

const FirstImagePhotoEstudio = styled.img `
  width: 80%;
  margin-top: -5px;
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
  margin-left: 11.4rem;
  margin-top: 2rem;


  @media (min-width: 1920px) {
    margin-left: 16.4rem;
    font-size: 32px;
    width: 13%;
    margin-top: 5rem;
  }
  
  @media (min-width: 2560px) {
    width: 11%;
    font-size: 34px;
	}
`;

const SubTitleServices = styled.p `
  margin-left: 11.4rem;
  color: #272727;
  font-size: 13px;
  width: 18%;
  line-height: 1.4rem;
  margin-top: 1rem;

  @media (min-width: 1920px) {
    margin-left: 16.4rem;
    font-size: 23px;
    width: 21%;
    line-height: 2.4rem;
  }
  
  @media (min-width: 2560px) {
    margin-left: 16.4rem;
    font-size: 24px;
    width: 17%;
    line-height: 2.4rem;
	}
`;

const ContainerServicesTextEstudio = styled.div `
  display: flex;
  margin-bottom: 10rem;
  margin-top: 5rem;

  @media (min-width: 1920px) {
    margin-top: 9rem;
  }
`;

const BoxPresentationItemServicesFirst = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 8rem;
  left: 7rem;

  @media (min-width: 1920px) {
    top: 6rem;
    left: 13rem;
  }

  @media (min-width: 2560px) {
    top: 11rem;
    left: 8rem;
	}
`;

const BoxPresentationItemServicesSecond = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -2rem;
  left: -1rem;

  @media (min-width: 1920px) {
    top: -13rem;
    left: 1rem;
  }

  @media (min-width: 2560px) {
    top: -7rem;
    left: -9rem;
  }
`;

const BoxPresentationItemServicesThird = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 2rem;
  left: -4rem;

  @media (min-width: 1920px) {
    top: -6rem;
    left: -5rem;
  }

  @media (min-width: 2560px) {
    top: -4rem;
    left: -17rem;
  }
`;

const BoxPresentationItemServicesFourth = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -10rem;
  left: -7rem;

  @media (min-width: 1920px) {
    top: -21rem;
    left: -11rem;
  }

  @media (min-width: 2560px) {
    top: -19rem;
    left: -27rem;
  }
`;

const TitlePresentationServices = styled.p `
  color: #00145D;
  text-align: center;
  font-size: 24px;
  width: 10rem;

  @media (min-width: 1920px) {
    font-size: 24px;
    width: 48%;
  }

  @media (min-width: 2560px) {
    font-size: 38px;
    width: 48%;
    line-height: 2.8rem;
	}
`;

const ImageService = styled.img `
  width: 60%;

  @media (min-width: 1920px) {
    width: 50%;
  }  
`;

const ImageServiceSmaller = styled.img `
  width: 50%;

  @media (min-width: 1920px) {
    width: 40%;
  }  
`;

const DescriptionServices = styled.p `
  color: #272727;
  font-size: 13px;
  width: 53%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 16px;
    width: 53%;
    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;
    width: 53%;
    line-height: 2rem;
	}
`;

const DescriptionServicesIntefaces = styled.p `
  color: #272727;
  font-size: 13px;
  width: 64%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 16px;
    width: 52%;
    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;
    width: 52%;
    line-height: 2rem;
	}
`;

const DescriptionServicesSecond = styled.p `
  color: #272727;
  font-size: 13px;
  width: 80%;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 16px;
    width: 62%;
    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;
    width: 62%;
    line-height: 2rem;
	}
`;

const BoxButton = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-right: 18rem;
  margin-top: -5.5rem;

  @media (min-width: 2560px) {
    margin-right: 40rem;
  }
`;

const ContainerProfit = styled.div `
  margin-top: 6rem;
  display: flex;
`;

const TextProfit = styled.p `
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 45%;
  margin-left: 11.4rem;
  margin-top: 16.5rem;

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 2.5rem;
    width: 42%;
    margin-top: 22rem;
    margin-left: 16.4rem;
  }

  @media (min-width: 2560px) {
    width: 37%;
    margin-top: 36.7rem;
  }
`;

const TextProfitBold = styled.b `
  font-weight: 600;
`;

const CircleOrange = styled.div `
  background: url(${CircleOrangeEstudio}); 
  background-repeat: no-repeat; 
  background-size: 105%;
  position: relative;
  top: 2rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1920px) {
    left: 5rem;
    background-size: 100%;
  }

  @media (min-width: 2560px) {
    left: 7rem; 
  }
`;

const TextNumberCircle = styled.h2 `
  color: #0F2B92;
  font-size: 30px;
  margin-top: -14.5rem;
  margin-left: 10px;
  font-weight: 600;

  @media (min-width: 1920px) {
    font-size: 60px;
    margin-top: -20.5rem;
  }

  @media (min-width: 2560px) {
    margin-top: -33.5rem;
  }
`;

const TextCircle = styled.p `
  margin-top: 5px;
  text-align: center;
  font-size: 11px;
  width: 78%;
  font-weight: 400;
  margin-left: 10px;
  line-height: 1rem;

  @media (min-width: 1920px) {
    font-size: 19px;
    width: 65%;
    line-height: 2rem;
  }
`;

const SecondImagePhotoEstudio = styled.img `
  width: 45%;
  margin-right: 8rem;

  @media (min-width: 1920px) {
    width: 100%;
    margin-right: 10rem;
  }

  @media (min-width: 2560px) {
    margin-right: 22rem;
	}
`;


const PartnerOverEstudio = () => {
	const isTitleEstudio = { typePage: 'Estúdio', title: 'Avançando o <br/> espaço inexplorado'};
	
	return (
	<div>
        <ContainerEstudio>
          <div>
            <PageTitle data={isTitleEstudio} isPage='isHome' />
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
          </div>
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
          <Button colorHover='#272727'>Desejo Contratar!</Button>
        </BoxButton>
        <ContainerProfit>
          <TextProfit>
            Toda vez que sua empresa contrata serviços do Estúdio Vai na Web, ela contribui diretamente 
            para <TextProfitBold> inspirar, equipar e educar mais pessoas </TextProfitBold> para a economia digital. 
          </TextProfit>
          <CircleOrange>
            <TextNumberCircle>100%</TextNumberCircle>
            <TextCircle>do lucro gerado pelo Estúdio VnW é reinvestido para formar mais pessoas.</TextCircle>
          </CircleOrange>
          <SecondImagePhotoEstudio src={SecondPhotoEstudio} alt="Foto"/>
        </ContainerProfit>
      </div>
	)
}

export default PartnerOverEstudio;
