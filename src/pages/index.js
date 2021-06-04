import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import './index.css';

//Components
import Layouts from '../components/Layouts';

//Imagens


// styles

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 4rem;
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

const Home = (props) => {
  return (
    <Layouts home>
      <Content>
        Olá eu sou a tela principal
      </Content>
    </Layouts>
  )
}

export default Home;
