
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import CardList from '../../components/blog/cardList';
import Footer from '../../components/footer';

// styles
const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  /*justify-content: center;
  align-items: center; */
`;
const ContentSlider = styled.section`
  /* display: flex;
  justify-content: space-between; */
  /* width: 80%;
  margin: auto; */
  /* display: grid;
	grid-template-columns: 3, 1fr;  */
  display: grid;
  column-gap: 77px;
  /* grid-template-columns: repeat(3, 31%); */
  grid-template-columns: repeat(3, 1fr);

  padding: 44.2px 0 56.2px 0;
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
      }
    }
  }
`

const postList = [
  {
    date: '24 de novembro - 2020',
	  status: 'prêmio',
    title: 'Vai na Web é finalista em prêmio dedicado às mulheres da tecnologia global',
  	description: 'Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa'
  },
  {
    date: '25 de novembro - 2020',
	  status: 'prêmio',
    title: 'Bem-vinda, turma de 2021!',
  	description: 'Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa'
  },
  {
    date: '26de novembro - 2020',
	  status: 'prêmio',
    title: '“Vamos levantar a galera para ocupar todos os espaços”',
  	description: 'Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa'
  },
  {
    date: '25 de novembro - 2020',
	  status: 'prêmio',
    title: 'Vai na Web é finalista em prêmio dedicado às mulheres da tecnologia global',
  	description: 'Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa'
  },
  {
    date: '26de novembro - 2020',
	  status: 'prêmio',
    title: 'Vai na Web é finalista em prêmio dedicado às mulheres da tecnologia global',
  	description: 'Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa'
  },
]

const Index = ({ data }) => {
  return (
    <>
      <Header />
      {/* {data.posts.nodes.map(item => <h1> {item.title}</h1>)} */}
      {/* {postList.map(item => <CardList data={item}/>)} */}
    <ContainerBlog>
      <CardList data={postList[0]}/>
      <ContentSlider>
        {postList.map(item => <CardList data={item} slider/>)}
      </ContentSlider>
    </ContainerBlog>
      <Footer />
    </>

  )
}


export default Index;
