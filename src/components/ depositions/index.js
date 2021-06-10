import React, { useState } from "react";
import styled from 'styled-components';
import * as S from './styles';





const Depositions = ({ home }) => {

	return (
        <S.Depositions>
            <S.DepositionsText>
                <S.DepositionsTitle>Depoimentos que nos impulsionam</S.DepositionsTitle>
                <S.DepositionsSubTitle>Veja o que os líderes que já 
                    investiram neste modelo tem a dizer sobre nós e nossas entregas
                </S.DepositionsSubTitle>
            </S.DepositionsText>
            <S.DepositionsSlides>

                <S.DepositionsSlideVania>
                    <S.ImageVania />
                    <S.DescriptionVania></S.DescriptionVania>
                </S.DepositionsSlideVania>

                <S.DepositionsSlidePatricia>
                    <S.ImagePatricia />
                    <S.DescriptionPatricia></S.DescriptionPatricia>
                </S.DepositionsSlidePatricia>

                <S.DepositionsSlideElson>
                    <S.ImageElson />
                    <S.DescriptionElson></S.DescriptionElson>
                </S.DepositionsSlideElson>

            </S.DepositionsSlides>
        </S.Depositions>
    )
}

export default Depositions;