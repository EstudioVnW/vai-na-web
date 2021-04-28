
import React from "react";
import styled from 'styled-components';

//Components
import Header from './header';
import PageTitle from './pageTitle/pageTitle';
import Footer from './footer';
import fundo from '../images/icons/Mask-Group-15.png';

// styles
const Container = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Main = styled.main`
  min-height: 35vh;
`;

const Layouts = ({ isPage, pageTitle, children }) => {
  return (
    <Container>
      <Header />
      <Main>
        <PageTitle isPage={isPage} data={pageTitle}/>
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

export default Layouts;
