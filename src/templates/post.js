import React from "react";
import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";
import styled from 'styled-components';

// Components
import CardAuthor from '../components/blog/cardAuthor';
import Layout from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';

// styles
const Container = styled.section`	
  margin-top: -6rem;
  width: 80vw;
  margin: auto;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    width: 48%;
    font-size: 18px;
    line-height: 2rem;
    margin-top: 1.8rem;
    color: #2F2F2F;
  };
`;

const Image = styled.img`
  margin-bottom: 1rem;
  width: 60%;
  height: 30rem;
  border-radius: 20px;
  border: 2px solid #00145D;
  object-fit: fill;

  @media (max-width: 1024px) {
		width: 100%;
	}
`;

const TextDescription = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 60.75rem;
    height: 36.875rem;
    border: 2px solid #00145D;
    border-radius: 20px;
    object-fit: fill;

    :nth-child(2n + 1) {
      border: 2px solid #00145D;
      width: 100%;
      max-width: 36rem;
      height: 17.688rem;
      object-fit: fill;
    }

    :nth-child(4n) {
      border: 2px solid pink;
      width: 100%;
      max-width: 36rem;
      height: 17.688rem;
      object-fit: fill;
    }

    :nth-child(3n + 1) {
      width: 100%;
      max-width: 42.438rem;
      height: 36.063rem;
      border: none;
      border-radius: 0;
      object-fit: fill;
    }
  }

  p {
    width: 39.563rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    margin-top: 1.8rem;
    color: #2F2F2F;

    @media (max-width: 768px) {
      width: 100%;
    }
  };

  ul {
    font-weight: 400;
    width: 39.563rem;
    font-size: 17px;
    line-height: 2.2rem;
    margin-top: 1rem;
    color: #2F2F2F;

    @media (max-width: 768px) {
      width: 100%;
    }
  };

    blockquote {
      width: 60%;
      font-size: 22px;
      font-weight: 600;
      line-height: 2.3rem;
      margin-top: 2rem;
      color: #141414;

      @media (max-width: 768px) {
        width: 100%;
      }
    };

    blockquote strong {
      width: 60%;
      font-size: 22px;
      line-height: 2.3rem;
      font-weight: 600;
      color: #141414;

      @media (max-width: 768px) {
        width: 100%;
      }
    };
`;

export const query = graphql`
  query($id: String!) {
    item: graphCmsPost(id: { eq: $id }) {
      id
      title
      excerpt
      isHighlighted
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

export default function PostBlog({ data }) {
  const isTitle = {
    date: data.item.publishedAt,
    title: data.item.title,
    excerpt: data.item.excerpt,
  };

  return (
    <Layout isPage='postBlog'>
      <PageTitle fontSize='30px' data={isTitle} isPage='postBlog' />
      <Container>
        <ContainerMain>
          {data?.item?.cover && <Image src={data.item.cover.url || ''} alt='Foto principal' />}
          <TextDescription dangerouslySetInnerHTML={{ __html: data.item.content.html }}></TextDescription>
        </ContainerMain>
      </Container>
        <CardAuthor author={data.item.authors[0]} />
    </Layout>
  )
}
