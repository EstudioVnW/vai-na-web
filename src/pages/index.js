import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import './index.css';

//Components
import Layouts from '../components/Layouts';

//Imagens
import BackHeader from '../images/images/peopleNetwork.png';

// styles
const BackgroundHeader = styled.div`
  position: absolute;
  top: -2rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${BackHeader}); 
  background-repeat: no-repeat;
  /* background-size: 105% 100%; */
  background-size: cover;
  background-position: right;
`;

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
