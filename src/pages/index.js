import React from "react";
import styled from 'styled-components';
import './index.css';
// import scrollTo from 'gatsby-plugin-smoothscroll';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';

//Imagens
import BackgroundImage from '../images/images/Path7680.svg';
import ScrollArrow from '../images/icons/Group52.svg';
import BackHeader from '../images/images/peopleNetwork.png';
// import Aluna from '../images/images/peopleVNW/Aluna.png';
// import Amanda from '../images/images/peopleVNW/Amanda.png';
// import Cris from '../images/images/peopleVNW/cris.png';
// import Desiree from '../images/images/peopleVNW/Desiree.png';
// import Elizete from '../images/images/peopleVNW/Elizete.png';
// import Gabriel from '../images/images/peopleVNW/Gabriel.png';
// import Igor from '../images/images/peopleVNW/igor.png';
// import Jeziel from '../images/images/peopleVNW/Jeziel.png';
// import Kelvin from '../images/images/peopleVNW/Kelvin.png';
// import Maicon from '../images/images/peopleVNW/Maicon.png';
// import Luan from '../images/images/peopleVNW/Luan.png';
// import Mari from '../images/images/peopleVNW/Mari.png';
// import Pamela from '../images/images/peopleVNW/Pamela.png';
// import Matheus from '../images/images/peopleVNW/Matheus.png';
// import Michael from '../images/images/peopleVNW/Michael.png';
// import Pedro from '../images/images/peopleVNW/Pedro.png';
// import Pri from '../images/images/peopleVNW/Pri.png';
// import Raissa from '../images/images/peopleVNW/Raissa.png';
// import Rhuan from '../images/images/peopleVNW/Rhuan.png';
// import Tati from '../images/images/peopleVNW/Tati.png';
import ImageRocket from '../images/images/Group7294.svg';
import ImageLogoVnW from '../images/icons/logo-VNW.svg';
import ImageEstudioVnW from '../images/images/logoEstudio.svg';
import ImageSirio from '../images/images/hospitalSirio.png';
import ImageProadi from '../images/images/proadiSus.png';
import ImageVotorantim from '../images/images/Instituto-Votorantim.png';
import ImagePetronect from '../images/images/Petronect.png';

var scrollDow = function () {
  window.scrollTo(0, 740);
};

// styles
const BackgroundHeader  = styled.div`
  position: absolute;
  top: 0;
  left: -2rem;
  width: 100vw;
  height: 100vh;
  background: url(${BackHeader}); 
  background-repeat: no-repeat;
  background-size: 105% 100%;
`;

const ContentHeader = styled.section`
  padding-left: 13%;
  height: 100vh;
  margin-top: -5rem;
`;

const DottedLineBackground = styled.div`
  background: url(${BackgroundImage}); 
  background-repeat: no-repeat; 
  background-size: 100%;
  /* opacity: 0.3; */
`;

const ContentCard = styled.div`
  position: relative;
  z-index: 1;
`;

const TextPresentation = styled.p`
  padding: 1.8rem 0 2.4rem 2rem;
  width: 50%;
  max-width: 360px;
  color: #FDE7A9;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.9rem;
`;

const ArrowScroll = styled.img`
  margin-left: 9rem;
  width: 12%;
`;

const ButtonScroll = styled.button`
  padding-left: 2rem;
  border: none;
  background: transparent;
  margin-bottom: 10rem;
  /* position: ${props => props.isClicked && 'fixed'};
  top: 0; */
`;

const ContainerNetwork = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  margin-top: 15rem;
`;

// const Image = styled.img`
//   width: 180px;
//   position: absolute;
//   top: ${props => props.top};
//   left: ${props => props.left};
//   right: ${props => props.right};
//   z-index: 1;
// `;

const ImageLogo = styled.img`
  width: 9rem;
  margin: 0 0 2% 4%;
`;

// const Line = styled.span`
//   width: ${props => props.width};
// 	background-color: #FF611E;
// 	height: 1px;
//   position: absolute;
//   top: ${props => props.top};
//   left: ${props => props.left};
//   transform: ${props => props.rotate};
//   z-index: ${props => props.zIndex && '-1'};
// `;

const NetworkText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 17.5rem;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 5rem;
  @media (min-width: 1920px) {
    margin-left: 16.4rem;
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	}
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

/* const Background = styled.div`
  width: 100%;
  position: absolute;
  top: 42rem;
  left: 4rem;
  opacity: 0.3;
  background: url(${BackgroundImage}); 
  background-repeat: no-repeat; 
  background-size: 100%;
  margin-top: 6rem;
`; */

const ContainerPartners = styled.div`
  position: relative;
  @media (min-width: 1920px) {
		margin-left: 15rem;
	}
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
  left: ${props => props.left};
  z-index: 1;
  @media (min-width: 1920px) {
    width: 13.5rem;
    height: 5.5rem;
    top: ${props => props.Mtop};
    left: ${props => props.Mleft};
	}
`;

const ImagePartners = styled.img`
  width: ${props => props.width ? '60%' : '85%'};
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
  left: ${props => props.left};
  z-index: 1;
  @media (min-width: 1920px) {
    width: 8.5rem;
    height: 8.5rem;
    top: ${props => props.Mtop};
    left: ${props => props.Mleft};
	}
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
  left: ${props => props.left};
  transform: ${props => props.transform};
  @media (min-width: 1920px) {
    top: ${props => props.Mtop};
    left: ${props => props.Mleft};
	}
`;

const Home = () => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br/> nos impulsiona' };

  const PartnerNetworks = () => {
    return (
      <div>
        {/* <BoxPartners top='0.6rem' left='6.5rem'></BoxPartners>
        <LinePartners transform='rotate(60deg)' width='7rem' top='7rem' left='10rem'/>
        <BoxPartners top='2.5rem' left='21rem'></BoxPartners>
        <LinePartners transform='rotate(152deg)' width='10rem' top='7.6rem' left='16rem'/> */}
        <BoxPartners
          top='3rem' 
          left='25rem'
          Mtop='4rem'
          Mleft='22rem'
         >
          <ImagePartners width src={ImagePetronect} alt='Petronect' />
        </BoxPartners>
        <LinePartners 
          transform='rotate(150deg)' 
          width='11rem' 
          top='8rem' 
          left='17rem'
          Mtop='10rem'
          Mleft='14rem'
        />
        <CirclePartners
          color='#FDE7A9' 
          shadow='0px 0px 33px #FF611E66' 
          top='8rem' 
          left='13rem'
          Mtop='9rem' 
          Mleft='10rem'
        >
          <Logo width='60%' src={ImageLogoVnW} alt='Logo Vai na Web' />
        </CirclePartners>
        <LinePartners 
          transform='rotate(145deg)' 
          width='8rem' 
          top='13rem' 
          left='8.7rem'
          Mtop='18rem' 
          Mleft='4rem'
        />
        <CirclePartners
          color='#FFFFFF' 
          shadow='0px 0px 22px #00000029' 
          top='13rem' 
          left='7rem'
          Mtop='17rem' 
          Mleft='0rem'
         >
          <Logo width='50%' src={ImageRocket} alt='Foguete' />
        </CirclePartners>
        <LinePartners 
          transform='rotate(40deg)' 
          width='9rem' 
          top='17.5rem' 
          left='7rem'
          Mtop='26.5rem' 
          Mleft='5rem'
        />
        <CirclePartners 
          color='#FDE7A9' 
          shadow='0px 0px 33px #FF611E66' 
          top='18rem' 
          left='13rem' 
          Mtop='26rem' 
          Mleft='10rem'
        >
          <Logo width='70%' src={ImageEstudioVnW} alt='Logo Estudio Vai na Web' />
        </CirclePartners>
        <LinePartners 
          transform='rotate(130deg)' 
          width='9rem' 
          top='26rem' 
          left='7rem'
          Mtop='36rem' 
          Mleft='5rem'
          />
        <BoxPartners
         top='19rem' 
         left='27rem' 
         Mtop='27rem' 
        >
          <ImagePartners src={ImageSirio} alt='Hospital Sírio Libanês' />
        </BoxPartners>
        <LinePartners
          transform='rotate(40deg)' 
          width='11rem' 
          top='26rem' 
          left='16rem'
          Mtop='37rem' 
        />
        <BoxPartners
         top='28rem' 
         left='20rem' 
         Mtop='40rem' 
        >
          <ImagePartners src={ImageProadi} alt='Instituto Votorantim' />
        </BoxPartners>
        <LinePartners 
          transform='rotate(186deg)' 
          width='13rem' 
          top='21rem' 
          left='16rem'
          Mtop='30rem' 
        />
        <BoxPartners
          top='27rem' 
          left='5rem'
          Mtop='39rem' 
          Mleft='-3rem'
         >
          <ImagePartners src={ImageVotorantim} alt='Proadi SUS' />
        </BoxPartners>
      </div>
    )
  }

  return (
    <Layouts home>
    <BackgroundHeader />
      <ContentHeader>
        <ImageLogo src={ImageLogoVnW} alt='Logotipo' />
        <ContentCard>
          <CardHome />
        </ContentCard>
        <TextPresentation>
          Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as
          desigualdades e desenvolvemos a força de trabalho do futuro.
        </TextPresentation>
        <ButtonScroll onClick={scrollDow}><img src={ScrollArrow} alt="Seta de Rolagem" /></ButtonScroll>
      </ContentHeader>
      <DottedLineBackground>
        <ContainerNetwork id='content-1'>
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
      </DottedLineBackground>
    </Layouts>
  )
}

export default Home;
