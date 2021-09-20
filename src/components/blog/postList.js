import React from 'react';
import styled from 'styled-components';

// Components
import Card from './card';

// styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  padding: 1.8rem 0 56.2px 0;
  width: 100%;

  @media (min-width: 2200px) {
    padding-top: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
    width: 100%;
  }
`;

const PostList = ({ data }) => (
  <Container>
    {data.map((item) => <Card key={item.id} data={item} slider />)}
  </Container>
);

export default PostList;
