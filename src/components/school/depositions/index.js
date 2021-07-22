import React, { useState } from 'react';
import * as S from './styles';

//Components

import Cleidemara from '../../../images/images/peopleDepositions/Cleidemara.png'
import AnnaLuiza from '../../../images/images/peopleDepositions/Anna.png'
import Mateus from '../../../images/images/peopleDepositions/Mateus.png'
import Camila from '../../../images/images/peopleDepositions/Camila.png'
import Maria from '../../../images/images/peopleDepositions/Maria.png'
import Rhuan from '../../../images/images/peopleDepositions/Rhuan.png'
import Jeziel from '../../../images/images/peopleDepositions/Jeziel.png'
import Luan from '../../../images/images/peopleDepositions/Luan.png'

import Left from '../../../images/images/Path 7687.svg';
import Right from '../../../images/images/Path 7686.svg';

const DepositionsSchool = () => {

    const [pos, setPos] = useState({ posX: 0 })

    const _rightArrow = () => {
        if (pos.posX >= -106.4)
            setPos({ posX: pos.posX - 26.5 })
    }
    const _leftArrow = () => {
        if (pos.posX < 0)
            setPos({ posX: pos.posX + 26.5 })
    }

    return (

        <S.Container>
            <S.BoxWrap>

                <S.BoxText>
                    <S.Title>
                        Uma Nova Geração de Talentos
                    </S.Title>
                    <S.Subtitle>
                        O que nossos jovens têm a dizer sobre sua jornada no Vai na Web
                    </S.Subtitle>
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

                            {/*Cleidemara*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Cleidemara} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        “Eu procurava uma requalificação no mercado de trabalho e o Vai na Web me
                                        abriu um mundo recheado de ciência, tecnologia e alma. Para mim, o Vai na Web
                                        representa uma corrente do bem, que fica forte pela colaboração. Formamos times
                                        de pessoas que se importam umas com as outras.“
                                    </S.Descrition>

                                    <S.Name>
                                        Cleidemara de Souza
                                    </S.Name>

                                    <S.About>
                                        Product Owner na 1STi, 48 anos (São Gonçalo, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Anna Luiza*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={AnnaLuiza} alt="Foto de Anna Luiza, Desenvolvedora Front-end Pleno" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        “O Vai na Web representa o recomeço para mim. Quando terminei a faculdade de administração,
                                        não encontrei oportunidade na minha área e acabei me tornando operadora de telemarketing.
                                        Durante esse processo, descobri a carreira de Front-end e a possibilidade de fazer algo que realmente amo.
                                        Aprendi uma profissão, construí condições de ajudar financeiramente a minha família e de apoiar outras pessoas
                                        que estavam começando a carreira também.”
                                    </S.Descrition>

                                    <S.Name>
                                        Anna Luiza Araújo
                                    </S.Name>

                                    <S.About>
                                        Dev. Front-end Pleno na Strytegy, 28 anos (Inhaúma, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Mateus*/}
                            <S.Card>
                                <S.CardContainer>
                                    
                                    <S.BoxImg>
                                    <S.ImgPerson src={Mateus} alt="Foto de Mateus, Desenvolvedor Front-End" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        “Achei o meu espaço, meu mindset foi ‘upado’! Aprendi muito sobre meu espaço na sociedade, meus deveres e direitos.
                                        Passei a enxergar a força da favela e a entender que nós somos potência e só precisamos de mais oportunidade.”
                                    </S.Descrition>

                                    <S.Name>
                                        Mateus Sarmento
                                    </S.Name>

                                    <S.About>
                                        Dev. Front-end, Estúdio VnW, 21 anos (Morro dos Prazeres, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Camila*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Camila} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        "O Vai na Web abriu um novo mundo e me trouxe muitas conquistas: colegas profissionais,
                                        e amigos que me dão suporte e impactam a minha vida diariamente. Agora,
                                        acredito que a tecnologia não é algo isolado e inanimado, mas uma construção coletiva
                                        com diversidade e oportunidade."
                                    </S.Descrition>

                                    <S.Name>
                                        Camila Soares
                                    </S.Name>

                                    <S.About>
                                        Dev Front-End e Líder Técnica na 1STi, 20 anos (Complexo do Alemão, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Maria*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Maria} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        "O Vai na Web mudou a minha vida! Fiz o curso de programação, me formei
                                        como Analista de teste e qualidade de software, entrei para a faculdade
                                        Processos Gerenciais, na Fundação Getulio Vargas (FVG) e consegui
                                        um trabalho estável. Hoje, tenho a consciência de estar
                                        construindo uma carreira promissora."
                                    </S.Descrition>

                                    <S.Name>
                                        Maria Luciano
                                    </S.Name>

                                    <S.About>
                                        Quality Assurance na Strytegy, 34 anos (Complexo do Alemão, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>
                            {/*Rhuan*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Rhuan} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        “O Vai na Web é uma lugar de responsabilidade, desafios e conhecimento que me
                                        ajudam a encarar o mercado de trabalho. Mez fez entender que eu posso ser
                                        alguém importante.“
                                    </S.Descrition>

                                    <S.Name>
                                        Rhuan de Aquino
                                    </S.Name>

                                    <S.About>
                                        Dev. Front-End, Estúdio VnW, 21 anos (Santa Teresa, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Jeziel*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Jeziel} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>

                                    <S.Descrition>
                                        “O Vai na Web é mais que uma escola que você aprende a programar.
                                        É o lugar que me ensinou a acreditar que posso construir uma história de vida melhor.“
                                    </S.Descrition>

                                    <S.Name>
                                        Jeziel Firmino
                                    </S.Name>

                                    <S.About>
                                        Dev. Front-End, Estúdio VnW, 34 anos (Morro dos Prazes, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>

                            {/*Luan*/}
                            <S.Card>
                                <S.CardContainer>

                                    <S.BoxImg>
                                    <S.ImgPerson src={Luan} alt="Foto de Cleidemara, Product Owner" />
                                    </S.BoxImg>
                                    
                                    <S.Descrition>
                                        “Obtive muito aprendizado na área de desenvolvimento
                                        graças ao acolhimento e à disposição de todos, que me ajudaram na
                                        minha evolução. Agora tenho a certeza de qual profissão seguir.“
                                    </S.Descrition>

                                    <S.Name>
                                        Luan Pires
                                    </S.Name>

                                    <S.About>
                                        Dev. Front-End e Instrutor do Vnw, 26 (Inhaúma, RJ)
                                    </S.About>

                                </S.CardContainer>
                            </S.Card>
                        </S.Cards>
                    </S.BoxCards>
                </S.Slide>

            </S.BoxWrap>
        </S.Container>
    )
};
export default DepositionsSchool;