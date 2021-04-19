
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Layouts from '../../components/Layouts';
import Card from '../../components/blog/card';

// styles
const Container = styled.div`
/* width: calc(70% / 3); */
/* width: 33%; */

/* display: flex;
flex-wrap: wrap; */

  display: grid;
 column-gap: 77px;
 grid-template-columns: repeat(3, 1fr);
  padding: 44.2px 0 56.2px 0;
`;

const PostList = ({ data }) => {
  return (
		<Container>
			{data.posts.nodes.map(item => <Card data={item} slider/>)}
		</Container>
  )
}


export default PostList;
