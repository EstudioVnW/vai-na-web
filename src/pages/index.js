import React from "react";
import styled from 'styled-components';
import './index.css';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';

//Imagens
import BackgroundImage from '../images/images/Path7680.svg';
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
import ImageRocket from '../images/images/Group7294.svg';
import ImageLogoVnW from '../images/icons/logo-VNW.svg';
import ImageEstudioVnW from '../images/images/Group6536.svg';
import ImageSirio from '../images/images/Group10469.png';
import ImageProadi from '../images/images/Group10470.png';
import ImageVotorantim from '../images/images/Instituto-Votorantim-2.png';

var scrollDow = function () {
  window.scrollTo(0, 750);
};

// styles
const ContentHeader = styled.section`
  height: 100vh;
`;

const TextPresentation = styled.p`
  color: #FDE7A9;
  font-size: 16px;
  line-height: 1.9rem;
  width: 25%;
  margin-left: 9rem;
  margin-top: 1.5rem; 
`;

const ArrowScroll = styled.img`
  margin-left: 9rem;
  margin-top: 4rem;
  width: 12%;
`;

const ButtonScroll = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 10rem;
`;

const ContainerNetwork = styled.div`
  margin-top: -3rem;
  width: 100%;
  display: flex;
`;

const Image = styled.img`
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

  /* ${({ side, top, bottom, right, left, width, widthOptions }) => side && `
    top: calc(${top}px - 4.75rem);
    left: calc(${right}px + .5rem);
    width: ${widthOptions || '11.6875rem'};
  `} */
`;

const NetworkText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 22%;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 5rem;
`;

const Bold = styled.b`
  font-weight: 500;
`;

const BoldBackground = styled.b`
  font-weight: 500;
  background: #FDE7A9 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 1;
`;

const Background = styled.img`
  width: 100%;
  position: absolute;
  top: 42rem;
  left: 4rem;
  opacity: 0.3;
`;

const ContainerPartners = styled.div`
  position: relative;
`;

const BoxPartners = styled.div`
  width: 10.5rem;
  height: 3.8rem;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px #0F2B9233;
  border-radius: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${props => props.top};
  right: ${props => props.right};
  z-index: 1;
`;

const ImagePartners = styled.img`
  width: 85%;
`;

const CirclePartners = styled.div`
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
  right: ${props => props.right};
  z-index: 1;
`;

const Logo = styled.img`
  width: ${props => props.width}
`;

const LinePartners = styled.div`
  position: absolute;
  width: ${props => props.width};
  background-color: #FF611E;
  height: 1px;
  top: ${props => props.top};
  right: ${props => props.right};
  transform: ${props => props.transform};
`;


const Home = () => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br>nos impulsiona' };

  const ImageNetwork = () => {
    return (
      <>
        <Image src={Elizete} alt="Elizete" top='1%' />
        <Line
          width='8rem'
          top='8rem'
          rotate='rotate(-23deg)'
          left='-3rem'
        />
        <Image src={Mari} alt="Mari" top='5%' left='35%' />
        <Line width='35%' top='10%' rotate='rotate(3deg)' left='5%' />
        <Image src={Pamela} alt="Pamela" top='10%' left='45%' />
        <Line width='10%' top='15%' rotate='rotate(18deg)' left='40%' />

        <Image src={Michael} alt="Michael" top='.5%' left='60%' />
        <Line width='15%' top='10rem' rotate='rotate(-20deg)' left='50%' />
        <Line width='12%' top='15rem' rotate='rotate(75deg)' left='59%' />

        <Image src={Amanda} alt="Amanda" top='20%' left='63%' />
        <Line width='12%' top='30rem' rotate='rotate(50deg)' left='64%' />

        <Image src={Jeziel} alt="Jeziel" top='38%' left='70%' />

        <Image src={Matheus} alt="Matheus" top='15%' left='75%' />
        <Line width='12%' top='21rem' rotate='rotate(-15deg)' left='65%' />
        <Line width='15%' top='33rem' rotate='rotate(-20deg)' left='75%' />
        <Line width='21%' top='35rem' rotate='rotate(77deg)' left='71%' />

        <Image src={Gabriel} alt="Gabriel" top='28%' left='85%' />
        <Line width='12%' top='22rem' rotate='rotate(40deg)' left='77%' />
        {/* <Line width='12%' top='30rem' rotate='rotate(50deg)' left='60%' /> */}

        <Image src={Kelvin} alt="Kelvin" top='55%' left='80%' />
        <Image src={Aluna} alt="Aluna" top='75%' left='88%' />
        <Image src={Aluna} alt="Aluna" top='70%' left='70%' />
        <Image src={Pedro} alt="Pedro" top='50%' left='60%' />
        <Image src={Rhuan} alt="Rhuan" top='80%' left='55%' />
        <Image src={Pri} alt="Pri" top='65%' left='45%' />
        <Image src={Raissa} alt="Raissa" top='80%' left='30%' />
        <Image src={Luan} alt="Luan" left='5%' />
        <Image src={Tati} alt="Tati" top='40%' />
      </>
    )
  }

  const PartnerNetworks = () => {
    return (
      <div>
        <BoxPartners top='0.6rem' right='33rem'></BoxPartners>
        <LinePartners transform='rotate(60deg)' width='7rem' top='7rem' right='32.5rem' />
        <BoxPartners top='2.5rem' right='17rem'></BoxPartners>
        <LinePartners transform='rotate(152deg)' width='10rem' top='7.6rem' right='23rem' />
        <BoxPartners top='10rem' right='15rem'></BoxPartners>
        <LinePartners transform='rotate(186deg)' width='9rem' top='11.8rem' right='23rem' />
        <CirclePartners color='#FDE7A9' shadow='0px 0px 33px #FF611E66' top='8rem' right='32rem'>
          <Logo width='60%' src={ImageLogoVnW} alt='Logo Vai na Web' />
        </CirclePartners>
        <LinePartners transform='rotate(145deg)' width='8rem' top='13rem' right='33rem' />
        <CirclePartners color='#FFFFFF' shadow='0px 0px 22px #00000029' top='13rem' right='38rem'>
          <Logo width='50%' src={ImageRocket} alt='Foguete' />
        </CirclePartners>
        <LinePartners transform='rotate(40deg)' width='9rem' top='17.5rem' right='34rem' />
        <CirclePartners color='#FDE7A9' shadow='0px 0px 33px #FF611E66' top='18rem' right='32rem'>
          <Logo width='70%' src={ImageEstudioVnW} alt='Logo Estudio Vai na Web' />
        </CirclePartners>
        <LinePartners transform='rotate(130deg)' width='9rem' top='26rem' right='33rem' />
        <BoxPartners top='19rem' right='13rem'>
          <ImagePartners src={ImageSirio} alt='Hospital Sírio Libanês' />
        </BoxPartners>
        <LinePartners transform='rotate(40deg)' width='11rem' top='26rem' right='23rem' />
        <BoxPartners top='28rem' right='20rem'>
          <ImagePartners src={ImageVotorantim} alt='Instituto Votorantim' />
        </BoxPartners>
        <LinePartners transform='rotate(186deg)' width='13rem' top='21rem' right='20rem' />
        <BoxPartners top='27rem' right='34rem'>
          <ImagePartners src={ImageProadi} alt='Proadi SUS' />
        </BoxPartners>
      </div>
    )
  }

  return (
    <Layouts home>
      <ContentHeader>
        {ImageNetwork()}
        <CardHome />
        <TextPresentation>
          Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as
          desigualdades e desenvolvemos a força de trabalho do futuro.
        </TextPresentation>
        <ButtonScroll onClick={scrollDow}><ArrowScroll src={ScrollArrow} alt="Seta de Rolagem" /></ButtonScroll>
      </ContentHeader>
      {/* <Background src={BackgroundImage} alt='Background Route Rocket' /> */}
      <ContainerNetwork>
        <div>
          <PageTitle data={isTitle} isPage='isHome' />
          <NetworkText>
            A partir de uma <Bold>rede colaborativa e sustentável</Bold>, composta de grandes empresas,
            parceiros e amigos, trabalhamos na vanguarda das tecnologias digitais e sociais
            <Bold> para entregar soluções com inovação, maturidade digital e transformação humana. </Bold>
            Com o objetivo <BoldBackground>de diminuir de forma inteligente a desigualdade social,</BoldBackground> qualificamos
            pessoas, geramos empregos dignos no mercado de tecnologia e reduzimos o gap de gênero no país.
          </NetworkText>
        </div>
        <ContainerPartners>
          {PartnerNetworks()}
        </ContainerPartners>
      </ContainerNetwork>
    </Layouts>
  )
}

export default Home;
