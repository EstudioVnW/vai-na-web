import React from "react";
import styled from 'styled-components';

//Components
import Menu from './header';
import Footer from './footer';

// styles
const Container = styled.div`
  width: 100%;
`;

const ContainerHeader = styled.div`
  height: 70vh;
  width: 100%;
  background: #00145D;

`;
const Main = styled.main`
  min-height: 200vh;
`;

const Layouts = ({ isPage, children, home }) => {
  return (
    <Container>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer/>
    </Container>
  )
}

export default Layouts;
