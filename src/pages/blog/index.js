import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// Components
import Layouts from '../../components/layout';
import ArticleBlog from '../../components/blog/articleBlog';

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
  color: #FDE7A9;
  font: 
    700 
    ${(props) => (props.slider ? '1.875rem' : '2.75rem')}
    'Usual'
  ;
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

const Index = ({ data, home }) => (
  <Layouts>
    <ArticleBlog data={data} />
  </Layouts>
);

export default Index;
