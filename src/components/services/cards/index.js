/* eslint-disable max-len */
import React from 'react';
import * as S from './styles';

import backlogIcon from '../../../images/images/backlogIcon.svg';
import responsiveIcon from '../../../images/images/responsiveIcon.svg';
import mvpIcon from '../../../images/images/mvpIcon.svg';
import ImageVtex from '../../../images/images/Logo-Powered-By-Vtex(home-serviços).png';

const Cards = () => (
  <S.Container>
    <S.CardsText>
      <S.CardTextTitle>Acelere suas entregas digitais</S.CardTextTitle>
      <S.CardTextSubTitle>
        Através de entregas contínuas de design
        e desenvolvimento web e mobile
      </S.CardTextSubTitle>
    </S.CardsText>
    <S.Cards>
      <S.Card>
        <S.CardDetail>
          <S.CardCircle />
          <S.CardCircle />
          <S.CardCircle />
        </S.CardDetail>
        <S.IconBg>
          <S.CardIcon src={backlogIcon} alt="" />
        </S.IconBg>
        <S.CardTitle>MVPs ágeis e escaláveis</S.CardTitle>
        <S.CardText>Descoberta, ideação e implementação de MVPs rapidamente e em escala. Agende, sem custo, uma sessão de descoberta de requisitos.</S.CardText>
      </S.Card>

      <S.Card>
        <S.CardDetail>
          <S.CardCircle />
          <S.CardCircle />
          <S.CardCircle />
        </S.CardDetail>
        <S.IconBg>
          <S.CardIcon src={responsiveIcon} alt="" />
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
          <S.CardIcon src={mvpIcon} alt="" />
        </S.IconBg>
        <S.CardTitle>E-commerce</S.CardTitle>
        <S.CardText>Implantação de lojas online utilizando a plataforma Vtex io. Desenvolvemos os layouts.</S.CardText>
        <S.CardVtexImage>
          <S.ImageVtex src={ImageVtex} />
        </S.CardVtexImage>
      </S.Card>
    </S.Cards>
  </S.Container>
);

export default Cards;
