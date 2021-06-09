import React, { useState } from "react";

import ButtonHome from '../button/Button';
import * as S from './styles';

import ImageSirio from '../../images/images/hospitalSirio.png';
import ImageVotorantim from '../../images/images/Instituto-Votorantim.png';
import ImagePetronect from '../../images/images/Petronect.png';
import ImageProadiSus from '../../images/images/proadiSus.png';

import ImageQuickCash from '../../images/images/QuickCash.png';
import ImageIts from '../../images/images/192205155_822241138394982_1188246794454052303_n.png';
import ImageSedimenta from '../../images/images/SedimentaJPM.svg';
import ImageM4A from '../../images/images/m4a.png';




const Cases = ({ home }) => {

	return (
        <S.Cases>
            <S.CasesImages>
                <S.BoxImage>
                    <S.ImageCases src={ImageSirio} alt='Hospital Sírio Libanês'  />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageVotorantim} alt='Instituto Votorantim' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImagePetronect} alt='Petronect' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageProadiSus} alt='ProadiSUS' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageQuickCash} alt='QuickCash' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageIts} alt='Instituto de Tecnologia E Sociedade do Rio' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageSedimenta} alt='Sedimenta JPM' />
                </S.BoxImage>
                <S.BoxImage>
                    <S.ImageCases src={ImageM4A} alt='Match 4 Action' />
                </S.BoxImage>
            </S.CasesImages>	
                <S.ButtonCases>
                    <ButtonHome 
                        width='20rem'
                        colorHover='#272727'
                        border='#FFAC2D' 
                        color='#FFFFFF'
                        background='#FF611E'	
                    >
                        Veja nossos Cases de Sucesso!
                    </ButtonHome>
                </S.ButtonCases>
        </S.Cases> 

    )
}

export default Cases;