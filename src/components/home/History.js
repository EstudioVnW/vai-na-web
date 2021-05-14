import React from "react";
import styled from 'styled-components';

//components
import PageTitle from '../pageTitle/pageTitle';

// images
import Photo from '../../images/images/Grupo10709.png';

// styles
const Container = styled.div`
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ContainerTextMain = styled.div `
	width: 51%;

	@media (min-width: 1920px) {
		width: 70%;
	} 

	@media (max-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const TextHistory = styled.p `
	color: #272727;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.8rem;
	width: ${props => props.width};

	@media (min-width: 1920px) {
		line-height: 2.5rem;
		font-size: 22px;
	}
	  
	  @media (max-width: 768px) {
		width: 77%;
	}

	@media (max-width: 425px) {
		width: 100%;
		font-size: 	1rem;
		font-weight: 400;
		margin-left: ${props => props.left};	
	}
`;

const TextBlueHistory = styled.p `
	color: #0F2B92;
	font-size: 22px;
	width: 84%;
	font-weight: 700;
	line-height: 1.5;
	padding: 1.5rem 0px;

	@media (min-width: 1920px) {
		font-size: 28px;
		width: 69%;
	}

	@media (max-width: 768px) {
		width: 78%;
	}

	@media (max-width: 425px) {
		width: 96%;
		font-size: 1.8125rem;
	}
`;

const ContainerImage = styled.div `
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: 3rem;

	@media (min-width: 1920px) {
		width: 30%;
	} 

	@media (max-width: 768px) {
		width: 70%;
	}

	@media (max-width: 425px) {
		width: 100%;
		margin-top: 0rem;
	}
`;

const Image = styled.img `
	width: 100%;

	@media (min-width: 1920px) {
		width: 35rem;
	} 

	@media (max-width: 425px) {
		width: 20rem;
	}
`;

const History = () => {
	const isTitleHistory = { typePage: 'História', title: 'A origem <br/> do nosso brilho'};

	return (
	<div>
		<Container>
			<ContainerTextMain>
			<PageTitle data={isTitleHistory} isPage='isHome' />
					<TextHistory left='-4rem' >
						Uma vez, o meu pai ouviu a voz do futuro, que dizia:
					</TextHistory>
					<TextBlueHistory>
						“Saber utilizar um computador é o passaporte para construir um mundo novo”.
					</TextBlueHistory>
					<TextHistory width='66%'>
						O meu pai que economizava para comprar um carro novo, comprou o computador. E eu comecei a minha história. 
						Fui desenhando um amanhã após o outro,
					</TextHistory>
					<TextHistory width='85%' >
						abrindo estradas, conectando e reconectando o brilho de cada novo código. 
						Estradas que viraram pontes, que viraram aerovias, que viraram multiversos. Que não conectavam apenas códigos,
						mas também mentes e corações. Uma nova dimensão para a tecnologia foi criada e ganhou alma. Agora, 
						novas histórias estão prontas para começar.
					</TextHistory>
			</ContainerTextMain>
			<ContainerImage>
				<Image src={Photo} alt='Foto' />
			</ContainerImage>
		</Container>
	</div>
	)
}

export default History;
