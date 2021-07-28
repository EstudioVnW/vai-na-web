import React from 'react';
import * as S from './styles';

// Image
import ImageHome from '../../../images/images/VNW-66.png';

const Header = () => (
  <S.Header>
    <S.Wrap>
      <S.CardHome>
        <S.BoxCircle>
          <S.Circles>
            <S.Circle />
            <S.Circle />
            <S.Circle />
          </S.Circles>
          <S.TextCircle>#deeptalent</S.TextCircle>
        </S.BoxCircle>
        <S.Line />
        <S.Title>Acelere suas entregas digitais</S.Title>
        <S.SubTitle>Com a força da diversidade e inclusão</S.SubTitle>
      </S.CardHome>
      <S.ImageEstudio src={ImageHome} alt="FotoEStudio" />
    </S.Wrap>
  </S.Header>
);

export default Header;
