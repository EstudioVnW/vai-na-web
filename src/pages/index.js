import React, { Component } from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Header from '../components/header'


// styles
const Container = styled.div`
  width: 100%;
`;

// markup
const Layouts = () => {
  return (
    <Container>
      <Header home />
      <p>Hello world</p>
    </Container>
  )
}

export default Layouts;
