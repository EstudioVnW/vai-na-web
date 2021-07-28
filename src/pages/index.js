import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

// Components
import Layouts from '../components/layout';
import Header from '../components/home/header';

import Awards from '../components/home/awards';
import Carroussel from '../components/home/carroussel';
import Cases from '../components/home/cases';
import Conection from '../components/home/conection';
import SocialImpact from '../components/home/socialImpact';
import Squads from '../components/home/squads';
import Talents from '../components/home/talents';

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
    <Content>
      <Header />
      <Cases />
      <SocialImpact />
      <Squads />
      <Talents />
      <Carroussel />
      <Awards />
      <Conection />
    </Content>
  </Layouts>
);

export default Home;
