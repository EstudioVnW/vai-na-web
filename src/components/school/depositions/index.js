import React, { Component } from 'react';
import Slider from "react-slick";

import * as S from './styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

class DepositionsSchool extends Component {
    state = {
        list: [
            {
                img: Cleidemara,
                alt: 'Foto de Cleidemara, Product Owner',
                description: 'Eu procurava uma requalificação no mercado de trabalho e o Vai na Web me abriu um mundo recheado de ciência, tecnologia e alma. Para mim, o Vai na Web representa  uma corrente do bem, que fica forte pela colaboração. Formamos times de pessoas que se importam umas com as outras.',
                name: 'Cleidemara de Souza',
                about: 'Product Owner na 1STi, 48 anos',
                location: '(São Gonçalo, RJ)'
            },
            {
                img: AnnaLuiza,
                alt: 'Foto de Anna Luiza, Desenvolvedora Front-end Pleno',
                description: 'O Vai na Web representa o recomeço para mim. Quando terminei a faculdade de administração, não encontrei oportunidade na minha área e acabei me tornando operadora de telemarketing. Durante esse processo, descobri a carreira de Front-end e a possibilidade de fazer algo que realmente amo. Aprendi uma profissão, construí condições de ajudar financeiramente a minha família e de apoiar outras pessoas que estavam começando a carreira também.',
                name: 'Anna Luiza Araújo',
                about: 'Dev. Front-end Pleno na Strytegy, 28 anos',
                location: '(Inhaúma, RJ)'
            },
            {
                img: Mateus,
                alt: 'Foto de Mateus, Desenvolvedor Front-End',
                description: 'Achei o meu espaço, meu mindset foi ‘upado’! Aprendi muito sobre meu espaço na sociedade, meus deveres e direitos. Passei a enxergar a força da favela e a entender que nós somos potência e só precisamos de mais oportunidade.',
                name: 'Mateus Sarmento',
                about: 'Dev. Front-end, Estúdio VnW, 21 anos',
                location: '(Morro dos Prazeres, RJ)'
            },
            {
                img: Camila,
                alt: 'Foto de Camila, Dev Front-End e Líder Técnica',
                description: 'O Vai na Web abriu um novo mundo e me trouxe muitas conquistas: colegas profissionais, e amigos que me dão suporte e impactam a minha vida diariamente. Agora, acredito que a tecnologia não é algo isolado e inanimado, mas uma construção coletiva com diversidade e oportunidade.',
                name: 'Camila Soares',
                about: 'Dev Front-End e Líder Técnica na 1STi, 20 anos',
                location: '(Complexo do Alemão, RJ)'
            },
            {
                img: Maria,
                alt: 'Foto de Maria, Quality Assurance',
                description: 'O Vai na Web mudou a minha vida! Fiz o curso de programação, me formei como Analista de teste e qualidade de software, entrei para a faculdade Processos Gerenciais, na Fundação Getulio Vargas (FVG) e consegui um trabalho estável. Hoje, tenho a consciência de estar construindo uma carreira promissora.',
                name: 'Maria Luciano',
                about: 'Quality Assurance na Strytegy, 34 anos',
                location: '(Complexo do Alemão, RJ)'
            },
            {
                img: Rhuan,
                alt: 'Foto de Rhuan, Dev. Front-End',
                description: 'O Vai na Web é uma lugar de responsabilidade, desafios e conhecimento que me ajudam a encarar o mercado de trabalho. Mez fez entender que eu posso ser alguém importante.',
                name: 'Rhuan de Aquino',
                about: 'Dev. Front-End, Estúdio VnW, 21 anos',
                location: '(Santa Teresa, RJ)'
            },
            {
                img: Jeziel,
                alt: 'Foto de Jeziel, Dev. Front-End',
                description: 'O Vai na Web é mais que uma escola que você aprende a programar. É o lugar que me ensinou a acreditar que posso construir uma história de vida melhor.',
                name: 'Jeziel Firmino',
                about: 'Dev. Front-End, Estúdio VnW, 34 anos',
                location: '(Morro dos Prazes, RJ)'
            },
            {
                img: Luan,
                alt: 'Foto de Luan, Dev. Front-End e Instrutor',
                description: 'Obtive muito aprendizado na área de desenvolvimento graças ao acolhimento e à disposição de todos, que me ajudaram na minha evolução. Agora tenho a certeza de qual profissão seguir.',
                name: 'Luan Pires',
                about: 'Dev. Front-End e Instrutor do Vnw, 26',
                location: '(Inhaúma, RJ)'
            },
        ]
    }

    shuffle = (array) => {
      var currentIndex = array.length,  randomIndex;
    
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    componentDidMount() {
      const newList = this.shuffle(this.state.list);
      this.setState({
        list: newList
      })
    }

    render() {
        const { list } = this.state
        
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            draggable: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        autoplay: false,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1
                    }
                }
            ],

            prevArrow: (
                <S.LeftArrow src={Left} alt="Seta para esquerda"/>
            ),
            nextArrow: (
                <S.RightArrow src={Right} alt="Seta para direita"/>
            ),
        };

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
                        <Slider {...settings}>
                            {list.map((person, index) => (
                                <S.Card key={index}>
                                    <S.CardContainer>
                                        <S.BoxImg>
                                            <S.ImgPerson src={person.img} alt={person.alt} />
                                        </S.BoxImg>
                                        <S.Description>
                                            “{person.description}“
                                        </S.Description>
                                        <S.Name>
                                            {person.name}
                                        </S.Name>
                                        <S.About>
                                            {person.about} <span>{person.location}</span>
                                        </S.About>
                                    </S.CardContainer>
                                </S.Card>
                            ))}
                        </Slider>
                    </S.Slide>

                </S.BoxWrap>
            </S.Container>
        )
    }
}

export default DepositionsSchool;