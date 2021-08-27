import React from 'react';
import * as S from './styles';

import QuoteProfile from '../../../images/images/QuoteProfile.png';
import Line from '../../../images/images/Path8850.svg';
import LineMobile from '../../../images/images/Path8889.svg';

const ModelQuote = () => (
  <S.QuoteContainer>
    <S.Wrap>
      <S.Profile src={QuoteProfile} />
      <S.TextBox>
        <S.QuoteMark>“</S.QuoteMark>
        <S.Text>
          <i>As pessoas que transformarão nossos negócios, nossas economias e nosso país não necessariamente virão dos grandes centros ou das mais prestigiadas faculdades.</i>
          {' '}
          <strong>São as pessoas que conhecem a realidade das ruas, empoderadas pela tecnologia, que darão luz a uma nova onda de crescimento, inovação e produtividade.</strong>
          <i> - Igor Couto, CEO 1STi</i>
        </S.Text>
        <S.QuoteLineMobile src={LineMobile} />
        <S.BottomQuoteMark>“</S.BottomQuoteMark>
        <S.QuoteLine src={Line} />
      </S.TextBox>
    </S.Wrap>
  </S.QuoteContainer>
);

export default ModelQuote;
