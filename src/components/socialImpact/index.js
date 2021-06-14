import React, { useState } from "react";
import styled from 'styled-components';
import * as S from './styles';


import Infografico from '../../images/images/SIaaSDesktop.png';



const SocialImpact = ({ home }) => {

	return (
        <S.SocialImpact>
            <S.SocialImpactText>
                <S.SocialImpactTextTitle>Impacto Social como Serviço</S.SocialImpactTextTitle>      
                <S.SocialImpactTextDescription>Um modelo de ciclo fechado que entrega soluções
                     web e mobile para as empresas ao mesmo tempo que capacita e requalifica 
                     profissionais para atender aos desafios da economia digital.
                </S.SocialImpactTextDescription>
            </S.SocialImpactText>
            <S.SocialImpactImage>
                <S.SocialImpactImageInfo src={Infografico}/>
            </S.SocialImpactImage>
        </S.SocialImpact> 
    )
}

export default SocialImpact;