const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/post.js');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allGraphCmsPost {
        edges {
          node {
            id
            title
            publishedAt
          }
        }
      }
    }
  `, { limit: 1000 }).then((result) => {
    if (result.errors) {
      console.log('result', result.errors);
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allGraphCmsPost.edges.forEach((edge) => {
      const link = `blog/${edge.node.publishedAt.replace(/[^\w\s]/gi, '')}`;
      console.log('edge', link);
      createPage({
        // Path for this page — required
        path: link,
        component: blogPostTemplate,
        context: {
          id: `${edge.node.id}`,
          slug: link,
        },
      });
    });
  });
};
