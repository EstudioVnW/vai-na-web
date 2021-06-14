import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
// import './index.css';

//Components
import Layouts from '../../components/layout';
import Header from '../../components/services/header';

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

const Services = (props) => {
  return (
    <Layouts>
      {/* <Content> */}
        <Header />
      {/* </Content> */}
    </Layouts>
  )
}

export default Services;
