/* eslint-disable max-len */
import React from 'react';
import * as S from './styles';

import backlogIcon from '../../../images/images/backlogIcon.svg';
import responsiveIcon from '../../../images/images/responsiveIcon.svg';
import mvpIcon from '../../../images/images/mvpIcon.svg';

const Cards = () => (
  <S.Container>
    <S.Cards>
      <S.Card>
        <S.CardDetail>
          <S.CardCircle />
          <S.CardCircle />
          <S.CardCircle />
        </S.CardDetail>
        <S.IconBg>
          <S.CardIcon src={backlogIcon} alt='' />
        </S.IconBg>
        <S.CardTitle>Backlog de Produtos Digitais</S.CardTitle>
        <S.CardText>Crie ou aprimore funcionalidades que geram valor para o usuário através de entregas contínuas de design e desenvolvimento web e mobile.</S.CardText>
      </S.Card>

      <S.Card>
        <S.CardDetail>
          <S.CardCircle />
          <S.CardCircle />
          <S.CardCircle />
        </S.CardDetail>
        <S.IconBg>
          <S.CardIcon src={responsiveIcon} alt='' />
        </S.IconBg>
        <S.CardTitle>Canais digitais, responsivos e acessíveis</S.CardTitle>
        <S.CardText>
          Desenvolva sites, sistemas, portais, e-commerces dinâmicos que beneficiem
          <strong> todos</strong>
          , e não apenas alguns. Foco nos princípios da acessibilidade, inclusão e adaptabilidade multitelas.
        </S.CardText>
      </S.Card>

      <S.Card>
        <S.CardDetail>
          <S.CardCircle />
          <S.CardCircle />
          <S.CardCircle />
        </S.CardDetail>
        <S.IconBg>
          <S.CardIcon src={mvpIcon} alt='' />
        </S.IconBg>
        <S.CardTitle>MVPs ágeis e escaláveis</S.CardTitle>
        <S.CardText>Descoberta, ideação e implementação de MVPs rapidamente e em escala. Agende, sem custo, uma sessão de descoberta de requisitos.</S.CardText>
      </S.Card>
    </S.Cards>
  </S.Container>
);

export default Cards;
