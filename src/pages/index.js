import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import './index.css';

//Components
import Layouts from '../components/layout';
import Cases from '../components/cases';
import SocialImpact from '../components/socialImpact';
import Squads from '../components/squads';
import Header from '../components/header';
import Talents from '../components/talents';
import Conection from '../components/conection';
import Carroussel from "../components/carroussel";

//Imagens


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
`

const Home = (props) => {
  return (
    <Layouts home={true}>
      <Content>
        <Header/>
        <Cases />
        <SocialImpact />
        <Squads />
        <Talents />
        <Carroussel />
        <Conection />
      </Content>
    </Layouts>
  )
}

export default Home;
