
import React from "react";
import styled from 'styled-components';

//Components
import Header from './header';
import Footer from './footer';
import fundo from '../images/icons/Mask-Group-15.png';

// styles
const Container = styled.div`
  width: 100vw;
  background-image: url(${fundo});
	background-repeat: no-repeat;
  /* background-size: cover; */
`;

const Main = styled.main`
  min-height: 35vh;
`;

const Layouts = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layouts;
