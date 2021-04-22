
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';


//Components
import Layouts from '../../components/Layouts';
import Card from '../../components/blog/card';
import PostSlider from '../../components/postSlider/postSlider';

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
`;


const Text = styled.h3`
	font-size:  ${props => props.slider ? '1.875rem' : '2.75rem'};
	font-weight: 700;
	color: #FDE7A9;
	font-family: "usual";
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
        excerpt 
        publishedAt
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

const renderBlog = (info) => (
  <>
    <ContantCard>
      <Card data={info[0]} />
    </ContantCard>
    <PostSlider data={info} />
  </>
)

const Index = ({ data }) => {
  const infoData = data?.posts?.nodes;
  const isData = !infoData.length;
  const isTitle = { typePage: 'Blog', title: 'Radar Vai na Web'};

  return (
    <Layouts pageTitle={isTitle}>
      <ContainerBlog>
        {isData
          ? <Text>Não há conteúdo no momento</Text>
          : renderBlog(infoData)
        }
      </ContainerBlog>
    </Layouts>

  )
}


export default Index;
