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
  margin-left: 9rem;
  margin-top: 13rem; 
`;

const ArrowScroll = styled.img `
  margin-left: 9rem;
  margin-top: 3rem;
  width: 14%;
`;

const ButtonScroll = styled.button `
  border: none;
  background: transparent;
  margin-bottom: 10rem;
`;

const NetworkText = styled.p `
  font-size: 16px;
  font-weight: 100;
  line-height: 1.8rem;
  width: 25%;
  margin-left: 11.4rem;
`;

const Bold = styled.b `
  font-weight: 500;
`;

const BoldBackground = styled.b `
  font-weight: 500;
  background: #FDE7A9 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 1;
`;

const Home = () => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br>nos impulsiona' };

  return (
      <Layouts home>
        <TextPresentation>
          Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as 
          desigualdades e desenvolvemos a força de trabalho do futuro.
        </TextPresentation>
        <ButtonScroll onClick={scrollDow}><ArrowScroll src={ScrollArrow} alt="Seta de Rolagem"/></ButtonScroll>
        <PageTitle data={isTitle} isPage='isHome'/>
        <NetworkText>
          A partir de uma <Bold>rede colaborativa e sustentável</Bold>, composta de grandes empresas, 
          parceiros e amigos, trabalhamos na vanguarda das tecnologias digitais e sociais  
          <Bold> para entregar soluções com inovação, maturidade digital e transformação humana. </Bold> 
          Com o objetivo <BoldBackground>de diminuir de forma inteligente a desigualdade social,</BoldBackground> qualificamos 
          pessoas, geramos empregos dignos no mercado de tecnologia e reduzimos o gap de gênero no país.
        </NetworkText>
      </Layouts>
  )
}

export default Home;
