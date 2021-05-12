import React from "react";
import styled from 'styled-components';

//Components
import Layouts from '../../components/Layouts';
import PageTitle from '../../components/pageTitle/pageTitle';

//images
import PhotoEstudio from '../../images/images/VNW2-15.png';
import SecondPhotoEstudio from '../../images/images/VNW2-63.png';
import Sustentabilidade from '../../images/images/sustentabilidade.svg';
import SustentabilidadeMobile from '../../images/images/sustentabilidadeMobile.svg';
import MãosDadas from '../../images/images/mãosDadas.svg';
import Galery from '../../images/images/galery.svg';
import Globo from '../../images/images/globo.svg';


// styles
const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ContainerImage = styled.div`
  max-width: 1440px;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%100vh;
  margin-top: 2rem;
`;

const ContainerBox = styled.div`
  max-width: 1440px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 7rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
	}

  img {
    width: 35%;

    @media (max-width: 768px) {
      width: 90%;
	  }
  }
`;

const ContainerSubBox = styled.div`
  width: 45%;
  margin-left: 2rem;

  @media (max-width: 768px) {
    width: 90%;
	}
`;

const ContainerTitle = styled.h2`
  color: #0F2B92;
  font-weight: 200;
  font-size: 3.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin: 0 0 2rem 3rem;
	}
`;

const ContainerParagraph = styled.p`
  color: #272727;
  font-size: 1.5rem;
`;

const ContainerSubBoxOds = styled.div`
  max-width: 1440px;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 9rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
	}

  p {
    width: 33%;
    color: #272727;
    font-size: 1.5rem;
    margin-right: 5rem;

    @media (max-width: 768px) {
      width: 90%;
      margin-right: 0;
	  }
  }
`;

const ImageDesk = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageMob = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ContainerSubValores = styled.div`
  max-width: 1440px;
  width: 85%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  margin: 0 auto;

  h2 {
    color: #0F2B92;
    font-weight: 200;
    font-size: 3.2rem;

    @media (max-width: 768px) {
      align-self: baseline;
	  }
  }
`;

const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5rem;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
	}

  p {
    color: #00145D;
    font-size: 1.6rem;
    text-align: center;
    margin: 2rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  border-left: 2px solid #FED5B2;
  transform: rotate(90deg);
  z-index: -1;
`;

const Box = styled.span`
  width: 337px;
  height: 338px;
  background-color: #FDE7A9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  const isTitle = {
    title: 'Sobre nós',
    excerpt: '“Quando educamos um indivíduo, ajudamos a transformar famílias, territórios e toda uma geração, construindo valor social e econômico para o país.”',
    author: 'Aline Fróes, ',
    office: 'cofundadora do Vai na Web',
  };

  return (
    // <Container>
    <Layouts>
      <PageTitle data={isTitle} isPage='over' fontSize='3.53rem' />
      <ContainerImage>
        <Image src={PhotoEstudio} alt='image' />
      </ContainerImage>
      <ContainerBox>
        <img src={SecondPhotoEstudio} alt='image' />
        <ContainerSubBox>
          <ContainerTitle>Uma escola que transforma vidas</ContainerTitle>
          <ContainerParagraph><b>Criado em 2017,</b> o Vai na Web Escola surgiu com a missão de democratizar
            linguagens digitais avançadas, promovendo valor e transformação social e econômica
            para pessoas, territórios e empresas. O Complexo de Favelas de Alemão, no Rio de Janeiro,
            que possui 16 favelas e mais de 160 mil pessoas, foi o primeiro pólo de ensino do programa.
            Seguido da unidade dentro da comunidade do Morro dos Prazeres, também no Rio de Janeiro. Em 2021,
            com a pandemia, o Vai na Web se adaptou e expandiu as suas operações. Através de aulas ao vivo
            e 100% online, o programa passou a desenvolver novos profissionais de tecnologia por todo o Brasil.
          </ContainerParagraph>
        </ContainerSubBox>
      </ContainerBox>
      <ContainerSubBoxOds>
        <p><b>Contribuindo diretamente com 7 dos 17 ODS,</b> o Vai na Web é uma grande força em prol
           da qualificação de pessoas, equidade de gênero, geração de empregos e redução da
           desigualdade social no país.</p>
        <ImageDesk src={Sustentabilidade} alt='sustentabilidade' />
        <ImageMob src={SustentabilidadeMobile} alt='sustentabilidadeMob' />
      </ContainerSubBoxOds>
      <ContainerSubValores>
        <h2>Valores</h2>
        <ContainerImages>
          <div>
            <Box>
              <img src={MãosDadas} alt='valores' />
            </Box>
            <p>Colaboração em Rede</p>
          </div>
          <Line></Line>
          <div>
            <Box>
              <img src={Galery} alt='valores' />
            </Box>
            <p>Diversidade</p>
          </div>
          <Line></Line>
          <div>
            <Box>
              <img src={Globo} alt='valores' />
            </Box>
            <p>Impacto Social</p>
          </div>
        </ContainerImages>
      </ContainerSubValores>
    </Layouts>
    // </Container>
  );
}

export default Index;
