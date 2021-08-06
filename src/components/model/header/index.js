import React from 'react';
import * as S from './styles';

import HeaderImg from '../../../images/images/VNW2-17.png';


const ModelHeader = () => (
    <S.HeaderContainer>
        <S.Wrap>
            <S.Header>
                <S.HeaderTitle>
                    <S.TitleBar>//</S.TitleBar>
                    Modelo
                </S.HeaderTitle>

                <S.HeaderText>
                    Ganha-Ganha-Ganha
                </S.HeaderText>
            </S.Header>
            <S.HeaderImage src={HeaderImg} />
        </S.Wrap>
    </S.HeaderContainer>
);

export default ModelHeader;