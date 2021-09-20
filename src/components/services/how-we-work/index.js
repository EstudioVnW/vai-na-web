import React from 'react';
import * as S from './styles';

import InfoImg from '../../../images/images/infographic.png';
import InfoImgMobile from '../../../images/images/infographicMobile.png';

const HowWeWork = () => (
  <S.InfoContainer>
    <S.Wrap>
      <S.InfoText>
        Trabalhamos como uma parte remota do seu time, acelerando suas
        <br />
        entregas de design e desenvolvimento web e mobile.
      </S.InfoText>
      <S.Infographic>
        <S.InfoImg src={InfoImg} alt="Infográfico Processo Ágil" />
        <S.InfoImgMobile src={InfoImgMobile} alt="Infográfico Processo Ágil" />
      </S.Infographic>
    </S.Wrap>
  </S.InfoContainer>
);

export default HowWeWork;
