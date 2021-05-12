
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Card from '../../components/blog/card';
import PostSlider from '../../components/postSlider/postSlider';
import PageTitle from '../../components/pageTitle/pageTitle';
import Layouts from '../../components/Layouts';

// styles
const ContainerBlog = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContantCard = styled.div`
  width: 80%; /* tamanho do container do post */

  @media (max-width: 768px) {
		width: 100%; 
	}
`;

const Text = styled.h3`
  padding: 5rem 0;
	font-size:  ${props => props.slider ? '1.875rem' : '2.75rem'};
	font-weight: 700;
	color: #FDE7A9;
	font-family: "usual";
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        id
        title
        excerpt 
        publishedAt
        publishDate
        createdAt
        tags {
          name
        }
        content {
          html
        }
        cover {
          url
        }
        authors {
          id
          name
          jobTitle
          socialNetworkLink
          bio {
            html
          }
          photo {
            url
          }
        }
      }
    }
  }
`

const renderBlog = (data) => {
  const firstItem = data && data[0];
  const listSlider = data && data.filter(item => item.id !== firstItem.id);

  return (
    <>
      <ContantCard>
        <Card data={firstItem} />
      </ContantCard>
      <PostSlider data={listSlider} />
    </>
  )
}

const Index = ({ data }) => {
  const item = data && data.posts.nodes;
  const title = `Radar <br/> Vai na Web`;
  const isTitle = { typePage: 'Blog', title: title };

  return (
    <Layouts>
      <PageTitle data={isTitle} />
      <ContainerBlog>
        {!item.length
          ? <Text>Não há conteúdo no momento</Text>
          : renderBlog(item)
        }
      </ContainerBlog>
    </Layouts>
  )
}

export default Index;
