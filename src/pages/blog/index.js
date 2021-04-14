
import React from "react";
import { graphql } from "gatsby";

//Components
import Header from '../../components/header';
import CardList from '../../components/blog/cardList';
import Footer from '../../components/footer';

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
      <Header />
      {data.posts.nodes.map(item => <h1> {item.title}</h1>)}
      <CardList />
      <Footer />
    </>
  )
}