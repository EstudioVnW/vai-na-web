import React from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';

//Imagens
import ScrollArrow from '../images/icons/Group52.svg';
import ImageRocket from '../images/images/Group7294.svg';
import ImageLogoVnW from '../images/icons/logo-VNW.svg';
import ImageEstudioVnW from '../images/images/Group6536.svg';
import ImageSirio from '../images/images/Group10469.png';
import ImageProadi from '../images/images/Group10470.png';
import ImageVotorantim from '../images/images/Instituto-Votorantim-2.png';

var scrollDow = function() {
  window.scrollTo(0, 750);
};

// styles
const TextPresentation = styled.p `
  color: #FDE7A9;
  font-size: 16px;
  line-height: 1.9rem;
  width: 25%;
  margin-left: 9rem;
  margin-top: 1.5rem; 
`;

const ArrowScroll = styled.img `
  margin-left: 9rem;
  margin-top: 4rem;
  width: 12%;
`;

const ButtonScroll = styled.button `
  border: none;
  background: transparent;
  margin-bottom: 10rem;
`;

const NetworkText = styled.p `
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 22%;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 5rem;
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

const BoxPartners = styled.div `
  width: 9rem;
  height: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px #0F2B9233;
  border-radius: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;

const ImagePartners = styled.img `
  width: 75%;
`;

const CirclePartners = styled.div `
  width: 5.5rem;
  height: 5.5rem;
  background-color: ${props => props.color};
  box-shadow:  ${props => props.shadow};
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;

const Logo = styled.img `
  width: ${props => props.width}
`;

const LinePartners = styled.div `
  position: absolute;
  width: ${props => props.width};
  background-color: #FF611E;
  height: 1px;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: ${props => props.transform};
`;

const PartnerNetworks = () => {
  return (
    <div>
      <BoxPartners top='50.6rem' left='39rem'></BoxPartners>
        <LinePartners transform='rotate(60deg)' width='7rem' top='56rem' left='42rem'/>
      <BoxPartners top='52rem' left='53rem'></BoxPartners>
        <LinePartners transform='rotate(145deg)' width='9rem' top='57rem' left='48rem'/>
      <BoxPartners top='60rem' left='56rem'></BoxPartners>
        <LinePartners transform='rotate(190deg)' width='9rem' top='61rem' left='48rem'/>
      <CirclePartners color='#FDE7A9' shadow='0px 0px 33px #FF611E66' top='57rem' left='45rem'>
        <Logo width='50%' src={ImageLogoVnW} alt='Logo Vai na Web' />
      </CirclePartners>
        <LinePartners transform='rotate(145deg)' width='9rem' top='62.4rem' left='40rem'/>
      <CirclePartners color='#FFFFFF' shadow='0px 0px 22px #00000029' top='62rem' left='38rem'>
        <Logo width='50%' src={ImageRocket} alt='Foguete' />
      </CirclePartners>
        <LinePartners transform='rotate(40deg)' width='9rem' top='66rem' left='38rem'/>
      <CirclePartners color='#FDE7A9' shadow='0px 0px 33px #FF611E66' top='67rem' left='45rem'>
        <Logo width='60%' src={ImageEstudioVnW} alt='Logo Estudio Vai na Web' />
      </CirclePartners>
        <LinePartners transform='rotate(130deg)' width='9rem' top='73rem' left='41rem'/>
      <BoxPartners top='69rem' left='57rem'>
        <ImagePartners src={ImageSirio} alt='Hospital Sírio Libanês' />
      </BoxPartners>
        <LinePartners transform='rotate(40deg)' width='11rem' top='74.5rem' left='47rem'/>
      <BoxPartners top='76rem' left='37.5rem'>
        <ImagePartners src={ImageVotorantim} alt='Instituto Votorantim' />
      </BoxPartners>
        <LinePartners transform='rotate(186deg)' width='11rem' top='70rem' left='47rem'/>
      <BoxPartners top='77rem' left='51rem'>
        <ImagePartners src={ImageProadi} alt='Proadi SUS'/>
      </BoxPartners>
    </div>
  )
}

const Home = () => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br>nos impulsiona' };

  return (
      <Layouts home>
        <CardHome />
        <TextPresentation>
          Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as 
          desigualdades e desenvolvemos a força de trabalho do futuro.
        </TextPresentation>
        <ButtonScroll onClick={scrollDow}><ArrowScroll src={ScrollArrow} alt="Seta de Rolagem"/></ButtonScroll>
            <div>
              <PageTitle data={isTitle} isPage='isHome'/>
              <NetworkText>
                A partir de uma <Bold>rede colaborativa e sustentável</Bold>, composta de grandes empresas, 
                parceiros e amigos, trabalhamos na vanguarda das tecnologias digitais e sociais  
                <Bold> para entregar soluções com inovação, maturidade digital e transformação humana. </Bold> 
                Com o objetivo <BoldBackground>de diminuir de forma inteligente a desigualdade social,</BoldBackground> qualificamos 
                pessoas, geramos empregos dignos no mercado de tecnologia e reduzimos o gap de gênero no país.
              </NetworkText>
            </div>
              {PartnerNetworks()}
      </Layouts>
  )
}

export default Home;
