import React from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Header from '../components/header';
import Footer from '../components/footer';

//Imagens
import ImageBackground from '../images/images/MaskGroup18@2x.png';
import ScrollArrow from '../images/icons/Group52.svg';

// styles
const Container = styled.div`
  background-image: url(${ImageBackground});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
`;

const TextPresentation = styled.p `
  color: #FDE7A9;
  font-size: 22px;
  line-height: 1.9rem;
  width: 35%;
  margin-left: 7rem;
`;

const ArrowScroll = styled.img `

`;

const Layouts = () => {
  return (
    <Container>
      <Header home />
      <TextPresentation>
        Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as 
        desigualdades e desenvolvemos a força de trabalho do futuro.
      </TextPresentation>
      <ArrowScroll src={ScrollArrow}/>
      <Footer />
    </Container>
  )
}

export default Layouts;
