import React, { useState } from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";

//Components
import PageTitle from '../../components/pageTitle/pageTitle';
import Layouts from '../../components/Layouts';

//Assets
import iconOpenModal from '../../images/icons/iconMore.svg';

// styles
const Container = styled.div`
  width: 100%;
`;

const Content = styled.section`
	padding: 6.706rem 0 12.375rem 0;
	width: 65%;
	margin: auto;
`;

const ContentBox = styled.div`
	padding-bottom: 1.188rem;
	/* min-height: 4.5rem; */
`;

const ContentQuestion = styled.div`
	/* position: relative;
	top: 	1rem; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.875rem;
	height: 4.5rem;
	background: #FED5B2;
	border-radius: 8px;

	:hover {
		background: #FFAC2D;

		h1 {
			font-size: 1.3rem;
			font-weight: 600;	
		}
	}
`;

const Question = styled.h1`
  font-size: 1.25rem;
	font-weight: 400;
	color: #272727;
`;

const Img = styled.img`
	cursor: pointer;
`;

const ContentAnswer = styled.div`
	display: ${props => props.display ? 'flex' : 'none'};
	padding: 2.5rem 2.875rem;
	/* margin-bottom: 1.188rem; */
	background: red;
`;

const Answer = styled.p`
/* background: #fef9e9; */
	font-size: 1.625rem;
	color: #272727;
	line-height: 2.75rem;
`;

export const query = graphql`
  query  {
    posts: allGraphCmsFaq {
      nodes {
				id
				answer {
					html
				}
				question
			}
    }
  }
`

const listFaq = [
	{
		question: 'O que é?',
		answer: '1 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'Pra quem é?',
		answer: '2 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'Onde é?',
		answer: '3 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'São só para pessoas negras?',
		answer: '4 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'É só pra quem é da favela?',
		answer: '5 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'Qual é o valor do investimento?',
		answer: '6 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'O que são linguagens de programação?',
		answer: '7 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'O que é programação?',
		answer: '8 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'O que é e o que faz um desenvolvedor front-end?',
		answer: '9 Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'O que são aulas de habilidades socioemocionais?',
		answer: ' Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr', 
	},
	{
		question: 'O que são aulas de habilidades socioemocionais?',
		answer: 'Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'O Vai na Web encaminha para o mercado de trabalho?',
		answer: 'Sim, o nosso programa é focado no desenvolvimento das principais demandas do mercado e está em contato permanente com empresas parceiras, do setor, o que oferece aos estudantes formados oportunidades reais de uma carreira.',
	},
	{
		question: 'O Vai na Web encaminha para o mercado de trabalho?',
		answer: 'Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'Quanto tempo dura o programa?',
		answer: 'Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
	{
		question: 'Como faço para fazer parte?',
		answer: 'Lorem Ipsum is simply dummy answer of the printing and typesetting industry. Lorem Ipsum has been the industr',
	},
]

const Index = ({ data }) => {
	const [isSelected, setSelected] = useState(undefined);

  const isTitle = { typePage: 'Faq', title: 'Perguntas frequentes' };

	const handleClicked = (item) => {
		if(item === isSelected) {
			setSelected(false);
		} else {
			setSelected(item);
		}
	}

	return (
    <Layouts>
			<Container>
				<PageTitle data={isTitle}/>
				<Content>
					{listFaq.map((item, index) => (
						<ContentBox key={index}>
							<ContentQuestion>
								<Question>{item.question}</Question>
								<Img src={iconOpenModal} alt='Abrir detalhe' onClick={() => handleClicked(index)}/>
							</ContentQuestion>
							<ContentAnswer display={index === isSelected}>
								<Answer>{item.answer}</Answer>
							</ContentAnswer>
						</ContentBox>
					))}
				</Content>
			</Container>
		</Layouts>
	)
}

export default Index;
