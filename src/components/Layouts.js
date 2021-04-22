
import React from "react";
import styled from 'styled-components';

//Components
import Header from './header';
import PageTitle from './pageTitle/pageTitle';
import Footer from './footer';
import fundo from '../images/icons/Mask-Group-15.png';

// styles
const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${fundo});
	background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.main`
  min-height: 35vh;
`;

const Layouts = ({ pageTitle, children }) => {
  return (
    <Container>
      <Header />
      <Main>
        <PageTitle data={pageTitle}/>
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

export default Layouts;
