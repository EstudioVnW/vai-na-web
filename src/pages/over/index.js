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

const ContainerStudent = styled.div`
  max-width: 1440px;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const ImageStudent = styled.img`
  width: 100%;
  margin-top: 2rem;
`;

const StudentParagraph = styled.p`
  color: #0F2B92;
  font-size: 1.25rem;
  position: absolute;
  top: 110px;
  left: 95px;

  @media (max-width: 768px) {
    position: initial;
    margin-left: 1rem;
	}
`;

const ContainerBox = styled.div`
  /* max-width: 1440px; */
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7rem auto 0;
  /* margin-top: 7rem; */

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
  width: 31.5%;
  margin-left: 2rem;

  @media (max-width: 1026px) {
    width: 55.5%;
	}

  @media (max-width: 768px) {
    width: 90%;
	}

  @media (max-width: 648px) {
    margin-left: 0;
    margin-bottom: 2rem;
	}
`;

const ContainerTitle = styled.h2`
  color: #0F2B92;
  font-weight: 200;
  font-size: 3.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin: 0 0 2rem 10rem;
	}

  @media (max-width: 648px) {
    margin: 0 0 2rem 3rem;
    font-size: 2.8rem;
	}

  @media (max-width: 450px) {
    margin: 0 0 2rem 1rem;
    font-size: 2.3rem;
	}
`;

const ContainerParagraph = styled.p`
  /* width: 55%; */
  color: #272727;
  font-size: 1.4rem;
  line-height: 2rem;

  @media (max-width: 648px) {
    font-size: 1.2rem;
	}
`;

const ContainerSubBoxOds = styled.div`
  max-width: 1440px;
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 9rem auto;

  @media (max-width: 1026px) {
    width: 75%;
	}

  @media (max-width: 768px) {
    flex-direction: column;
	}

  p {
    width: 40%;
    color: #272727;
    font-size: 1.4rem;
    margin-right: 4rem;
    line-height: 2rem;

    @media (max-width: 768px) {
      width: 90%;
      margin-right: 0;
	  }

    @media (max-width: 648px) {
      font-size: 1.2rem;
	  }
  }
`;

const ImageDesk = styled.img`
  width: 48%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageMob = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 2rem;
  }
`;

const ContainerSubValores = styled.div`
  max-width: 1440px;
  width: 65%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media (max-width: 1026px) {
    width: 80%;
	}

  h2 {
    color: #0F2B92;
    font-weight: 200;
    font-size: 3.2rem;

    @media (max-width: 768px) {
      align-self: baseline;
	  }

    @media (max-width: 648px) {
      font-size: 2.8rem;
	  }

    @media (max-width: 450px) {
      font-size: 2.3rem;
	  }
  }
`;

const ContainerImages = styled.div`
  /* width: 65%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* justify-content: space-around; */
  margin-top: 5rem;

  /* @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
	} */

  p {
    width: 45%;
    color: #00145D;
    font-size: 1.4rem;
    text-align: center;
    margin: 2rem 0;

    @media (max-width: 768px) {
      width: 25%;
      background-color: #FFFFFF;
	  }

    @media (max-width: 648px) {
      width: 50%;
	  }
  }

  div {
    width: 70%;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-evenly;

    @media (max-width: 1440px) {
      width: 85%;
    }

    @media (max-width: 768px) {
      /* align-items: center; */
      width: 100%;
      flex-direction: column;
	  }
  }
`;

const ContainerImageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Line = styled.span`
  /* width: 2px; */
  border-left: 2px solid #FED5B2;
  transform: rotate(90deg);
  position: relative;
  bottom: 3rem;
  z-index: -1;

  @media (max-width: 768px) {
    border: 2px solid #FED5B2;
    bottom: 0;
  }
`;

const Box = styled.span`
  /* width: 337px;
  height: 338px; */
  width: 13rem;
  height: 13rem;
  background-color: #FDE7A9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  img {
    width: 50%;
  }
`;

const Index = () => {
  const isTitle = {
    title: 'Sobre nós',
    excerpt: '“Quando educamos um indivíduo, ajudamos a transformar famílias, territórios e toda uma geração, construindo valor social e econômico para o país.”',
    author: 'Aline Fróes,',
    office: 'cofundadora do Vai na Web',
  };

  return (
    // <Container>
    <Layouts>
      <PageTitle data={isTitle} isPage='over' fontSize='3rem' />
      <ContainerStudent>
        <ImageStudent src={PhotoEstudio} alt='image' />
        <StudentParagraph><b>Renan Carvalho,</b> texto legenda da foto.</StudentParagraph>
      </ContainerStudent>
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
        {/* <div> */}
        <p><b>Contribuindo diretamente com 7 dos 17 ODS,</b> o Vai na Web é uma grande força em prol
           da qualificação de pessoas, equidade de gênero, geração de empregos e redução da
           desigualdade social no país.</p>
        <ImageDesk src={Sustentabilidade} alt='sustentabilidade' />
        <ImageMob src={SustentabilidadeMobile} alt='sustentabilidadeMob' />
        {/* </div> */}
      </ContainerSubBoxOds>
      <ContainerSubValores>
        <h2>Valores</h2>
        <ContainerImages>
          <div>
            <ContainerImageBox>
              <Box>
                <img src={MãosDadas} alt='valores' />
              </Box>
              <p>Colaboração em Rede</p>
            </ContainerImageBox>
            <Line></Line>
            <ContainerImageBox>
              <Box>
                <img src={Galery} alt='valores' />
              </Box>
              <p>Diversidade</p>
            </ContainerImageBox>
            <Line></Line>
            <ContainerImageBox>
              <Box>
                <img src={Globo} alt='valores' />
              </Box>
              <p>Impacto Social</p>
            </ContainerImageBox>
          </div>
        </ContainerImages>
      </ContainerSubValores>
    </Layouts>
    // </Container>
  );
}

export default Index;
