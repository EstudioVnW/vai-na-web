import React, { useState } from 'react';
import * as S from './styles';

import Vania from '../../../images/images/Vania.png';
import VaniaCompany from '../../../images/images/sirio.png';
import Patricia from '../../../images/images/Patricia.png';
import PatriciaCompany from '../../../images/images/QuickCash.png';
import Elson from '../../../images/images/Elson.png';
import ElsonCompany from '../../../images/images/Petronect.png';
import Left from '../../../images/images/Path 7687.svg';
import Right from '../../../images/images/Path 7686.svg';

const Depositions = () => {
  const [slideIndex, setSlideIndex] = useState([1, 2, 3]);
  function slideScroll(scroll) {
    let newOrder = slideIndex;
    if (!scroll) {
      newOrder = slideIndex.map((i) => {
        if (i < 3) {
          return i + 1;
        }
        return 1;
      });
    } else {
      newOrder = slideIndex.map((i) => {
        if (i > 1) {
          return i - 1;
        }
        return 3;
      });
    }
    setSlideIndex(newOrder);
  }

  return (
    <S.Depositions>
      <S.DepositionsText>
        <S.DepositionsTitle>Depoimentos que nos impulsionam</S.DepositionsTitle>
        <S.DepositionsSubTitle>
          Veja o que os líderes têm a dizer sobre a atuação dos nossos
          <S.Bold> squads</S.Bold>
          :
        </S.DepositionsSubTitle>
      </S.DepositionsText>

      <S.DepositionsSlides>
        <S.Seta src={Left} onClick={() => slideScroll(0)} />

        <S.BoxSlideDepositions>

          <S.DepositionsSlideCard order={slideIndex[0]} focus={slideIndex[0] === 2}>
            <S.Image src={Patricia} focus={slideIndex[0] === 2} />
            <S.Description>
              “Even with a different language and time zone, the young people of Vai na Web
              <S.Bold>
                helped us to design and develop
                a brand new website to serve our customers.
              </S.Bold>
              Thank you Vai na Web for your commitment, dedication and creativity.”
            </S.Description>
            <S.Identification focus={slideIndex[0] === 2}>
              <S.IdentificationText>
                <S.Name>Patrícia Zaundi</S.Name>
                <S.Office>Diretora Executiva</S.Office>
              </S.IdentificationText>
              <S.ImageCompany src={PatriciaCompany} />
            </S.Identification>
          </S.DepositionsSlideCard>

          <S.DepositionsSlideCard order={slideIndex[1]} focus={slideIndex[1] === 2}>
            <S.Image src={Vania} focus={slideIndex[1] === 2} />
            <S.Description>
              “Estes meninos e meninas são preparados
              para o mercado de trabalho e desenvolvem entregas brilhantes.
              <S.Bold>
                O Sírio-Libanês tem muito orgulho dessa parceria que mostrou
                que é possível investir em inovação e formação simultaneamente.”
              </S.Bold>
            </S.Description>
            <S.Identification focus={slideIndex[1] === 2}>
              <S.IdentificationText>
                <S.Name>Vânia Bezerra</S.Name>
                <S.Office>Diretora de Compromisso Social</S.Office>
              </S.IdentificationText>
              <S.ImageCompany src={VaniaCompany} />
            </S.Identification>
          </S.DepositionsSlideCard>

          <S.DepositionsSlideCard order={slideIndex[2]} focus={slideIndex[2] === 2}>
            <S.Image src={Elson} focus={slideIndex[2] === 2} />
            <S.Description>
              “
              <S.Bold>
                Criatividade e usabilidade em escala foi o que conseguimos acelerar
                com a experiência de ter dentro da empresa jovens profissionais do Vai na Web.
              </S.Bold>
              <span>
                {' '}
                Não apenas novos produtos mas principalmente novas experiências
                com grande colaboração e alto nível de responsabilidade individual.
              </span>
              ”
            </S.Description>
            <S.Identification focus={slideIndex[2] === 2}>
              <S.IdentificationText>
                <S.Name>Elson Cordeiro</S.Name>
                <S.Office>Diretor de Operações e Serviços</S.Office>
              </S.IdentificationText>
              <S.ImageCompany src={ElsonCompany} />
            </S.Identification>
          </S.DepositionsSlideCard>
        </S.BoxSlideDepositions>

        <S.Seta src={Right} onClick={() => slideScroll(1)} />
      </S.DepositionsSlides>

      <S.DepositionsSlidesResponsive>
        <S.AnimationSlide>

          <S.BoxSlide>
            <S.DescriptionResponsive>
              “Estes meninos e meninas são preparados para
              o mercado de trabalho e desenvolvem entregas brilhantes.
              <S.Bold>
                O Sírio-Libanês tem muito orgulho dessa parceria que mostrou
                que é possível investir em inovação e formação simultaneamente.”
              </S.Bold>
            </S.DescriptionResponsive>
            <S.IdentificationResponsive>
              <S.ImagePeopleResponsive src={Vania} />
              <S.TextIdentificationResponsive>
                <S.NameResponsive>Vânia Bezerra</S.NameResponsive>
                <S.OfficeResponsive>Diretora de Compromisso Social</S.OfficeResponsive>
                <S.ImageCompanyResponsive src={VaniaCompany} />
              </S.TextIdentificationResponsive>
            </S.IdentificationResponsive>
          </S.BoxSlide>

          <S.BoxSlide>
            <S.DescriptionResponsive>
              “
              <S.Bold>
                Criatividade e usabilidade em escala foi o que conseguimos acelerar
                com a experiência de ter dentro da empresa jovens profissionais do Vai na Web.
              </S.Bold>
              <span>
                {' '}
                Não apenas novos produtos mas principalmente novas experiências
                com grande colaboração e alto nível de responsabilidade individual.
              </span>
            </S.DescriptionResponsive>
            <S.IdentificationResponsive>
              <S.ImagePeopleResponsive src={Elson} />
              <S.TextIdentificationResponsive>
                <S.NameResponsive>Elson Cordeiro</S.NameResponsive>
                <S.OfficeResponsive>Diretor de Operações e Serviços</S.OfficeResponsive>
                <S.ImageCompanyResponsive src={ElsonCompany} style={{ padding: '0 12px' }} />
              </S.TextIdentificationResponsive>
            </S.IdentificationResponsive>
          </S.BoxSlide>

          <S.BoxSlide>
            <S.DescriptionResponsive>
              “Even with a different language and time zone, the young people of Vai na Web
              <S.Bold>
                helped us to design and develop
                a brand new website to serve our customers.
              </S.Bold>
              Thank you Vai na Web for your commitment, dedication and creativity.”
            </S.DescriptionResponsive>
            <S.IdentificationResponsive>
              <S.ImagePeopleResponsivePatricia src={Patricia} />
              <S.TextIdentificationResponsive>
                <S.NameResponsive>Patrícia Zaundi</S.NameResponsive>
                <S.OfficeResponsive>Diretora Executiva</S.OfficeResponsive>
                <S.ImageCompanyResponsive src={PatriciaCompany} />
              </S.TextIdentificationResponsive>
            </S.IdentificationResponsive>
          </S.BoxSlide>

        </S.AnimationSlide>
      </S.DepositionsSlidesResponsive>

    </S.Depositions>
  );
};

export default Depositions;
