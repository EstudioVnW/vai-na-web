import React from "react"
import { graphql } from "gatsby"
// import { Helmet } from "react-helmet"
import styled from 'styled-components';

// Components
import CardAuthor from '../components/blog/cardAuthor';
import Layout from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle'

// styles
const Container = styled.section`	
  margin-top: -6rem;
`;

const ContainerMain = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  p {
    font-weight: 400;
    width: 48%;
    font-size: 18px;
    line-height: 2rem;
    margin-top: 1.8rem;
    color: #2F2F2F;
    };
`;

const TextDescription = styled.article `
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 972px;
    height: 590px;
    border: 2px solid #00145D;
    border-radius: 20px;
    object-fit: fill;

    :nth-child(2n + 1) {
      border: 2px solid #00145D;
      width: 576px;
      height: 283px;
      object-fit: fill;
    }

    :nth-child(3n + 1) {
      width: 679px;
      height: 577px;
      border: none;
      border-radius: 0;
      object-fit: fill;
    }
  }

  p {
    width: 48%;
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 1.8rem;
    color: #2F2F2F;
    };

    blockquote {
    width: 63%;
    font-size: 22px;
    line-height: 2.5rem;
    margin-top: 2rem;
    color: #141414;
    };

    blockquote strong {
    width: 63%;
    font-size: 22px;
    line-height: 2.5rem;
    font-weight: 400;
    color: #141414;
    };
`;

export default function PostBlog({ data }) {
  const isTitle = {
    date: data.item.publishedAt, 
    title: data.item.title,
    excerpt: data.item.excerpt,
  };

  return (
    <Layout>
      <PageTitle data={isTitle} isPage='postBlog'/>
      <Container>
        <ContainerMain>
          <TextDescription dangerouslySetInnerHTML={{ __html: data.item.content.html }}></TextDescription>		
        </ContainerMain>
        <CardAuthor author={data.item.authors[0]}/> 
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    item: graphCmsPost(id: { eq: $id }) {
      id
      title
      excerpt 
        publishedAt
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
`