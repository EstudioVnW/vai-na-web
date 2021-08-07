import React from 'react';
import * as S from './styles';


import ImageEconomy from '../../../images/images/VNW2-53.png';
import Image400 from '../../../images/images/Icone-Modelos-01.png';
import Image48 from '../../../images/images/Icone-Modelos-02.png';
import Image55 from '../../../images/images/Icone-Modelos-03.png';
import Image30 from '../../../images/images/Icone-Modelos-04.png';

const DigitalEconomy = () => (
    <S.DigitalEconomy>
        <S.BoxDigitalEconomy>
            <S.TextDigitalEconomy>
                <S.TitleBoxDigitalEconomy>Preparamos a nova geração de talentos para a Economia Digital</S.TitleBoxDigitalEconomy>
                <S.DescriptionBoxDigitalEconomy>
                    O Vai Na Web é um programa de educação digital avançada, 
                    organizado como um negócio de social, que desde 2017 atua na 
                    capacitação gratuita de jovens e adultos em territórios de conflito armado 
                    e exclusão de direitos.
                </S.DescriptionBoxDigitalEconomy>
                    
                <S.DescriptionBoxDigitalEconomy>
                    O nosso modelo de negócio garante que 100% do lucro 
                    seja reinvestido na formação gratuita de novos talentos, fortalecendo um 
                    círculo virtuoso de transformação social e digital.
                </S.DescriptionBoxDigitalEconomy>
            </S.TextDigitalEconomy>

            <S.BoxImageDigitalEconomy>
                <S.ImageDigitalEconomy src={ImageEconomy} />
            </S.BoxImageDigitalEconomy>
        </S.BoxDigitalEconomy>
        <S.BoxDigitalEconomyInformations>
            <S.BoxOrange>
                <S.BoxImages>
                    <S.BoxImageInformation>
                        <S.ImageInformation src={Image400} />
                    </S.BoxImageInformation>
                    <S.BoxImageInformation>
                        <S.ImageInformation src={Image48} />
                    </S.BoxImageInformation>
                    <S.BoxImageInformation>
                        <S.ImageInformation src={Image55} />
                    </S.BoxImageInformation>
                    <S.BoxImageInformation>
                        <S.ImageInformation src={Image30} />
                    </S.BoxImageInformation>
                </S.BoxImages>
            </S.BoxOrange>
        </S.BoxDigitalEconomyInformations>
    </S.DigitalEconomy>

);

export default DigitalEconomy;