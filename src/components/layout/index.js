import React from "react";
import * as S from './styles';

//Components
import Nav from '../nav';
import Footer from '../footer';

const Layouts = ({home, children}) => {
  return (
    <S.Container>
      <Nav home = {home}/>
        <S.Main>
          {children}
        </S.Main>
      <Footer />
    </S.Container>
  )
}

export default Layouts;