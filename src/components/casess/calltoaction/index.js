import React from 'react';
import { navigate } from 'gatsby';

import * as S from './styles';
import Button from '../../button/Button';

const redirectToContact = () => {
  navigate('/reserve-seu-squad/');
};

const CasesCalltoaction = () => (
  <S.CallContainer>
    <S.Wrap>
      <S.Content>
        <S.TitleBox>
          <S.Title>Você tem desafios semelhantes?</S.Title>
          <S.SubTitle>Deixa a gente te ajudar</S.SubTitle>
          <S.ButtonBox>
            <Button
              border="#0e2762"
              color="#fbd4b2"
              colorHover="#FFF"
              background="#0F2B92"
              funcAction={redirectToContact}
            >
              Reserve seu Squad!
            </Button>
          </S.ButtonBox>
        </S.TitleBox>

        <S.TextBox>
          <S.Text>"A melhor maneira de formar profissionais de qualidade é permitindo que eles colaborem em projetos reais."</S.Text>
          <S.Text><strong>Aline Fróes, cofundadora do Vai na Web</strong></S.Text>
        </S.TextBox>
      </S.Content>
    </S.Wrap>
  </S.CallContainer>
);

export default CasesCalltoaction;
