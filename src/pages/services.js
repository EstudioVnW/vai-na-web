import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layouts from '../components/layout';
import Header from '../components/services/header';
import Cards from '../components/services/cards';
import HowWeWork from '../components/services/how-we-work';
import Squads from '../components/services/squads';
import SquadsInfo from '../components/services/squads-info';
import Agenda from '../components/services/agenda';

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

const Services = () => (
  <Layouts>
    <Header />
    <Cards />
    <HowWeWork />
    <SquadsInfo />
    <Squads />
    <Agenda />
  </Layouts>
);

export default Services;