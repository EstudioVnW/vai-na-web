import React from "react";
import * as S from './styles';

import downArrow from '../../../images/images/downArrow.svg';
import estudioLogo from '../../../images/images/estudioLogo.svg';
import headerImg from '../../../images/images/headerImg.png';

const ServiceHeader = () => (
    <S.HeaderContainer>
        <S.HeaderWrap>
            <S.HImgBox>
                <S.HImg src={headerImg} alt="Três mulheres sorrindo para o computador"/>
                <S.HTextBox>
                    <S.HText><i>"Por meio de trabalho duro e educação, podemos promover uma economia forte e oportunidades para todos"</i></S.HText>
                    <S.HText><strong>Julia Gillard</strong></S.HText>
                </S.HTextBox>
                <S.HImgLogo src={estudioLogo} alt="Logo Estúdio Vai na Web"/>
            </S.HImgBox>
            <S.HCard>
                <S.HCardDetail>
                    <S.HCardCircle></S.HCardCircle>
                    <S.HCardCircle></S.HCardCircle>
                    <S.HCardCircle></S.HCardCircle>
                </S.HCardDetail>
                <S.HCardText>Acelere suas entregas digitais com os squads do Vai na Web</S.HCardText>
            </S.HCard>
            <S.HDownArrow>
                <img src={downArrow} alt="Seta apontando para baixo" />
            </S.HDownArrow>
        </S.HeaderWrap>
    </S.HeaderContainer>
)

export default ServiceHeader;