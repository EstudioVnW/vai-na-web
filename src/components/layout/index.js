import React from "react";
import * as S from './styles';

//Components
import Menu from '../header';
import Footer from '../footer';

// styles


const Layouts = ({children}) => {
console.log(S)
  return (
      <S.Container>
        <Menu />
        <S.Main>
          {children}
        </S.Main>
        <Footer />
    </S.Container>




  )
}

export default Layouts;

// const Layout = (props) => {
// console.log(props)
//   return (
// 		<>
			
//     {props.children}
			
// 		</>
// 	);
// };

// export default Layout;