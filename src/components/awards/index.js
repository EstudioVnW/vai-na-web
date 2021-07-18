
import React, { useState } from "react";
import * as S from './styles';

import WomenInTech from '../../images/images/img-midia1.png';
import Encontro from '../../images/images/img-midia2.jpg';
import Universa from '../../images/images/img-midia3.jpg';
import Tilt from '../../images/images/img-midia4.png';
import BusinessLead from '../../images/images/img-midia5.png';

const Awards = ({ home }) => {

	return (
		<S.Awards>
			<S.AwardsWrap>

                <S.AwardsText>
                    <S.AwardsTitle>Vai na Web na Mídia</S.AwardsTitle>
                    <S.AwardsSubtitle>Histórias de transformação e Impacto Social</S.AwardsSubtitle>
                </S.AwardsText>

                <S.AwardsContent>
                    <S.AwardsBox>
                        <S.ImgBox>
                            <img src={WomenInTech} />
                        </S.ImgBox>
                        <S.AwardsInfo>
                            <S.ImgTitle>Prêmio Women InTech</S.ImgTitle>
                            <S.ImgText>Entre centenas de concorrentes globais, o Vai na Web ficou entre os 5 finalistas na categoria "Iniciativa de Maior Impacto para Equilíbrio de Gênero no STEM"</S.ImgText>
                        </S.AwardsInfo>
                    </S.AwardsBox>

                    <S.AwardsRow>
                        <S.RowBox>
                            <S.RowImgBox>
                                <img src={Encontro} />
                            </S.RowImgBox>
                            <S.RowInfo>Cris dos Prazeres aposta na educação para criar oportunidade para jovens de comunidades</S.RowInfo>
                        </S.RowBox>
                        <S.RowBox>
                            <S.RowImgBox>
                                <img src={Universa} />
                            </S.RowImgBox>
                            <S.RowInfo>Carioca é finalista de prêmio global ao levar jovens de favela à tecnologia</S.RowInfo>
                        </S.RowBox>
                        <S.RowBox>
                            <S.RowImgBox>
                                <img src={Tilt} />
                            </S.RowImgBox>
                            <S.RowInfo>Coworking da favela prepara jovem preto e periférico para mercado tech</S.RowInfo>
                        </S.RowBox>
                        <S.RowBox>
                            <S.RowImgBox>
                                <img src={BusinessLead} />
                            </S.RowImgBox>
                            <S.RowInfo>Estudantes de Stanford em Ohio, EUA visitam o Vai na Web no Rio de Janeiro, Brasil.</S.RowInfo>
                        </S.RowBox>
                    </S.AwardsRow>
                </S.AwardsContent>

			</S.AwardsWrap>
		</S.Awards>
	)
}
export default Awards;