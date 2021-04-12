 
import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
      }
    }
  }
`

export default function Index({ data }) {
  return (
    <>
     {data.posts.nodes.map(item => <h1> {item.title}</h1>)}
    </>
  )
}