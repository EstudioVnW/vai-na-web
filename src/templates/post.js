 import React from "react";
import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";
import styled from 'styled-components';

// Components
import CardAuthor from '../components/blog/cardAuthor';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle/pageTitle';

// styles
const Container = styled.section`
  margin: auto;
  width: 60%;

	@media (min-width: 2200px) {
		width: 63%;
	}

  @media (max-width: 1200px) {
    width: 68%;
  }

  @media (max-width: 768px) {
    width: 88%;
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
  }
`;

const Image = styled.img`
  margin-bottom: 1rem;
  width: 100%;
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
    width: 60%;
    border: 2px solid #00145D;
    border-radius: 20px;
    object-fit: fill;

    :nth-child(2n + 1) {
      border: 2px solid #00145D;
      object-fit: fill;
    }

    :nth-child(4n) {
      border: 2px solid pink;
      object-fit: fill;
    }

    :nth-child(3n + 1) {
      border: none;
      border-radius: 0;
      object-fit: fill;
    }
  }

  p, 
  ul {
    width: 60%;
    font-weight: 400;
    line-height: 1.8;
    color: #2F2F2F;
  }

  p {
    margin-top: 1.8rem;
    font-size: 1.1rem;
  }

  ul {
    margin-top: 1rem;
    font-size: 1rem;

    li {
      padding-bottom: 1rem;
    }
  }

  blockquote {
    margin-top: 2rem;
    width: 80%;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.6;
    color: #141414;
  }

	@media (min-width: 2200px) {
    blockquote {
      margin-top: 4rem;
      font-size: 2.6rem;
    }

    p {
      margin-top: 5rem;
      font-size: 2rem;
    }

    ul {
      font-size: 1.8rem;
    }
	}

  @media (max-width: 768px) {
    blockquote, 
    img, 
    ul, 
    p {
      width: 100%;
    }
    
    p {
      font-size: .95rem;
    }
  }
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
