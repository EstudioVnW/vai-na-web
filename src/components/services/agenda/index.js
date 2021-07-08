import React from 'react';
import * as S from './styles';

import ods from '../../../images/images/ods.png';

const Agenda = () => (
  <S.AgendaContainer>
    <S.AgendaWrap>
    <S.AgendaBox>
      <S.AgendaTitle>Agenda 2030</S.AgendaTitle>
      <S.AgendaText>O Vai na Web contribui com a agenda 2030 e atende diretamente 7 dos 17 Objetivos Globais para o Desenvolvimento Sustentável.</S.AgendaText>
      <S.AgendaText>A Agenda 2030 é um plano de ação para governos, empresas, sociedade, academias e para você. Através dela, vamos juntos preservar o planeta, gerar prosperidade e fortalecer a paz mundial.</S.AgendaText>
    </S.AgendaBox>
    </S.AgendaWrap>
    <S.AgendaImg>
      <S.odsImg src={ods} alt="Objetivos Globais para o Desenvolvimento Sustentável"/>
    </S.AgendaImg>
  </S.AgendaContainer>
);

export default Agenda;
