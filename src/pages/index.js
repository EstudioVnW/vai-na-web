import React from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';

//Imagens
import ScrollArrow from '../images/icons/Group52.svg';


var scrollDow = function() {
  window.scrollTo(0, 750);
};

// styles
// remover o margin-top quando colocar o card de apresentação
const TextPresentation = styled.p `
  color: #FDE7A9;
  font-size: 18px;
  line-height: 1.9rem;
  width: 28%;
  margin-left: 8rem;
  margin-top: 13rem; 
`;

const ArrowScroll = styled.img `
  margin-left: 8rem;
  margin-top: 3rem;
  width: 14%;
`;

const ButtonScroll = styled.button `
  border: none;
  background: transparent;
  margin-bottom: 10rem;
`;

const Home = () => {
  const isTitle = { typePage: 'Rede', title: 'A força que nos impulsiona' };

  return (
      <Layouts home>
        <TextPresentation>
          Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as 
          desigualdades e desenvolvemos a força de trabalho do futuro.
        </TextPresentation>
        <ButtonScroll onClick={scrollDow}><ArrowScroll src={ScrollArrow} alt="Seta de Rolagem"/></ButtonScroll>
        <PageTitle data={isTitle} isPage='isHome'/>
      </Layouts>
  )
}

export default Home;
