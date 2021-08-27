import React from 'react';
import { navigate } from 'gatsby';
import * as S from './styles';
import ButtonHome from '../../button/Button';

import PeoplesSquad from '../../../images/images/VaiNaWeb-196.png';
import Back from '../../../images/images/Group11078.svg';
import Canais from '../../../images/images/Group10971.svg';
import MVPs from '../../../images/images/Group10972.svg';
import Vtex from '../../../images/images/Logo-Powered-By-Vtex(home-serviços).png';
import VtexMobile from '../../../images/images/Logo-Powered-By-Vtex-(home-mobile).png';


const redirectToContact = () => {
  navigate('/reserve-seu-squad/');
};

const Squads = () => (
  <S.Squads>
    <S.Wrap>
      <S.SquadsImageButton>
        <S.SquadsImage>
          <S.ImageSquad src={PeoplesSquad} />
        </S.SquadsImage>
        <S.ButtonSquads>
          <ButtonHome
            backgroundHover="#FF611E"
            color="#FDE7A9"
            funcAction={redirectToContact}
            colorHover='#FFF'
          >
            Reserve seu Squad!
          </ButtonHome>
        </S.ButtonSquads>
      </S.SquadsImageButton>

      <S.SquadsText>
        <S.SquadsTextTitle>Squads estendidos e configuráveis</S.SquadsTextTitle>
        <S.SquadsTextSubTitle>
          Entregas contínuas de design e desenvolvimento web e mobile.
          <br />
          A escolha ideal para destravar seu backlog de baixa e média complexidade.
        </S.SquadsTextSubTitle>

        <S.SquadsTextBack>
          <S.ImageSquadBack>
            <S.ImageBack src={Back} />
          </S.ImageSquadBack>

          <S.BoxTextBack>
            <S.BoxTextBackTitle>MVPs ágeis e em escala</S.BoxTextBackTitle>
            <S.BoxTextBackDescription>
              Descoberta, ideação e implementação de MVPs. Valide rapidamente a
              viabilidade e melhorias do seu projeto.
            </S.BoxTextBackDescription>
          </S.BoxTextBack>
        </S.SquadsTextBack>

        <S.SquadsTextBack>
          <S.ImageSquadBack>
            <S.ImageBack src={Canais} />
          </S.ImageSquadBack>

          <S.BoxTextBack>
            <S.BoxTextBackTitle>Canais digitais, responsivos e acessíveis</S.BoxTextBackTitle>
            <S.BoxTextBackDescription>
              Sites, portais, e-commerces dinâmicos
              com foco nos princípios da acessibilidade, inclusão e
              adaptabilidade multitelas.
            </S.BoxTextBackDescription>
          </S.BoxTextBack>
        </S.SquadsTextBack>

        <S.SquadsTextBack>
          <S.ImageSquadBack>
            <S.ImageBack src={MVPs} />
          </S.ImageSquadBack>

          <S.BoxTextBack>
            <S.BoxTitleImage>
              <S.BoxTextBackTitle>E-commerce</S.BoxTextBackTitle>
              <S.BoxImageVtex>
                <S.ImageVtex src={Vtex} />
                <S.ImageVtexMobile src={VtexMobile} />
              </S.BoxImageVtex>
            </S.BoxTitleImage>
            
            <S.BoxTextBackDescription>
              Implantação de lojas online, personalizadas, escaláveis
              utilizando a plataforma Vtex io.
            </S.BoxTextBackDescription>
          </S.BoxTextBack>
        </S.SquadsTextBack>

        <S.SquadsTextDescription>
          Nosso modelo
          {' '}
          <S.Bold>Social Impact as a Service</S.Bold>
          {' '}
          (SIaaS)
          possibilita a entrega de squads estendidos com um custo até 40%
          mais eficiente em comparação aos integradores de tecnologia do mercado.
        </S.SquadsTextDescription>

      </S.SquadsText>
    </S.Wrap>
  </S.Squads>

);
export default Squads;
