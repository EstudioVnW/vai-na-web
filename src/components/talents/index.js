import React, { useState } from "react";
import styled from 'styled-components';
import * as S from './styles';
import ButtonHome from '../button/Button';


import AlunosTalents from '../../images/images/VNW2-15.png';
import AlunosTalentsResponsive from '../../images/images/VNW2-15-Responsive.png';


const Talents = ({ home }) => {

    return (
        <S.Talents>
            <S.TalentsBackground />
            <S.TalentsWrap>
                <S.TalentsText>
                    <S.TalentsTextTitle>Uma plataforma de formação de talentos digitais</S.TalentsTextTitle>
                    <S.TalentsTextDescription>Desde 2017, nossa Escola de Tecnologia forma
                        talentos de todo Brasil, oriundos das classes C, D e E, em programação
                        digital avançada e habilidades socioemocionais.
                    </S.TalentsTextDescription>
                    <S.TalentsTextDescription>Com o objetivo de diminuir de
                        forma inteligente a desigualdade social, qualificamos pessoas,
                        geramos empregos dignos e reduzimos a lacuna de gênero no país.
                    </S.TalentsTextDescription>
                    <S.ButtonTalents>
                        <ButtonHome
                            width='10rem'
                            background='#FF611E'
                            border='#FFAC2D'
                        >
                            Faça parte!
                        </ButtonHome>
                    </S.ButtonTalents>
                </S.TalentsText>
                
                <S.ImgBox>
                    <S.TalentsImageInfo src={AlunosTalents} />
                    <S.TalentsImageInfoResponsive src={AlunosTalentsResponsive} />
                </S.ImgBox>
            </S.TalentsWrap>
        </S.Talents>
    )
}

export default Talents;