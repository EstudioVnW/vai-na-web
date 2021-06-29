import React, { useState, useEffect } from "react";
import * as S from './styles';
import Carousel from 'nuka-carousel';

import Vania from '../../images/images/Vania.png';
import VaniaCompany from '../../images/images/hospitalSirio.png';


import Patricia from '../../images/images/Patricia2.png';
import PatriciaCompany from '../../images/images/QuickCash.png';


import Elson from '../../images/images/Elson.png';
import ElsonCompany from '../../images/images/Petronect.png';


const Depositions = ({ home }) => {


	return (
        <S.Depositions>
            <S.DepositionsText>
                <S.DepositionsTitle>Depoimentos que nos impulsionam</S.DepositionsTitle>
                <S.DepositionsSubTitle>Veja o que os líderes que já investiram neste modelo
                     têm a dizer sobre nós e nossas entregas
                </S.DepositionsSubTitle>
            </S.DepositionsText>

           <S.DepositionsSlides>
                <Carousel
                animation='zoom'
                transitionMode='scroll'
                cellAlign='center'
                zoomScale={1}
                cellSpacing={-400}
                wrapAround={true}
                // speed={isSmall ? 300 : 500}
                scrollMode='remainder'
                slidesToScroll='auto'
                // slideIndex={slideIndex}
                // afterSlide={(index) => this.setState({ slideIndex: index })}
                // renderCenterLeftControls={({ previousSlide }) =>
                //   !isSmall &&
                //   showPrevButton && (
                //     <ArrowButton onClick={previousSlide}>
                //       <ArrowButtonIcon src={arrowWhite} />
                //     </ArrowButton>
                //   )
                // }
                // renderCenterRightControls={({ nextSlide }) =>
                //   !isSmall &&
                //   showNextButton && (
                //     <ArrowButton onClick={nextSlide}>
                //       <ArrowButtonIcon src={arrowWhite} right />
                //     </ArrowButton>
                //   )
                // }
                // defaultControlsConfig={{
                //   pagingDotsStyle: {
                //     fill: 'white',
                //   },
                // }}
                // getControlsContainerStyles={(key) => {
                //   if (key === 'BottomCenter') {
                //     return {
                //       display: slideIndex === 0 ? 'none' : '',
                //       background: 'blue',
                //       top: '110%',
                //     }
                //   }
                //   return null
                // }}
                >
                <S.DepositionsSlideCard>
                    <S.Image src={Vania} />
                    <S.Description>“Estes meninos e meninas são preparados 
                        para o mercado de trabalho e desenvolvem entregas brilhantes. 
                        <S.Bold> O Sírio-Libanês tem muito orgulho dessa parceria que mostrou 
                        que é possível investir em inovação e formação simultaneamente.”</S.Bold>
                    </S.Description>
                    
                    <S.Identification>
                        <S.IdentificationText>
                            <S.Name>Vânia Bezerra</S.Name>
                            <S.Office>Diretora de Compromisso Social</S.Office>
                        </S.IdentificationText>
                        <S.IdentificationCompany>
                            <S.ImageCompany src={VaniaCompany} />
                        </S.IdentificationCompany>
                    </S.Identification>
                </S.DepositionsSlideCard>

                <S.DepositionsSlideCard>
                    <S.ImagePatricia src={Patricia} />
                    <S.Description>“Even with a different language and time zone, 
                        the young people of Vai na Web <S.Bold>helped us to design and develop a 
                        brand new website to serve our customers.</S.Bold> Thank you Vai na Web
                         for your commitment, dedication and creativity.”
                    </S.Description>
                    
                    <S.Identification>
                        <S.IdentificationText>
                            <S.Name>Patrícia Zaundi</S.Name>
                            <S.Office>Diretora Executiva</S.Office>
                        </S.IdentificationText>
                        <S.IdentificationCompany>
                            <S.ImageCompany src={PatriciaCompany} />
                        </S.IdentificationCompany>
                    </S.Identification>
                </S.DepositionsSlideCard>

                <S.DepositionsSlideCard>
                    <S.ImageElson src={Elson} />
                    <S.Description>“<S.Bold>Criatividade e usabilidade em escala foi 
                        o que conseguimos acelerar com a experiência de ter dentro 
                        da empresa jovens profissionais do Vai na Web.</S.Bold> Não apenas 
                        novos produtos mas principalmente novas experiências com grande 
                        colaboração e alto nível de responsabilidade individual.”
                    </S.Description>
                   
                    <S.Identification>
                        <S.IdentificationText>
                            <S.Name>Elson Cordeiro</S.Name>
                            <S.Office>Diretor de Operações e Serviços</S.Office>
                        </S.IdentificationText>
                        <S.IdentificationCompany>
                            <S.ImageCompany src={ElsonCompany} />
                        </S.IdentificationCompany>
                    </S.Identification>
                </S.DepositionsSlideCard>
            </Carousel>

            </S.DepositionsSlides> 
            
            <S.DepositionsSlidesResponsive>
                <S.AnimationSlide>
                    {/* VANIA */}
                    <S.BoxSlide>
                        <S.DescriptionResponsive>
                            “Estes meninos e meninas são preparados 
                            para o mercado de trabalho e desenvolvem entregas brilhantes. 
                            <S.Bold> O Sírio-Libanês tem muito orgulho dessa parceria que mostrou 
                            que é possível investir em inovação e formação simultaneamente.”</S.Bold>
                        </S.DescriptionResponsive>
                        <S.IdentificationResponsive>
                            <S.ImagePeopleResponsive src={Vania} />
                            <S.TextIdentificationResponsive>
                                <S.NameResponsive>Vânia Bezerra</S.NameResponsive>
                                <S.OfficeResponsive>Diretora de Compromisso Social</S.OfficeResponsive>
                                <S.ImageCompanyResponsive src={VaniaCompany} />
                            </S.TextIdentificationResponsive>
                        </S.IdentificationResponsive>
                    </S.BoxSlide>

                    {/* ELSON */}
                    <S.BoxSlide>
                        <S.DescriptionResponsive>
                            “<S.Bold>Criatividade e usabilidade em escala foi 
                            o que conseguimos acelerar com a experiência de ter dentro 
                            da empresa jovens profissionais do Vai na Web.</S.Bold> Não apenas 
                            novos produtos mas principalmente novas experiências com grande 
                            colaboração e alto nível de responsabilidade individual.”
                        </S.DescriptionResponsive>
                        <S.IdentificationResponsive>
                            <S.ImagePeopleResponsive src={Elson} />
                            <S.TextIdentificationResponsive>    
                                <S.NameResponsive>Elson Cordeiro</S.NameResponsive>
                                <S.OfficeResponsive>Diretor de Operações e Serviços</S.OfficeResponsive>
                                <S.ImageCompanyResponsive src={ElsonCompany} />
                            </S.TextIdentificationResponsive>
                        </S.IdentificationResponsive>
                    </S.BoxSlide>

                    {/* PATRICIA */}
                    <S.BoxSlide>
                        <S.DescriptionResponsive>
                            “Even with a different language and time zone, 
                            the young people of Vai na Web <S.Bold>helped us to design and develop a 
                            brand new website to serve our customers.</S.Bold> Thank you Vai na Web
                            for your commitment, dedication and creativity.”
                        </S.DescriptionResponsive>
                        <S.IdentificationResponsive>
                            <S.ImagePeopleResponsivePatricia src={Patricia} />
                            <S.TextIdentificationResponsive>    
                                <S.NameResponsive>Patrícia Zaundi</S.NameResponsive>
                                <S.OfficeResponsive>Diretora Executiva</S.OfficeResponsive>
                                <S.ImageCompanyResponsive src={PatriciaCompany} />
                            </S.TextIdentificationResponsive>
                        </S.IdentificationResponsive>
                    </S.BoxSlide>

                </S.AnimationSlide>
                
            </S.DepositionsSlidesResponsive>


        </S.Depositions>
    )
}

export default Depositions;