import React from "react";
import styled from 'styled-components';

//Conponent
import PageTitle from '../pageTitle/pageTitle';

// styles
const Container = styled.div`
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

const PartnerSchols = () => {
	const isTitleSchool = { typePage: 'Escola', title: 'Uma plataforma de <br/> lançamento de estrelas' };

	return (
		<div>
			<PageTitle data={isTitleSchool} isPage='isHome' />
			<SchoolText>
				Preparamos <BoldSchool>talentos diversos de todo o Brasil</BoldSchool>, das <BoldSchool>classes C, D e E</BoldSchool>, através do 
				<BoldSchool>ensino de programação digital avançada</BoldSchool> e habilidades socioemocionais. 
				Desejamos ajudar pessoas a construir <BoldSchool>carreiras relevantes</BoldSchool> dentro do espaço profundo 
				da <BoldSchool>economia digital</BoldSchool>, injetando <BoldSchool>diversidade</BoldSchool>, promovendo <BoldSchool>inclusão</BoldSchool> e fortalecendo os 
				<BoldSchool>direitos humanos</BoldSchool> no <BoldSchool>mercado de tecnologia</BoldSchool>.
			</SchoolText>
		</div>
	)
}

export default PartnerSchols;
