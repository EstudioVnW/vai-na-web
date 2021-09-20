import React from 'react';
import * as S from './styles';

import downArrow from '../../../images/images/downArrow.svg';
import headerImg from '../../../images/images/headerImg.png';

const ServiceHeader = () => (
  <S.HeaderContainer>
    <S.HeaderWrap>
      <S.HContentBox>
        <S.HImgBox>
          <S.HImg src={headerImg} alt="Três mulheres sorrindo para o computador" />
        </S.HImgBox>
        <S.HTextBox>
          <S.HDescription><i>"Por meio de trabalho duro e educação, podemos promover uma economia forte e oportunidades para todos"</i></S.HDescription>
          <S.HDescription><strong>Julia Gillard</strong></S.HDescription>
        </S.HTextBox>
      </S.HContentBox>
      <S.HCard>
        <S.HCardDetail>
          <S.HCardCircle />
          <S.HCardCircle />
          <S.HCardCircle />
        </S.HCardDetail>
        <S.HCardText>Acelere suas entregas digitais com os squads do Vai na Web</S.HCardText>
      </S.HCard>
      <S.HDownArrow>
        <img src={downArrow} alt="Seta apontando para baixo" />
      </S.HDownArrow>
    </S.HeaderWrap>
  </S.HeaderContainer>
);

export default ServiceHeader;
