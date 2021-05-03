import React from "react";
import styled  from 'styled-components';
import './index.css';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';

//Imagens
import ScrollArrow from '../images/icons/Group52.svg';
import Aluna from '../images/images/peopleVNW/Aluna.png';
import Amanda from '../images/images/peopleVNW/Amanda.png';
import Cris from '../images/images/peopleVNW/cris.png';
import Desiree from '../images/images/peopleVNW/Desiree.png';
import Elizete from '../images/images/peopleVNW/Elizete.png';
import Gabriel from '../images/images/peopleVNW/Gabriel.png';
import Igor from '../images/images/peopleVNW/igor.png';
import Jeziel from '../images/images/peopleVNW/Jeziel.png';
import Kelvin from '../images/images/peopleVNW/Kelvin.png';
import Luan from '../images/images/peopleVNW/Luan.png';
import Mari from '../images/images/peopleVNW/Mari.png';
import Pamela from '../images/images/peopleVNW/Pamela.png';
import Matheus from '../images/images/peopleVNW/Matheus.png';
import Michael from '../images/images/peopleVNW/Michael.png';
import Pedro from '../images/images/peopleVNW/Pedro.png';
import Pri from '../images/images/peopleVNW/Pri.png';
import Raissa from '../images/images/peopleVNW/Raissa.png';
import Rhuan from '../images/images/peopleVNW/Rhuan.png';
import Tati from '../images/images/peopleVNW/Tati.png';

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
  margin-top: 2rem; 
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

const Image = styled.img `
  width: 180px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;

const Line = styled.span`
  width: ${props => props.width};
	background-color: #FF611E;
	height: 1px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: ${props => props.rotate};
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
    <Image src={Elizete} alt="Elizete" top='1%'/>
    <Line width='8rem' top='14%' rotate='rotate(-23deg)' left='-3rem' />
    <Image src={Mari} alt="Mari" top='5%' left='35%'/>
    <Line width='35%' top='12%' rotate='rotate(3deg)' left='5%' />

    <Image src={Pamela} alt="Pamela" top='10%' left='45%'/>
    <Image src={Michael} alt="Michael" top='.5%' left='60%'/>
    <Image src={Amanda} alt="Amanda" top='20%' left='63%'/>
    <Image src={Jeziel} alt="Jeziel" top='38%' left='70%'/>
    <Image src={Matheus} alt="Matheus" top='15%' left='75%'/>
    <Image src={Gabriel} alt="Gabriel" top='28%' left='85%'/>
    <Image src={Kelvin} alt="Kelvin" top='55%' left='80%'/>

    <Image src={Aluna} alt="Aluna" top='75%' left='88%'/>
    <Image src={Aluna} alt="Aluna" top='70%' left='70%'/>
    <Image src={Pedro} alt="Pedro" top='50%' left='60%'/>
    <Image src={Rhuan} alt="Rhuan" top='80%' left='55%'/>
    <Image src={Pri} alt="Pri" top='65%' left='45%'/>
    <Image src={Raissa} alt="Raissa" top='80%' left='30%'/>











    <Image src={Luan} alt="Luan" left='5%'/>
    <Image src={Tati} alt="Tati" top='40%'/>

      <CardHome />
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
