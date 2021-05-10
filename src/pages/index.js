import React from "react";
import styled from 'styled-components';
import './index.css';
// import scrollTo from 'gatsby-plugin-smoothscroll';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';
import PartnerSchols from '../components/home/PartnerSchool';
import OverEstudio from '../components/home/OverEstudio';
import ReinvestedMoney from '../components/home/ReinvestedMoney';
import Depositions from '../components/home/Depositions';
import History from '../components/home/History';

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
import ImageBrasil from '../images/images/Group7507.png';


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
  margin-top: 2rem;

  @media (min-width: 1920px) {
    margin-top: 15rem;
	}
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

const TextDescriptionAll = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5rem;
  width: 17.5rem;
  margin-left: 11.4rem;
  margin-top: -1rem;
  margin-bottom: 2rem;

  @media (min-width: 1920px) {
    margin-left: 16.4rem;
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	}
`;

const BoldTextAll = styled.b`
  font-weight: 500;
`;

const BoldBackground = styled.b`
  font-weight: 500;
  background: #FDE7A9 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 1;
`;

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

const Content = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
`;

const SubTitleCases = styled.p `
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5rem;
  width: 17.5rem;
  margin-left: 11.6rem;
  margin-top: -1rem;

  @media (min-width: 1920px) {
    margin-left: 16.6rem;
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
	}
`;

const ContainerCases = styled.div `
  margin-top: 2.5rem;
  margin-left: 11.6rem;
  display: flex;

  @media (min-width: 1920px) {
    margin-left: 15.6rem;
	}
`;

const ImageSideCases = styled.img `
  margin-right: 1rem;
  height: 20rem;
  background-color: #FFFFFF;
  margin-top: 15rem;

  @media (min-width: 1920px) {
    width: 8rem;
    margin-top: 23.7rem;
	}
`;

const BoxCases = styled.div `
  width: 840px;
  height: 561px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 22px #00000029;
  border: 2px solid #00145D;
  border-radius: 20px;
  display: flex;
  padding: 1.5rem;
  margin-bottom: 5rem;

  @media (min-width: 1920px) {
    width: 1251px;
    height: 698px;
	}
`;

const BoxTextCases = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
`;

const TitleBoxCases = styled.h3 `
  color: #0F2B92;
  font-size: 30px;
  width: 90%;
  font-weight: 700;
  line-height: 2.6rem;

  @media (min-width: 1920px) {
    font-size: 44px;
    line-height: 3.6rem;
	}
`;

const TextBoxCases = styled.p `
  font-size: 11px;
  font-weight: 100;
  line-height: 1.5rem;
  width: 87%;

  @media (min-width: 1920px) {
    font-size: 18px;
    line-height: 2rem;
    width: 91%;
	}
`;

const BoxAllInsideCases = styled.div `
  width: 70%;
`;

const ContainerAllTextInsideCases = styled.div `
  display: flex;
  flex-direction: column;
  height: 7rem;
  justify-content: space-between;

  @media (min-width: 1920px) {
    height: 10rem;
	}
`;

const BoxTextInsideCases = styled.div `
  display: flex;
  justify-content: space-between;
`;

const BoxItemText = styled.div `
  display: flex;
  
`;

const TextOrangeCases = styled.p `
  color: #FF611E;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11px;
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};

  @media (min-width: 1920px) {
    font-size: 20px;
    margin-right: ${props => props.Mright};
	}
`;

const TextComplementOrange = styled.p `
  color: #272727;
  text-align: left;
  font-size: 11px;
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};

  @media (min-width: 1920px) {
    font-size: 20px;
    margin-right: ${props => props.Mright};
    margin-left: ${props => props.Mleft};
	}
`;

const BoxImageCases = styled.div `
  display: flex;
  margin-right: 3rem;

  @media (min-width: 1920px) {
    margin-right: 6rem;
	}
`;

const ImagePersonCases = styled.div `
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: red;
  border: 1px solid #0F2B92;
  box-shadow: 0px 0px 33px #FF611E40;
  position: relative;
  z-index: ${props => props.index};
  left: ${props => props.left};


  @media (min-width: 1920px) {
    width: 5rem;
    height: 5rem;
    left: ${props => props.Mleft};
	}
`;


const Home = (props) => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br/> nos impulsiona' };
  const isTitleCases = { typePage: 'Cases', title: 'Missões <br/> de sucesso'};
 
  

  const RenderHeader = () => (
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
  );

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

  const RenderNetwork = () => (
    <ContainerNetwork id='content-1'>
      <div>
        <PageTitle data={isTitle} isPage='isHome' />
        <TextDescriptionAll>
          A partir de uma <BoldTextAll>rede colaborativa e sustentável</BoldTextAll>, composta de grandes empresas,
          parceiros e amigos, trabalhamos na vanguarda das tecnologias digitais e sociais
          <BoldTextAll> para entregar soluções com inovação, maturidade digital e transformação humana. </BoldTextAll>
          Com o objetivo <BoldBackground>de diminuir de forma inteligente a desigualdade social,</BoldBackground> qualificamos
          pessoas, geramos empregos dignos no mercado de tecnologia e reduzimos o gap de gênero no país.
        </TextDescriptionAll>
      </div>
      <ContainerPartners>
        {PartnerNetworks()}
      </ContainerPartners>
    </ContainerNetwork>
  )

  const Cases = () => {
    return (
      <div>
        <PageTitle data={isTitleCases} isPage='isHome' />
        <SubTitleCases>Saiba como ajudamos os nossos clientes a realizar suas missões:</SubTitleCases>
        <ContainerCases>
          <ImageSideCases src={ImageBrasil} alt='Conjunto de Imagens'/>
          <BoxCases id="Slide">
            <BoxTextCases>
              <TitleBoxCases>
                Inovando o sistema de atendimento do SUS
              </TitleBoxCases>
              <TextBoxCases>
                Em parceria com o Hospital Sírio-Libanês e o PROADI-SUS desenvolvemos o Reg+.
                Um sistema de telemedicina para regular as filas do SUS em todo o Brasil, otimizando o 
                tempo de atendimento e diagnóstico dos pacientes através da integração das jornadas de médicos,
                enfermeiros, atendentes e consultores de saúde.
              </TextBoxCases>
            </BoxTextCases>
            <BoxAllInsideCases>
              <ContainerAllTextInsideCases>
                <BoxTextInsideCases>
                  <BoxItemText>
                    <TextOrangeCases>Cliente</TextOrangeCases>
                    <TextComplementOrange left='1rem'>Hospital Sírio-Libanês e o PROADI-SUS</TextComplementOrange>
                  </BoxItemText>
                  <BoxItemText>
                    <TextOrangeCases left='2rem'>tecnologias</TextOrangeCases>
                    <TextComplementOrange left='1rem'>#Design #React #Redux #Dynamo #StyleComponents</TextComplementOrange>
                  </BoxItemText>
                </BoxTextInsideCases>
                <BoxTextInsideCases>
                  <BoxItemText>
                    <TextOrangeCases left='-14px'>Ano</TextOrangeCases>
                    <TextComplementOrange Mleft='4.4rem' left='3.3rem'>2020</TextComplementOrange>
                  </BoxItemText>
                  <BoxItemText>
                    <TextOrangeCases Mright='5rem' right='3rem'>equipe</TextOrangeCases>
                    <BoxImageCases left='1rem'>
                      <ImagePersonCases  />
                      <ImagePersonCases left='-10px' Mleft='-20px' index='1'/>
                      <ImagePersonCases left='-22px' Mleft='-38px' index='1'/>
                    </BoxImageCases>
                  </BoxItemText>
                </BoxTextInsideCases>
              </ContainerAllTextInsideCases>
              <div>

              </div>
            </BoxAllInsideCases>
          </BoxCases>
        </ContainerCases>
      </div>
    )
  }

  return (
    <Layouts home>
      <BackgroundHeader />
        {RenderHeader()}
        <DottedLineBackground>
        {RenderNetwork()}
        <Content>
          <PartnerSchols />
        </Content>
        <Content>
          <OverEstudio />
        </Content>
        <ReinvestedMoney />
        {Cases()}
        <Depositions />
        <p>Blog</p>
        <History />
      </DottedLineBackground>
    </Layouts>
  )
}

export default Home;
