import React from 'react';
import * as S from './styles';

import Infografico from '../../../images/images/SIaaSDesktop.png';
import InfograficoResponsive from '../../../images/images/Group11422.png';

const SocialImpact = () => (
  <S.SocialImpact>
    <S.SocialWrap>
      <S.SocialImpactText>
        <S.SocialImpactTextTitle>Impacto Social como Serviço</S.SocialImpactTextTitle>
        <S.SocialImpactTextDescription>
          Um modelo de ciclo fechado que entrega soluções
          web e mobile para as empresas ao mesmo tempo que capacita e requalifica
          profissionais para atender aos desafios da economia digital.
        </S.SocialImpactTextDescription>
      </S.SocialImpactText>
      <S.SocialImpactImage>
        <S.SocialImpactImageInfo src={Infografico} />
      </S.SocialImpactImage>
      <S.SocialImpactImageResponsive>
        <S.SocialImpactImageInfoResponsive src={InfograficoResponsive} />
      </S.SocialImpactImageResponsive>
    </S.SocialWrap>
  </S.SocialImpact>
);

export default SocialImpact;