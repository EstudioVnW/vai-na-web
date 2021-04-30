
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
    background-size:  ${props => props.home ? '100%' : props.backgroundSize};
  `;

  const Main = styled.main`
    min-height: 35vh;
  `;

  const Layouts = ({ isPage, children, home }) => {
    return (
      <Container home={home} backgroundSize={isPage === 'postBlog' ? '100% 30%' : '100% 50%'}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </Container>
    )
  }

  export default Layouts;
