import React, { useState } from "react";
// import { Link } from "gatsby";
import * as S from './styles';

import downArrow from '../../../images/images/downArrow.svg';
import estudioLogo from '../../../images/images/estudioLogo.svg';
import headerImg from '../../../images/images/headerImg.png';
import headerImgMobile from '../../../images/images/headerImgMobile.png';

const ServiceHeader = (props) => {
	return (
        <S.Header>
            <S.HeaderContainer>
                <S.HImgBox>
                    <S.HImg src={headerImg} alt="Três mulheres sorrindo para o computador"/>
                    <S.HImgMobile src={headerImgMobile} alt="Três mulheres sorrindo para o computador"/>
                    <S.HTextBox>
                        <S.HText><i>"Por meio de trabalho duro e educação, podemos promover uma economia forte e oportunidades para todos"</i></S.HText>
                        <S.HText><strong>Julia Gillard</strong></S.HText>
                    </S.HTextBox>
                    <S.HImgLogo src={estudioLogo} alt="Logo Estúdio Vai na Web"/>
                </S.HImgBox>
                <S.HDownArrow>
                    <img src={downArrow} alt="Seta apontando para baixo"/>
                </S.HDownArrow>
                <S.HCard>
                    <S.HCardDetail>
                        <S.HCardCircle></S.HCardCircle>
                        <S.HCardCircle></S.HCardCircle>
                        <S.HCardCircle></S.HCardCircle>
                    </S.HCardDetail>
                    <S.HCardText>Acelere suas entregas digitais com os squads do Vai na Web</S.HCardText>
                </S.HCard>
            </S.HeaderContainer>
        </S.Header>
	)
}

export default ServiceHeader;