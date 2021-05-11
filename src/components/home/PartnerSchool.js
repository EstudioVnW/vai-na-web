import React from "react";
import styled from 'styled-components';

//Component
import PageTitle from '../pageTitle/pageTitle';
import CardSchool from './cardSchool';
import ImageDevFront from '../../images/images/iconFront.svg';
import ImageDevMob from '../../images/images/iconMobile.svg';
import ImageDevBack from '../../images/images/iconBack.svg';
import ImageCient from '../../images/images/iconCientista.svg';

// styles
const ContainerSchool = styled.div`
	display: flex;
`;

const SchoolText = styled.p`
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

const BoldSchool = styled.b`
  font-weight: 500;
`;
const ContentCardSchool = styled.section`
  display: flex;
  width: 50%;
  margin-top: 6rem;
  margin-left: 2rem;
  flex-direction: column;
  
`;

const DivCardsTop = styled.div`
  display: flex;
  width: 70%;
  height: 45vh;
`;

const DivCardsBottom = styled.div`
  display: flex;
  width: 70%;
  height: 45vh;
`;

const ContentCardDf = styled.div`
  position: relative;
  z-index: 1;
  
`;

const ContentCardDm = styled.div`
  position: relative;
  z-index: 1;
`;

const ContentCardDb = styled.div`
  position: relative;
  z-index: 1;
`;
const ContentCardCd = styled.div`
  position: relative;
  z-index: 1;
  
`;

const ImageCard = styled.img`
	position: absolute;
	bottom: 5.8rem;
	left: 12.9rem;
	width: 3rem; 
`;



const PartnerSchols = () => {
	const isTitleSchool = { typePage: 'Escola', title: 'Uma plataforma de <br/> lançamento de estrelas' };

	return (

		<ContainerSchool>
			<div>
				<PageTitle data={isTitleSchool} isPage='isHome' />
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
			</div>
			<ContentCardSchool>
				<DivCardsTop>
					
					<ContentCardDf>
						<CardSchool title='Desenvolvedor Front-End' description='Desenvolve 
                websites e aplicações responsivas. É o profissional responsável por dar 
                vida e movimento às interfaces digitais. Ou seja, atua desenvolvendo 
                os componentes de um site ou aplicativo que vão interagir diretamente 
                com os usuários.' />
						<ImageCard src={ImageDevFront} />
					</ContentCardDf>

					<ContentCardDm>
						<CardSchool title='Desenvolvedor Mobile' description='Desenvolve aplicativos 
                nativos para Android e iOS. É o profissional responsável pelo planejamento, 
                elaboração, testes e implementação de softwares para dispositivos móveis 
                (Smartphones, smartwatches, tablets, câmeras…).' />
						<ImageCard src={ImageDevMob} />
					</ContentCardDm>
					
				</DivCardsTop>
				<DivCardsBottom>	

					<ContentCardDb>
						<CardSchool background='rgba(253,231,169,0.4)' title='Desenvolvedor Back-end' description='É o profissional 
                responsável por construir e organizar as engrenagens, banco de dados e 
                servidores que possibilitam os sites e sistemas funcionarem.' />
						<ImageCard src={ImageDevBack} />
					</ContentCardDb>
						
					
					<ContentCardCd>
						<CardSchool background='rgba(254,213,178,0.5)' title='Cientista de Dados' description='Uma nova geração de 
                especialistas analíticos, aptos a resolverem problemas complexos de negócios 
                a partir da coleta, estruturação e gerenciamento de uma quantidade massiva de 
                dados.' />
						<ImageCard src={ImageCient} />
					</ContentCardCd>
				</DivCardsBottom>
			</ContentCardSchool>
		</ContainerSchool>
	)
}

export default PartnerSchols;
