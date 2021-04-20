
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Card from '../../components/blog/card';

// styles
const Container = styled.div`
/* width: 26%; */

display: flex;
flex-wrap: wrap;

  /* display: grid;
  column-gap: 77px;
  grid-template-columns: repeat(3, 1fr); */
  padding: 44.2px 0 56.2px 0;
`;

const PostList = ({ data }) => {
  return (
    <Container>
      {data.map(item => <Card data={item} slider />)}
    </Container>
  )
}


export default PostList;
