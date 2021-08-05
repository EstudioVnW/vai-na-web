import React from 'react';
import * as S from './styles';

import mobileLine2 from '../../../images/images/mobileLine2.svg';
import line from '../../../images/images/line.svg';
import squadsMobile from '../../../images/images/squadsMobile.png';
import squads from '../../../images/images/squads.png';

const SquadsInfo = () => (
  <S.SquadsContainer>
    <S.SquadsWrap>
    <S.SquadsTitle>
      Configure seus squads
    </S.SquadsTitle>
    <S.SquadsText>
      Cada desafio demanda uma composição única de time, 
      e para alcançar os <br/> melhores resultados vamos te ajudar
       a configurar o seu squad remoto.
    </S.SquadsText>
    <S.SquadsContent>
      <S.SquadsImg
        src={squads}
        alt="Equipe de seis pessoas sorrindo e discutindo juntos no sofá"
      />
      <S.SquadsImgMobile
        src={squadsMobile}
        alt="Equipe de seis pessoas sorrindo e discutindo juntos no sofá"
      />
        <S.Squads>
          <S.MobLineV src={mobileLine2} alt="" />
          <S.SquadsBox>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
              Designer
            </S.SquadsPerson>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
                Desenvolvedor Front-End
            </S.SquadsPerson>
          </S.SquadsBox>
          <S.SquadsBox>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
                 Product Owner
              </S.SquadsPerson>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
              Desenvolvedor Back-End
            </S.SquadsPerson>
          </S.SquadsBox>
          <S.SquadsBox>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
              Scrum Master
            </S.SquadsPerson>
            <S.SquadsPerson>
              <S.Line src={line} alt=""/>
              Teste e Qualidade
            </S.SquadsPerson>
          </S.SquadsBox>
      </S.Squads>
    </S.SquadsContent>
    </S.SquadsWrap>
  </S.SquadsContainer>
);

export default SquadsInfo;
