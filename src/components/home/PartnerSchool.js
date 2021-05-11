import React from "react";
import styled from 'styled-components';

//Component
import PageTitle from '../pageTitle/pageTitle';
import CardSchool from './cardSchool';

// styles
const ContainerSchool = styled.div`
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
`;

const DivCards = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-evenly;
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
				<BoldSchool>diversidade</BoldSchool>, promovendo <BoldSchool>inclusão</BoldSchool>
				e fortalecendo os <BoldSchool>direitos humanos</BoldSchool> no <BoldSchool>mercado
				de tecnologia</BoldSchool>.
				</SchoolText>
			</div>
			<ContentCardSchool>
				<DivCards>
					<ContentCardDf>
						<CardSchool title='Desenvolvedor Front-End' description='Desenvolve 
                websites e aplicações responsivas. É o profissional responsável por dar 
                vida e movimento às interfaces digitais. Ou seja, atua desenvolvendo 
                os componentes de um site ou aplicativo que vão interagir diretamente 
                com os usuários.' />
					</ContentCardDf>
					<ContentCardDb>
						<CardSchool background='#FDE7A9' title='Desenvolvedor Back-end' description='É o profissional 
                responsável por construir e organizar as engrenagens, banco de dados e 
                servidores que possibilitam os sites e sistemas funcionarem.' />
					</ContentCardDb>
				</DivCards>
				<DivCards>
					<ContentCardDm>
						<CardSchool title='Desenvolvedor Mobile' description='Desenvolve aplicativos 
                nativos para Android e iOS. É o profissional responsável pelo planejamento, 
                elaboração, testes e implementação de softwares para dispositivos móveis 
                (Smartphones, smartwatches, tablets, câmeras…).' />
					</ContentCardDm>
					<ContentCardCd>
						<CardSchool background='#FED5B2' title='Cientista de Dados' description='Uma nova geração de 
                especialistas analíticos, aptos a resolverem problemas complexos de negócios 
                a partir da coleta, estruturação e gerenciamento de uma quantidade massiva de 
                dados.' />
					</ContentCardCd>
				</DivCards>
			</ContentCardSchool>
		</ContainerSchool>
	)
}

export default PartnerSchols;
