import React from 'react';
import * as S from './styles';

import squadsImg from '../../../images/images/squadsImg.png';

const Squads = () => (
  <S.SquadsContainer>
    <S.SquadsBg>
      <S.SquadsText>
        Toda vez que sua empresa contrata os squads do Vai na Web ela contribui diretamente para
        <strong> inspirar, equipar e educar mais pessoas </strong>
        para atender aos desafios da economia digital.
      </S.SquadsText>
      <S.SquadsBox>
        <S.SquadsImg src={squadsImg} alt='Alunos do Vai na Web' />
        <S.SquadsIcon>
          <S.IconText>
            <span>100%</span>
            do faturamento é reinvestido
          </S.IconText>
        </S.SquadsIcon>
      </S.SquadsBox>
    </S.SquadsBg>
  </S.SquadsContainer>
);

export default Squads;
