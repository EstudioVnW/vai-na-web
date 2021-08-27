import React from 'react';

import { navigate } from 'gatsby';
import ButtonHome from '../../button/Button';
import * as S from './styles';

import ImageSirio from '../../../images/images/hospitalSirio.png';
import ImageVotorantim from '../../../images/images/Instituto-Votorantim.png';
import ImagePetronect from '../../../images/images/Petronect.png';
import ImageProadiSus from '../../../images/images/proadiSus.png';

import ImageQuickCash from '../../../images/images/QuickCash.png';
import ImageIts from '../../../images/images/192205155_822241138394982_1188246794454052303_n.png';
import ImageSedimenta from '../../../images/images/SedimentaJPM.svg';
import ImageM4A from '../../../images/images/m4a.png';

const redirectToContact = () => {
  navigate('/cases/');
};

const Cases = () => (
  <S.Cases>
    <S.TitleCases>Quem já acelerou suas entregas digitais com os squads do VnW</S.TitleCases>
    <S.BoxCasesImages>
      <S.CasesImages>
        <S.BoxImage>
          <S.ImageCases src={ImageSirio} alt="Logo do Hospital Sírio Libanês" />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImageVotorantim} alt="Logo do Instituto Votorantim" />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImagePetronect} alt="Logo da Petronect" style={{ padding: '2rem' }} />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImageProadiSus} alt="Logo da ProadiSUS" />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImageQuickCash} alt="Logo da QuickCash" style={{ padding: '2rem' }} />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImageIts} alt="Logo do Instituto de Tecnologia E Sociedade do Rio" style={{ padding: '2rem' }} />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCases src={ImageSedimenta} alt="Logo da Sedimenta JPM" />
        </S.BoxImage>
        <S.BoxImage>
          <S.ImageCasesM4A src={ImageM4A} alt="Logo da Match 4 Action" style={{ padding: '2rem' }} />
        </S.BoxImage>
      </S.CasesImages>
    </S.BoxCasesImages>

    <S.ButtonCases>
      <ButtonHome
        width="18.5rem"
        height="3.1rem"
        colorHover="#FDE7A9"
        backgroundHover='#0F2B92'
        border="#FFAC2D"
        color="#FFFFFF"
        background="#FF611E"
        funcAction={redirectToContact}
      >
        Veja nossos Cases de Sucesso!
      </ButtonHome>
    </S.ButtonCases>
  </S.Cases>

);

export default Cases;
