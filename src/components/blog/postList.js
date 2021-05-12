
import React from "react";
import styled from 'styled-components';

//Components
import Card from '../../components/blog/card';

// styles
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  padding: 44.2px 0 56.2px 0;

  @media (max-width: 768px) {
    padding-top: 0;
    width: 100%;
		flex-direction: column;
	}
`;

const PostList = ({ data }) => {
  return (
    <Container>
      {data.map(item => <Card key={item.id} data={item} slider />)}
    </Container>
  )
}


export default PostList;
