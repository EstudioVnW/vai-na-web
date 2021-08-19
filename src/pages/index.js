import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// Components
import Layouts from '../components/layout';
import SEO from '../components/SEO';

import Header from '../components/home/header';
import Awards from '../components/home/awards';
import Carroussel from '../components/home/carroussel';
import Cases from '../components/home/cases';
import Conection from '../components/home/conection';
import Squads from '../components/home/squads';
import Talents from '../components/home/talents';
import LineCases from '../components/home/linecases';

// styles
const Content = styled.div`
  width: 100%;
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

const Home = () => (
  <Layouts home>
    <SEO />
    <Content>
      <Header />
      <LineCases />
      <Squads />
      <Talents />
      <Carroussel />
      <Cases />
      <Awards />
      <Conection />
    </Content>
  </Layouts>
);

export default Home;
