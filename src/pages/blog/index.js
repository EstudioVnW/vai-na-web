import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layouts from '../../components/layout';
import ArticleBlog from '../../components/blog/articleBlog';


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

const Index = ({ data, home }) => (
  <Layouts>
    <ArticleBlog data={data} />
  </Layouts>
);

export default Index;
