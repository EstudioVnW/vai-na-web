import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function DocumentationPage({ data }) {
  return (
    <>
      <article>
        <Helmet>
          <title>{data.item.title} - Docs</title>
        </Helmet>
        <h1>{data.item.title}</h1>
      </article>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    item: graphCmsPost(id: { eq: $id }) {
      id
      title
    }
  }
`