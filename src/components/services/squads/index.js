import React from 'react';
import { navigate } from 'gatsby';
import * as S from './styles';
import Button from '../../button/Button';

import squadsImg from '../../../images/images/squadsImg.png';

const Squads = (props) => {
  const redirectToConcact = () => {
    navigate('/modelo/');
  };
  return (
    <S.SquadsContainer>
      <S.SquadsBg>
        <S.SquadsWrap>
          <S.SquadsText>
            Toda vez que sua empresa contrata os squads do Vai na Web ela contribui diretamente para
            <strong> inspirar, equipar e educar mais pessoas </strong>
            para atender aos desafios da economia digital.
          </S.SquadsText>
          <S.BoxButton>
            <Button
              border="#0e2762"
              color="#fbd4b2"
              background="#0F2B92"
              funcAction={redirectToConcact}
              width="16rem"
              colorHover="#FFF"
            >
              Conheça nosso modelo!
            </Button>
          </S.BoxButton>
        </S.SquadsWrap>
        <S.SquadsBox>
          <S.SquadsImg src={squadsImg} alt="Alunos do Vai na Web" />
          <S.SquadsIcon>
            <S.IconText>
              <span>100%</span>
              do lucro é reinvestido
            </S.IconText>
          </S.SquadsIcon>
        </S.SquadsBox>
      </S.SquadsBg>
    </S.SquadsContainer>
  );
};

export default Squads;
