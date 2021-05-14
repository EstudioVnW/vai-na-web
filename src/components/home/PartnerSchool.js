import React from "react";
import styled from 'styled-components';

//Component
import PageTitle from '../pageTitle/pageTitle';
import CardSchool from './cardSchool';
import Button from '../button/Button';

//Images
import ImageDevFront from '../../images/images/iconFront.svg';
import ImageDevMob from '../../images/images/iconMobile.svg';
import ImageDevBack from '../../images/images/iconBack.svg';
import ImageCient from '../../images/images/iconCientista.svg';

// styles
const ContainerSchool = styled.div`
	height: auto;
	margin-bottom: 5rem;
	/* @media (min-width: 1920px) {
		/* height: 90vh; */
	  }
	/* @media (min-width: 1440px) {
		/* height: 70vh; */
	} */
	/* @media (max-width: 768px) {
		display: flex;
		flex-direction: column; */
	  } */
`;

const Content = styled.div`
	display: flex;

	@media ( max-width: 1035px ) {
		flex-direction: column;
		align-items: center;
	}

`;

const WrapperContent = styled.div`
	width: 30%;
	@media (max-width: 1035px) {
		width: 100%;
	}
`;

const SchoolText = styled.p`
	width: 100%;
	max-width: 17.3125rem;	
	font-size: .938rem;
	font-weight: 400;
	line-height: 1.5rem;
	/* margin-left: 11.4rem;
	margin-top: -1rem; */
	margin-bottom: 2rem;
	@media (max-width: 1035px) {
		width: 100%;
		max-width: 42rem;
  }
	/* @media (min-width: 1024px) { */
		/* margin-left: 11.4rem; */
		/* font-size: 13px;
		width: 17.5rem; */
	} */
`;

const BoldSchool = styled.b`
  font-weight: 600;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7rem;
  /* @media (min-width: 2560px) {
    /* margin-right: 40rem; */
		/* height: 11rem; */
  }
  /* @media (min-width: 1920px) { */
		/* margin-right: 30rem; */
		/* height: 8rem; */
  } */
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const BoxButtonTop = styled.div`
	width: 13.5rem;
	height: 3.375rem;
  margin-bottom: 1rem;
	/* @media (min-width: 2560px) {
		width: 15.5rem;
		height: 4.375rem;
	} */
	/* @media (min-width: 1920px) { */
		/* margin-right: 1rem; */
		/* width: 15.5rem;
		height: 4.375rem;
	} */
`;

const BoxButtonBottom = styled.div`
	width: 13.5rem;
	height: 3.375rem;
	margin-left: 4rem;
	/* @media (min-width: 2560px) {
		margin-left: 14rem;
	}
	@media (min-width: 1920px) {
		margin-left: 5rem;
		width: 15.5rem;
		height: 4.375rem; */
	}
`;

const ContentCardSchool = styled.div`
  display: flex;
  width: 70%;
  padding-top: 6rem;
	justify-content: flex-end;
  flex-direction: column;	

  @media (max-width: 1024px) {
		width: 100%;
		flex-direction: row;
    overflow-x: scroll;
  }

  /* @media (min-width: 1440px) { */
	/* margin-top: 4rem; */
	/* width: 50%; */
	/* height: 35vh; */
  } */
`;

const DivCardsTop = styled.div`
  display: flex;
  /* width: 70%; */
  /* height: 45vh; */
	padding-bottom: 2.688rem;
  /* @media (min-width: 1920px) {
	/* height: 35vh; */
  } */
`;

const DivCardsBottom = styled.div`
  display: flex;
	margin-left: -5rem;
  /* height: 45vh; */
  @media (max-width: 1024px) {
		margin: 0;
  }
`;

const ContentCard = styled.div`
  position: relative;
	padding-right: 2.625rem;
	/* padding: 2.563rem; */
  /* margin-left: -7rem; */
  z-index: 1;
  /* @media (min-width: 1440px) {
	/* margin-top: 4rem; */
  }
  /* @media (min-width: 1024px) { */
	/* margin-top: 2rem; */
	/* margin-left: -5rem; */
  } */
  
`;

const PartnerSchols = () => {
	const isTitleSchool = { typePage: 'Escola', title: 'Uma plataforma de <br/> lançamento de estrelas'};

	return (
		<ContainerSchool>
				<PageTitle data={isTitleSchool} isPage='isHome' />
				<Content>
					<WrapperContent>
						<SchoolText>
							Preparamos <BoldSchool>talentos diversos de todo o Brasil</BoldSchool>,
						das <BoldSchool>classes C, D e E</BoldSchool>, através do <BoldSchool> ensino de
						programação digital avançada</BoldSchool> e habilidades socioemocionais.
						Desejamos ajudar pessoas a construir <BoldSchool>carreiras relevantes</BoldSchool>
						dentro do espaço profundo da <BoldSchool>economia digital</BoldSchool>, injetando
						<BoldSchool> diversidade</BoldSchool>, promovendo <BoldSchool> inclusão </BoldSchool>
						e fortalecendo os <BoldSchool>direitos humanos</BoldSchool> no <BoldSchool>mercado
						de tecnologia</BoldSchool>.
						</SchoolText>

						<BoxButton>
							<BoxButtonTop>
								<Button colorHover='#272727' >Quero ser estudante!</Button>
							</BoxButtonTop>
							<BoxButtonBottom>
								<Button background='none' border='2px solid #00145D' color='#00145D'> Quero ser vontuntário!</Button>
							</BoxButtonBottom>
						</BoxButton>
					</WrapperContent>
					<ContentCardSchool>
						<DivCardsTop>

							<ContentCard>
								<CardSchool title='Desenvolvedor Front-End' description='Desenvolve 
										websites e aplicações responsivas. É o profissional responsável por dar 
										vida e movimento às interfaces digitais. Ou seja, atua desenvolvendo 
										os componentes de um site ou aplicativo que vão interagir diretamente 
										com os usuários.' image={ImageDevFront} />
								{/* <ImageCard src={ImageDevFront} /> */}
							</ContentCard>

							<ContentCard>
								<CardSchool title='Desenvolvedor Mobile' description='Desenvolve aplicativos 
										nativos para Android e iOS. É o profissional responsável pelo planejamento, 
										elaboração, testes e implementação de softwares para dispositivos móveis 
										(Smartphones, smartwatches, tablets, câmeras…).' image={ImageDevMob} />
								{/* <ImageCard src={ImageDevMob} /> */}
							</ContentCard>

						</DivCardsTop>
						<DivCardsBottom>

							<ContentCard>

								<CardSchool background='rgba(253,231,169,0.4)' title='Desenvolvedor Back-end' description='É o profissional 
										responsável por construir e organizar as engrenagens, banco de dados e 
										servidores que possibilitam os sites e sistemas funcionarem.' image={ImageDevBack} soon />
								{/* <ImageCard src={ImageDevBack} /> */}
							</ContentCard>


							<ContentCard>
								<CardSchool background='rgba(254,213,178,0.5)' title='Cientista de Dados' description='Uma nova geração de 
										especialistas analíticos, aptos a resolverem problemas complexos de negócios 
										a partir da coleta, estruturação e gerenciamento de uma quantidade massiva de 
										dados.' image={ImageCient} soon />
								{/* <ImageCard src={ImageCient} /> */}
							</ContentCard>
						</DivCardsBottom>
					</ContentCardSchool>
				</Content>
		</ContainerSchool>
	)
}

export default PartnerSchols;