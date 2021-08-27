import React from 'react';
import * as S from './styles';

// Components
import Programming from '../../../images/images/programming.svg';
import Website from '../../../images/images/website.svg';
import Feelings from '../../../images/images/feelings.svg';

import Update from '../../../images/images/update.svg';
import Class from '../../../images/images/class.svg';
import Classes from '../../../images/images/classes.svg';
import Presentation from '../../../images/images/presentation.svg';

import VnWSchool from '../../../images/images/VNW-44.png';
import VnWSchoolMobile from '../../../images/images/VNW-444.png';

const ClassesSchool = () => (
  <S.Container>
    <S.Wrap>
      <S.Title>Aulas práticas, dinâmicas e alto astral</S.Title>

      <S.BoxTask>
        <S.Task>
          <S.Icon src={Programming} alt="Computador com codigos" />
          <S.Paragraph>Ambientes reais de desenvolvimento</S.Paragraph>
        </S.Task>

        <S.Task order="-1">
          <S.Icon src={Website} alt="Computador em um site" />
          <S.Paragraph>Diversos projetos para o seu portfólio</S.Paragraph>
        </S.Task>

        <S.Task>
          <S.Icon src={Feelings} alt="Sentimentos" />
          <S.Paragraph>Aulas socioemocionais</S.Paragraph>
        </S.Task>
      </S.BoxTask>

      <S.BoxTaskDown>
        <S.Task>
          <S.Icon src={Update} alt="Computador com codigos" />
          <S.Paragraph>Conteúdo profissional constantemente atualizado</S.Paragraph>
        </S.Task>

        <S.Task>
          <S.Icon src={Class} alt="Computador em um site" />
          <S.Paragraph>Interações frequentes com instrutores e facilitadores</S.Paragraph>
        </S.Task>

        <S.Task>
          <S.Icon src={Classes} alt="Sentimentos" />
          <S.Paragraph>Sessões de revisão e mentorias individuais e coletivas</S.Paragraph>
        </S.Task>

        <S.Task>
          <S.Icon src={Presentation} alt="Sentimentos" />
          <S.Paragraph>Eventos extras com profissionais do mercado</S.Paragraph>
        </S.Task>
      </S.BoxTaskDown>
    </S.Wrap>

    <S.BoxVnWSchool>
      <S.VnWSchool src={VnWSchool} alt="Estudo coletivo" />
      <S.VnWSchoolMobile src={VnWSchoolMobile} alt="Estudo coletivo" />
    </S.BoxVnWSchool>
  </S.Container>
);

export default ClassesSchool;
