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

	@media (max-width: 768px) {
		padding-top: 7.688rem;
		width: 90%;
	}
`;

const ContentBox = styled.div`
	padding-bottom: 1.188rem;
`;

const ContentQuestion = styled.div`
	position: relative;
	top: 	1rem;
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
	background: rgb(253 231 169 / 25%);
`;

const Answer = styled.p`
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

const Index = ({ data }) => {
	const [isSelected, setSelected] = useState(undefined);

  const isTitle = { typePage: 'Faq', title: 'Perguntas <br/> frequentes' };

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
					{data?.posts?.nodes.map((item, index) => (
						<ContentBox key={index}>
							<ContentQuestion>
								<Question>{item.question}</Question>
								<Img src={iconOpenModal} alt='Abrir detalhe' onClick={() => handleClicked(index)}/>
							</ContentQuestion>
							<ContentAnswer display={index === isSelected}>
								<Answer dangerouslySetInnerHTML={{ __html: item.answer.html}}></Answer>
							</ContentAnswer>
						</ContentBox>
					))}
				</Content>
			</Container>
		</Layouts>
	)
}

export default Index;
