import React from "react";
import styled from 'styled-components';

//Components
import Header from '../../components/header';

//Assets
import iconOpenModal from '../../images/icons/iconMore.svg';

// styles
const Container = styled.div`
  width: 100%;
`;

const Content = styled.section`
	width: 75%;
	margin: auto;
`;

const Title = styled.h1`
	padding: 0.5rem 1.125rem;
  font-size: 1.125rem;
	color: #FFAC2D;
	width: fit-content;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
	text-transform: uppercase;
`;

const Subtitle = styled.h2`
  width: 100%;
	font-size: 3.75rem;
	color: #FDE7A9;

	span {
		color: #FF611E;
	}
`;

const ContentTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.875rem 0 3.168rem;
	height: 5.5rem;
	background: #FED5B2;
	border-radius: 8px;

	:hover {
		background: #FFAC2D;
	}
`;

const TitleFaq = styled.h1`
  font-size: 1.125rem;
	color: #272727;
`;

const Description  = styled.p`
	padding: 2.5rem 2.875rem;
	margin-bottom: 1.188rem;
	font-size: 1.625rem;
	color: #272727;
	line-height: 2.75rem;
	background: #fef9e9;
`;

const listFaq = [
	{
		title: 'O que é?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'Pra quem é?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'Onde é?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'São só para pessoas negras?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'É só pra quem é da favela?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'Qual é o valor do investimento?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O que são linguagens de programação?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O que é programação?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O que é e o que faz um desenvolvedor front-end?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O que são aulas de habilidades socioemocionais?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O que são aulas de habilidades socioemocionais?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'O Vai na Web encaminha para o mercado de trabalho?',
		description: 'Sim, o nosso programa é focado no desenvolvimento das principais demandas do mercado e está em contato permanente com empresas parceiras, do setor, o que oferece aos estudantes formados oportunidades reais de uma carreira.',
	},
	{
		title: 'O Vai na Web encaminha para o mercado de trabalho?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'Quanto tempo dura o programa?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		title: 'Como faço para fazer parte?',
		description: 'Lorem Ipsum is simply dummy description of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
]

const Layouts = () => (
	<Container>
		<Header />
		<Title>Faq</Title>
		<Subtitle><span>//</span> Perguntas frequentes</Subtitle>
		<Content>
			{listFaq.map(item => (
				<>
					<ContentTitle>
						<TitleFaq>{item.title}</TitleFaq>
						<img src={iconOpenModal} alt='Abrir detalhe' />
					</ContentTitle>
					<Description>{item.description}</Description>
				</>
			))}
		</Content>
	</Container>
)

export default Layouts;
