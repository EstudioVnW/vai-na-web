
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Layouts from '../../components/Layouts';
import Card from '../../components/blog/card';
import PostList from '../../components/blog/postList';

// styles
const ContainerBlog = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
        excerpt 
        publishedAt
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

const Index = ({ data }) => {
  return (
    <Layouts>
      <ContainerBlog>
        <Card data={data.posts.nodes[0]} />
        <PostList data={data} />
      </ContainerBlog>
    </Layouts>

  )
}


export default Index;
