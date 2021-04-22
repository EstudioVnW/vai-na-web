const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
 
	const postResult = await graphql(`
    query {
      allGraphCmsPost {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  postResult.data.allGraphCmsPost.edges.forEach(({ node }) => {
    const slug = slugify(`${node.title.toLowerCase()}-${node.id.split(":")[1]}`)
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
        slug,
      },
    })
  })
}