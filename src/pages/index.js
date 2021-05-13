import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import './index.css';

//Components
import Layouts from '../components/Layouts';
import PageTitle from '../components/pageTitle/pageTitle';
import CardHome from '../components/home/card';
import PartnerSchols from '../components/home/PartnerSchool';
import OverEstudio from '../components/home/OverEstudio';
// import ReinvestedMoney from '../components/home/ReinvestedMoney';
import Cases from '../components/home/Cases';
import Depositions from '../components/home/Depositions';
import History from '../components/home/History';
import RocketFooter from '../components/home/rocketFooter';
import ArticleBlog from '../components/blog/articleBlog'

//Imagens
import BackgroundImage from '../images/images/dottedLine.svg';
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
const BackgroundHeader = styled.div`
  position: absolute;
  top: -2rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${BackHeader}); 
  background-repeat: no-repeat;
  /* background-size: 105% 100%; */
  background-size: cover;
  background-position: right;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 4rem;
`;

// const ContentHeader = styled.section`
//   height: 100vh;
// `;

const DottedLineBackground = styled.div`
  background: url(${BackgroundImage}); 
  background-repeat: no-repeat; 
  background-size: 100%;
`;

// const ContentNetwork = styled.div`
//   padding-bottom: 8.777rem;
// `;

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
  padding-top: 5rem;
  padding-left: 2rem;
  border: none;
  background: transparent;
  /* margin-bottom: 10rem; */
`;

const ContainerNetwork = styled.div`
  /* margin-bottom: 8.777rem; */
  margin-top: 60vh;
  padding-bottom: 10rem;
`;

const ContentNetwork  = styled.div`
  /* height: 100vh;
  width: 100%; */
  display: flex;
  /* margin-top: 2rem; */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-bottom: 20rem; */
  }

`;

const ContainerTextNetwork = styled.div`
  width: 30%;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageLogo = styled.img`
  position: relative;
  width: 9rem;
  margin: 0 0 2% 4%;

  @media (max-width: 768px) {
   margin: 0 0 2% 8%;
  }
`;

const TextDescriptionAll = styled.p`
  margin-bottom: 2rem;
  width: 19rem;
  font-size: .938rem;
  font-weight: 400;
  line-height: 1.5rem;

  @media (min-width: 1920px) {
    /* margin-left: 16.4rem; */
    line-height: 2.5rem;
    font-size: 22px;
    width: 27.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media (max-width: 425px) {
    width: 75%;
    margin-left: 0px;
    line-height: 1.8rem;
    font-size: 16px;
  }
`;

const BoldTextAll = styled.b`
  font-weight: 600;
`;

const BoldBackground = styled.b`
  font-weight: 500;
  background: #FDE7A9 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 1;
`;

const ContainerPartners = styled.div`
  position: relative;
  margin-top: -11rem;

  @media (min-width: 1920px) {
    margin-left: 10rem;
  }
  
  @media (max-width: 768px) {
    margin-left: -39rem;
    margin-bottom: 5rem;
    margin-top: 0px;
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
  
  @media (max-width: 768px) {
    border-radius: 42px;
    width: 8.5rem;
    height: 3.5rem;
    top: ${props => props.MobileTop};
  }

  @media (max-width: 425px) {
    top: ${props => props.MobileeTop};
    left: ${props => props.MobileeLeft};
    width: 7.4rem;
    height: 2.9rem;
  }
`;

const ImagePartners = styled.img`
  width: ${props => props.width ? '60%' : '85%'};
`;

const CirclePartners = styled.div`
  width: 7rem;
  height: 7rem;
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
  
  @media (max-width: 425px) {
    top: ${props => props.MobileeTop};
    left: ${props => props.MobileeLeft};
    width: 4.5rem;
    height: 4.5rem;
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
  
  @media (max-width: 425px) {
    top: ${props => props.MobileeTop};
    left: ${props => props.MobileeLeft};
    width: ${props => props.MobileeWidth};
  }
`;

const SubTitleCases = styled.p`
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

const ContainerCases = styled.div`
  margin-top: 2.5rem;
  margin-left: 11.6rem;
  display: flex;
`;

const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsItem = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        id
        title
        excerpt 
        publishedAt
        publishDate
        createdAt
        tags {
          name
        }
        content {
          html
        }
        cover {
          url
        }
        authors {
          id
          name
          jobTitle
          socialNetworkLink
          bio {
            html
          }
          photo {
            url
          }
        }
      }
    }
  }
`

const Home = (props) => {
  const isTitle = { typePage: 'Rede', title: 'A força que <br/> nos impulsiona' };
  const isTitleCases = { typePage: 'Cases', title: 'Missões <br/> de sucesso' };
  const isTitleDepositions = { typePage: 'Depoimentos', title: 'Mensagens <br/> de impacto' }
  const isTitleSchool = { typePage: 'Escola', title: 'Uma plataforma de lançamento de estrelas' };

  const RenderHeader = () => (
    <>
      <ImageLogo src={ImageLogoVnW} alt='Logotipo' />
      <ContentCard>
        <CardHome />
      </ContentCard>
      <TextPresentation>
        Vai na Web é uma rede de alta tecnologia e impacto social. Juntos, reduzimos as
        desigualdades e desenvolvemos a força de trabalho do futuro.
      </TextPresentation>
      <ButtonScroll onClick={scrollDow}><img src={ScrollArrow} alt="Seta de Rolagem" /></ButtonScroll>
    </>
  );

  const PartnerNetworks = () => {
    return (
      <div>
        <BoxPartners
          top='3rem'
          left='25rem'
          Mtop='4rem'
          Mleft='22rem'
          MobileeTop='6.5rem'
          MobileeLeft='22rem'
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
          MobileeTop='9.5rem'
          MobileeWidth='7rem'
        />
        <CirclePartners
          color='#FDE7A9'
          shadow='0px 0px 33px #FF611E66'
          top='8rem'
          left='13rem'
          Mtop='9rem'
          Mleft='10rem'

          MobileeTop='9.5rem'
          MobileeLeft='14rem'
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

          MobileeTop=''
          MobileeLeft='10.7rem'
          MobileeWidth=''
        />
        <CirclePartners
          color='#FFFFFF'
          shadow='0px 0px 22px #00000029'
          top='13rem'
          left='6rem'
          Mtop='17rem'
          Mleft='0rem'

          MobileeTop=''
          MobileeLeft='9rem'
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

          MobileeTop=''
          MobileeLeft='9rem'
          MobileeWidth=''
        />
        <CirclePartners
          color='#FDE7A9'
          shadow='0px 0px 33px #FF611E66'
          top='18rem'
          left='13rem'
          Mtop='26rem'
          Mleft='10rem'

          MobileeTop='17rem'
          MobileeLeft='14rem'
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

          MobileeTop='22rem'
          MobileeLeft='10rem'
          MobileeWidth='7rem'
        />
        <BoxPartners
          top='19rem'
          left='27rem'
          Mtop='27rem'

          MobileTop='20rem'

          MobileeTop='19rem'
          MobileeLeft='23rem'
        >
          <ImagePartners src={ImageSirio} alt='Hospital Sírio Libanês' />
        </BoxPartners>
        <LinePartners
          transform='rotate(40deg)'
          width='11rem'
          top='26rem'
          left='16rem'
          Mtop='37rem'

          MobileeTop='23rem'
          MobileeLeft='15.5rem'
          MobileeWidth='9rem'
        />
        <BoxPartners
          top='28rem'
          left='20rem'
          Mtop='40rem'

          MobileeTop='25rem'
          MobileeLeft='20rem'
        >
          <ImagePartners src={ImageProadi} alt='Instituto Votorantim' />
        </BoxPartners>
        <LinePartners
          transform='rotate(186deg)'
          width='13rem'
          top='21rem'
          left='16rem'
          Mtop='30rem'

          MobileeTop='20.1rem'
          MobileeWidth='7rem'
          MobileeLeft='18rem'
        />
        <BoxPartners
          top='27rem'
          left='5rem'
          Mtop='39rem'
          Mleft='-3rem'

          MobileeTop='24rem'
          MobileeLeft='9rem'
        >
          <ImagePartners src={ImageVotorantim} alt='Proadi SUS' />
        </BoxPartners>
      </div>
    )
  }

  const RenderNetwork = () => (
    <ContainerNetwork>
      <PageTitle data={isTitle} isPage='isHome' padBott='5rem'/>
      <ContentNetwork id='content-1'>
        <ContainerTextNetwork>
          <TextDescriptionAll>
            A partir de uma <BoldTextAll>rede colaborativa e sustentável</BoldTextAll>, composta de grandes empresas,
            parceiros e amigos, trabalhamos na vanguarda das tecnologias digitais e sociais
            <BoldTextAll> para entregar soluções com inovação, maturidade digital e transformação humana. </BoldTextAll>
            Com o objetivo <BoldBackground>de diminuir de forma inteligente a desigualdade social,</BoldBackground> qualificamos
            pessoas, geramos empregos dignos no mercado de tecnologia e reduzimos o gap de gênero no país.
          </TextDescriptionAll>
        </ContainerTextNetwork>
        <ContainerPartners>
          {PartnerNetworks()}
        </ContainerPartners>
      </ContentNetwork>
    </ContainerNetwork>
  )

  return (
    <Layouts home>
      <BackgroundHeader />
      <Content>
        {RenderHeader()}
        <DottedLineBackground>
          {RenderNetwork()}
          <PartnerSchols />
          <OverEstudio />
          {Cases()}
          <Depositions />
          <ArticleBlog home data={props.data} />
          <History />
          <RocketFooter />
        </DottedLineBackground>
      </Content>
    </Layouts>
  )
}

export default Home;
