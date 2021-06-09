
import React, { useState } from "react";
import * as S from './styles';
import ButtonHome from '../button/Button';

import PeoplesSquad from '../../images/images/VaiNaWeb-196.png';
import Back from '../../images/images/Group11078.svg';
import Canais from '../../images/images/Group10972.svg';
import MVPs from '../../images/images/Group10972.svg';

const Squads = ({ home }) => {

	return (
            <S.Squads>
				<S.SquadsImageButton>
					<S.SquadsImage>
						<S.ImageSquad src={PeoplesSquad} />
					</S.SquadsImage>
					<S.ButtonSquads>
						<ButtonHome
							backgroundHover='#FF611E'
						>
							Reserve seu Squad!
						</ButtonHome>
					</S.ButtonSquads>
				</S.SquadsImageButton>
				
				<S.SquadsText>
					<S.SquadsTextTitle>Squads estendidos e configuráveis</S.SquadsTextTitle>
					<S.SquadsTextSubTitle>
						A escolha ideal para destravar seu backlog de baixa 
						e média complexidade.
					</S.SquadsTextSubTitle>
					<S.SquadsTextDescription>
						Nosso modelo <S.Bold>Social Impact as a Service</S.Bold> (SIaaS) 
						possibilita a entrega de Squads estendidos com custo até 40% mais 
						eficientes comparado aos integradores de tecnologia do mercado.
					</S.SquadsTextDescription>

					<S.SquadsTextBack>
						<S.ImageSquadBack>
							<S.ImageBack src={Back} />
						</S.ImageSquadBack>

						<S.BoxTextBack>
							<S.BoxTextBackTitle>Backlog de produtos digitais</S.BoxTextBackTitle>
							<S.BoxTextBackDescription>Entregas contínuas de design e desenvolvimento web e mobile.
							</S.BoxTextBackDescription>
						</S.BoxTextBack>
					</S.SquadsTextBack>
					

					<S.SquadsTextCanais>
						<S.ImageSquadCanais>
							<S.ImageCanais src={Canais} />
						</S.ImageSquadCanais>

						<S.BoxTextCanais>
							<S.BoxTextCanaisTitle>Canais digitais, responsivos e acessíveis</S.BoxTextCanaisTitle>
							<S.BoxTextCanaisDescription>Sites, portais, e-commerces dinâmicos
                                 com foco nos princípios da acessibilidade, inclusão e 
                                 adaptabilidade multitelas.
							</S.BoxTextCanaisDescription>
						</S.BoxTextCanais>
					</S.SquadsTextCanais>

					<S.SquadsTextMVPs>
						<S.ImageSquadMVPs>
							<S.ImageMVPs src={MVPs} />
						</S.ImageSquadMVPs>
						
						<S.BoxTextMVPs>
							<S.BoxTextMVPsTitle>MVPs ágeis e em escala</S.BoxTextMVPsTitle>
							<S.BoxTextMVPsDescription>Descoberta, ideação e 
                                implementação de MVPs. Valide rapidamente
								 a viabilidade e melhorias do seu projeto.
							</S.BoxTextMVPsDescription>
						</S.BoxTextMVPs>
					</S.SquadsTextMVPs>

				</S.SquadsText>
			</S.Squads>


    )
}
export default Squads;