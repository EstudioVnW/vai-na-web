const path = require('path');
const slugify = require('slugify');

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
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allGraphCmsPost.edges.forEach((edge) => {
      const link = slugify(`${edge.node.title}`, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        trim: true,
      });
      createPage({
        path: `/blog/${link}`,
        component: blogPostTemplate,
        context: {
          id: `${edge.node.id}`,
        },
      });
    });
  });
};
