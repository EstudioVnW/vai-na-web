import React, { useState } from 'react';
import * as S from './styles';

//Components
import Button from '../../button/Button';
import Left from '../../../images/images/Path 7687.svg';
import Right from '../../../images/images/Path 7686.svg';
import Sticker1 from '../../../images/images/Group7291.svg';
import Sticker2 from '../../../images/images/Group7286.svg';
import Sticker3 from '../../../images/images/Group7288.svg';
import Sticker4 from '../../../images/images/noun_Data_2723012.svg';
import Sticker5 from '../../../images/images/noun_requirements_2927751.svg';

const CardsSchool = () => {
    const [pos, setPos] = useState({ posX: 0 })

    const _rightArrow = () => {
        console.log('direita');
        setPos({ posX: -33})
    }

    const _leftArrow = () => {
        console.log('esquerda');
        setPos({ posX: 0 })
    }

    return (
        <S.Container>
            <S.Wrap>
                <S.BoxText>
                    <S.Title>Conheça nossos programas</S.Title>
                    <S.SubTitle>Ensino profissional gratuito, alinhado às necessidades do mercado</S.SubTitle>
                </S.BoxText>

                <S.Slide>
                    <S.LeftArrow
                        src={Left}
                        alt="seta para esquerda"
                        onClick={_leftArrow}
                    />

                    <S.RightArrow
                        src={Right}
                        alt="seta para direita"
                        onClick={_rightArrow}
                    />

                    <S.BoxCards>
                        <S.Cards
                            style={{
                                transform: `translate(${pos.posX}vw, 0)`
                            }}>

                            <S.Card background="#fdecbb">
                                <S.CardContainer>
                                    <S.CardDetail borderFill="#ffac2d">
                                        <S.CardCircle background="#ffac2d"></S.CardCircle>
                                        <S.CardCircle background="#ffac2d"></S.CardCircle>
                                        <S.CardCircle background="#ffac2d"></S.CardCircle>

                                        <S.StickerBox>
                                            <S.Sticker src={Sticker1} alt='' />
                                        </S.StickerBox>
                                    </S.CardDetail>

                                    <S.CarreiraTxt>Carreira</S.CarreiraTxt>
                                    <S.DevTxt>Desenvolvedor Front-end</S.DevTxt>
                                    <S.HDesc>Desenvolve sites multi-tela e multidispositivo.</S.HDesc>
                                    <S.PDesc>
                                        É o profissional responsável por dar vida e movimento às interfaces digitais.
                                        Atua desenvolvendo os componentes de um site, portal ou e-commerce que vão interagir diretamente com os usuários.
                                    </S.PDesc>
                                </S.CardContainer>
                            </S.Card>

                            <S.Card background={"#ffc5ac"}>
                                <S.CardContainer>
                                    <S.CardDetail borderFill="#ff611e">
                                        <S.CardCircle background="#ff611e"></S.CardCircle>
                                        <S.CardCircle background="#ff611e"></S.CardCircle>
                                        <S.CardCircle background="#ff611e"></S.CardCircle>

                                        <S.StickerBox>
                                            <S.Sticker src={Sticker2} alt='' />
                                        </S.StickerBox>
                                    </S.CardDetail>

                                    <S.CarreiraTxt>Carreira</S.CarreiraTxt>
                                    <S.DevTxt>Desenvolvedor Mobile</S.DevTxt>
                                    <S.HDesc>Desenvolve aplicativos nativos para Android e iOS.</S.HDesc>
                                    <S.PDesc>
                                        É o profissional responsável pelo planejamento, elaboração, testes e implementação de softwares para dispositivos
                                        móveis (smartphones, smartwatches, tablets, câmeras digitais…).
                                    </S.PDesc>
                                </S.CardContainer>
                            </S.Card>

                            <S.Card background={"#fed7b5"}>
                                <S.CardContainer>
                                    <S.CardDetail borderFill="#f5b279">
                                        <S.CardCircle background="#f5b279"></S.CardCircle>
                                        <S.CardCircle background="#f5b279"></S.CardCircle>
                                        <S.CardCircle background="#f5b279"></S.CardCircle>

                                        <S.StickerBox>
                                            <S.Sticker src={Sticker3} alt='' />
                                        </S.StickerBox>
                                    </S.CardDetail>

                                    <S.CarreiraTxt>Carreira</S.CarreiraTxt>
                                    <S.DevTxt>Desenvolvedor Back-end</S.DevTxt>
                                    <S.HDesc>Desenvolve tudo aquilo que está por trás da interface.</S.HDesc>
                                    <S.PDesc>
                                        É o profissional responsável por construir e organizar
                                        as engrenagens, banco de dados e servidores que possibilitam os sites e sistemas funcionarem.
                                    </S.PDesc>
                                </S.CardContainer>
                            </S.Card>

                            <S.Card justifyContent="space-between" isHover='false'>
                                <S.LittleCard>
                                    <S.CardContainer>
                                        <S.CardDetail borderFill="#00145D">
                                            <S.CardCircle background="#00145D"></S.CardCircle>
                                            <S.CardCircle background="#00145D"></S.CardCircle>
                                            <S.CardCircle background="#00145D"></S.CardCircle>

                                            <S.StickerBox>
                                                <S.Sticker src={Sticker4} alt='' />
                                            </S.StickerBox>
                                        </S.CardDetail>

                                        <S.CarreiraTxt>Carreira</S.CarreiraTxt>
                                        <S.DevTxt width='250px'>Cientista de Dados (Em Breve)</S.DevTxt>
                                    </S.CardContainer>
                                </S.LittleCard>

                                <S.LittleCard>
                                    <S.CardContainer>
                                        <S.CardDetail borderFill="#00145D">
                                            <S.CardCircle background="#00145D"></S.CardCircle>
                                            <S.CardCircle background="#00145D"></S.CardCircle>
                                            <S.CardCircle background="#00145D"></S.CardCircle>

                                            <S.StickerBox>
                                                <S.Sticker src={Sticker5} alt='' />
                                            </S.StickerBox>
                                        </S.CardDetail>

                                        <S.CarreiraTxt>Carreira</S.CarreiraTxt>
                                        <S.DevTxt width='250px'>Product Owner (Em Breve)</S.DevTxt>
                                    </S.CardContainer>
                                </S.LittleCard>
                            </S.Card>
                        </S.Cards>
                    </S.BoxCards>
                </S.Slide>

                <S.BoxInfo>
                    <S.Paragraph>
                        Através do ensino gratuito de programação e habilidades socioemocionais,
                        preparamos talentos de todo o Brasil, oriundos das classes C, D e E, para atenderem aos desafios da economia digital.
                    </S.Paragraph>

                    <S.BoxButton>
                        <Button width='10.5rem'>
                            Inscreva-se!
                        </Button>
                    </S.BoxButton>
                </S.BoxInfo>
            </S.Wrap>
        </S.Container>
    )
};

export default CardsSchool;