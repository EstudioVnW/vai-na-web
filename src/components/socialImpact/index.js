import React, { useState } from "react";
import styled from 'styled-components';
import * as S from './styles';


import Infografico from '../../images/images/Group11288.png';



const SocialImpact = ({ home }) => {

	return (
        <S.SocialImpact>
            <S.SocialImpactText>
                <S.SocialImpactTextTitle>SIaaS</S.SocialImpactTextTitle>
                <S.SocialImpactTextSubTitle>Social Impact as a Service</S.SocialImpactTextSubTitle>
                <S.SocialImpactTextDescription>Um modelo de ciclo fechado 
                    que entrega soluções web e mobile para as empresas ao mesmo 
                    tempo <S.Bold>capacita e requalifica profissionais para atender aos 
                    desafios da economia digital.</S.Bold></S.SocialImpactTextDescription>
            </S.SocialImpactText>
            <S.SocialImpactImage>
                <S.SocialImpactImageInfo src={Infografico}/>
            </S.SocialImpactImage>
        </S.SocialImpact> 
    )
}

export default SocialImpact;