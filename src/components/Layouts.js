
import React from "react";
import styled from 'styled-components';

//Components
import Header from './header';
import Footer from './footer';
import fundo from '../images/icons/Mask-Group-15.png';
import ImageBackground from '../images/images/MaskGroup18@2x.png';

// styles
const Container = styled.div`
  background-image: ${props => props.home ? `url(${ImageBackground})` : `url(${fundo})`};
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Main = styled.main`
  min-height: 35vh;
`;

const Layouts = ({ isPage, pageTitle, children, home }) => {
  return (
    <Container home={home}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

export default Layouts;
