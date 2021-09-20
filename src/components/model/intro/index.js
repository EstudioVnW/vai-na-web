import React from 'react';
import * as S from './styles';

const ModelIntro = () => (
  <S.IntroContainer>
    <S.Wrap>
      <S.TitleBox>
        <S.Title>
          Até 2025, o mercado brasileiro 
          demandará mais de 300 mil novos talentos digitais
        </S.Title>

        <S.Text>
          A solução para esse déficit
          {' '}
          <strong>não é</strong>
          {' '}
          remanejar as pessoas que já estão empregadas ou investir naquelas 
          que independente de estímulos vão entrar no mercado de trabalho. 
          Mas sim capacitar e requalificar aqueles que estão à margem e inseri&#8209;los.
        </S.Text>
      </S.TitleBox>

      <S.BoxRow>
        <S.TextBox>
          <S.RowNumber>
            27
            <span>milhões</span>
          </S.RowNumber>
          <S.RowText>vivendo abaixo da linha da pobreza</S.RowText>
        </S.TextBox>
        <S.TextBox>
          <S.RowNumber>
            14
            <span>milhões</span>
          </S.RowNumber>
          <S.RowText>de desempregados</S.RowText>
        </S.TextBox>
        <S.TextBox>
          <S.RowNumber>30%</S.RowNumber>
          <S.RowText>destes são jovens entre 18 e 24 anos</S.RowText>
        </S.TextBox>
        <S.TextBox>
          <S.RowNumber>
            95%
            <S.RowText>das pessoas desempregadas estão nas classes C, D e E. </S.RowText>
          </S.RowNumber>
          <S.RowText>
            Majoritariamente mulheres, jovens e negros 
            com moradias em favelas e periferias.
          </S.RowText>
        </S.TextBox>
      </S.BoxRow>
      <S.SourceText>
        <strong>Fonte</strong>
        {' '}
        Organização Internacional do Trabalho e Valor Econômico
      </S.SourceText>
    </S.Wrap>
  </S.IntroContainer>
);

export default ModelIntro;
