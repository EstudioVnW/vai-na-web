import React from 'react';
import * as S from './styles';

import ImageSaudeID from '../../../images/images/saudeid.png';
import ImageFleury from '../../../images/images/fleury.png';
import ImageSirio from '../../../images/images/hospitalSirio.png';
import ImageVotorantim from '../../../images/images/Instituto-Votorantim.png';
import ImagePetronect from '../../../images/images/Petronect.png';
import ImageProadiSus from '../../../images/images/proadiSus.png';

import ImageQuickCash from '../../../images/images/QuickCash.png';
import ImageIts from '../../../images/images/192205155_822241138394982_1188246794454052303_n.png';
import ImageSedimenta from '../../../images/images/SedimentaJPM.svg';
import ImageM4A from '../../../images/images/m4a.png';

const lineCases = () => (
  <S.LineCases>
    <S.TextCases>Trusted by</S.TextCases>

    <S.Gradient />
    <S.BoxImagesCases>
      <S.BoxImage style={{ margin: '0' }}>
        <S.ImagesCases
          src={ImageSaudeID}
          alt="Logo do Saúde iD"
          style={{ width: '65%' }}
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageSirio}
          alt="Logo do Hospital Sírio Libanês"
        />
      </S.BoxImage>
      <S.BoxImage style={{ margin: '0' }}>
        <S.ImagesCases
          src={ImageFleury}
          alt="Logo da Fleury"
          style={{ width: '95%' }}
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageVotorantim}
          alt="Logo do Instituto Votorantim"
        />
      </S.BoxImage>
      <S.BoxImage style={{ marginLeft: '0' }}>
        <S.ImagesCases
          src={ImagePetronect}
          alt="Logo da Petronect"
          style={{ width: '85%' }}
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageProadiSus}
          alt="Logo da ProadiSUS"
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageQuickCash}
          alt="Logo da QuickCash"
          style={{ width: '95%' }}
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageIts}
          alt="Logo do Instituto de Tecnologia E Sociedade do Rio"
          style={{ width: '70%' }}
        />
      </S.BoxImage>
      <S.BoxImage>
        <S.ImagesCases
          src={ImageSedimenta}
          alt="Logo da Sedimenta JPM"
        />
      </S.BoxImage>
      <S.BoxImage style={{ margin: '0' }}>
        <S.ImagesCases
          src={ImageM4A}
          alt="Logo da Match 4 Action"
          style={{ width: '50%' }}
        />
      </S.BoxImage>
    </S.BoxImagesCases>

  </S.LineCases>
);

export default lineCases;
