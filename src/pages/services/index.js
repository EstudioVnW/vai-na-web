import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Layouts from '../../components/layout';
import Header from '../../components/services/header';
import Cards from '../../components/services/cards';
import HowWeWork from '../../components/services/how-we-work';

const Container = styled.div`
  overflow: hidden;
  overflow-x: scroll;
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

const Services = (props) => {
  return (
    <Layouts>
      <Header />
      <Container>
        <Cards />
      </Container>
      <HowWeWork />
    </Layouts>
  )
}

export default Services;
