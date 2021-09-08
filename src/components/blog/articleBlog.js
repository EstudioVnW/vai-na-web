import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// Components
import Card from './card';
import PostSlider from '../postSlider/postSlider';
import PageTitle from '../pageTitle/pageTitle';

// styles
const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;

  @media (min-width: 2200px) {
    width: 62%;
  }

  @media (max-width: 1200px) {
    width: 68%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentCard = styled.div`
  width: 100%;
`;

const Text = styled.h3`
  padding: 5rem 0;
  font-size:  ${(props) => (props.slider ? '1.875rem' : '2.75rem')};
  color: #FDE7A9;
  font-weight: 700;
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
`;

const renderBlog = (data, home) => {
  const firstItem = data && data[0];
  const listSlider = data && data.filter((item) => item.id !== firstItem.id);

  return (
    <>
      <ContentCard>
        <Card data={firstItem} home={home} />
      </ContentCard>
      <PostSlider data={listSlider} home={home} />
    </>
  );
};

const ArticleBlog = ({ data, home }) => {
  const item = data && data.posts.nodes;
  const title = 'Notícias Vai na Web';
  const isTitle = { typePage: 'Blog', title };

  return (
    <>
      <PageTitle data={isTitle} isPage={home && 'isHome'} />
      <ContainerBlog>
        {!item.length
          ? <Text>Não há conteúdo no momento</Text>
          : renderBlog(item, home)}
      </ContainerBlog>
    </>
  );
};

export default ArticleBlog;
