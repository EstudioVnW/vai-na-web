import React, { useState } from "react";
import styled from 'styled-components';
import * as S from './styles';
import ButtonHome from '../button/Button';

import PeoplesImageFirst from '../../images/images/Img_pessoas_esquerda.png';
import PeoplesImageSecond from '../../images/images/Img_pessoas_direita.png';
import PeoplesImageFirstResponsive from '../../images/images/Fotos_bolinhas_1.png';
import PeoplesImageSecondResponsive from '../../images/images/Fotos_bolinhas_2.png';
import Line from '../../images/images/Linha.svg';

const Conection = ({ home }) => {

	return (
        <S.Conection>
            <S.ImagePeoples src={PeoplesImageFirst} />
            <S.ImagePeoplesResponsive src={PeoplesImageFirstResponsive} />
            <S.ConectionCenter>
                <S.ConectionTitle>Queremos conectar os nossos talentos digitais às mais 
                    responsáveis e inovadoras organizações do país.</S.ConectionTitle>
                <S.ConectionLineImage src={Line} />
                <S.ConectionButton>
                    <ButtonHome
                    width='20rem'
                    background='#0F2B92'
                    border='#0F2B92'
                    >
                        Faça Parte do Movimento!
                    </ButtonHome>
                </S.ConectionButton>
            </S.ConectionCenter>
            <S.ImagePeoples src={PeoplesImageSecond} />
            <S.ImagePeoplesResponsive src={PeoplesImageSecondResponsive} />
        </S.Conection>
    )
}

export default Conection;