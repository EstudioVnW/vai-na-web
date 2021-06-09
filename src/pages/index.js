import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import './index.css';


//Components
import Layouts from '../components/layout';
import Cases from '../components/cases';
import SocialImpact from '../components/socialImpact';
import Squads from '../components/squads';

//Imagens


// styles

const Content = styled.div`
  width: 100%;

`;

// max-width: 1440px;
// margin: auto;
// padding: 0 4rem;

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

const Home = (props) => {
  return (
    <Layouts home>
      <Content>
        <Cases />
        <SocialImpact />
        <Squads />
      </Content>
    </Layouts>
  )
}

export default Home;
