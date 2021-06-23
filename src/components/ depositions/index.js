import React, { useState } from "react";
import * as S from './styles';

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


                <S.DepositionsSlideVania>
                    <S.ImageVania src={Vania} />
                    <S.DescriptionVania>“Estes meninos e meninas são preparados 
                        para o mercado de trabalho e desenvolvem entregas brilhantes. 
                        <S.Bold> O Sírio-Libanês tem muito orgulho dessa parceria que mostrou 
                        que é possível investir em inovação e formação simultaneamente.”</S.Bold>
                    </S.DescriptionVania>
                    
                    <S.IdentificationVania>
                        <S.IdentificationVaniaText>
                            <S.Name>Vânia Bezerra</S.Name>
                            <S.Office>Diretora de Compromisso Social</S.Office>
                        </S.IdentificationVaniaText>
                        <S.IdentificationVaniaCompany>
                            <S.ImageVaniaCompany src={VaniaCompany} />
                        </S.IdentificationVaniaCompany>
                    </S.IdentificationVania>
                </S.DepositionsSlideVania>

                <S.DepositionsSlidePatricia>
                    <S.ImagePatricia src={Patricia} />
                    <S.DescriptionPatricia>“Even with a different language and time zone, 
                        the young people of Vai na Web <S.Bold>helped us to design and develop a 
                        brand new website to serve our customers.</S.Bold> Thank you Vai na Web
                         for your commitment, dedication and creativity.”
                    </S.DescriptionPatricia>
                    
                    <S.IdentificationPatricia>
                        <S.IdentificationPatriciaText>
                            <S.Name>Patrícia Zaundi</S.Name>
                            <S.Office>Diretora Executiva</S.Office>
                        </S.IdentificationPatriciaText>
                        <S.IdentificationPatriciaCompany>
                            <S.ImagePatriciaCompany src={PatriciaCompany} />
                        </S.IdentificationPatriciaCompany>
                    </S.IdentificationPatricia>
                </S.DepositionsSlidePatricia>

                <S.DepositionsSlideElson>
                    <S.ImageElson src={Elson} />
                    <S.DescriptionElson>“<S.Bold>Criatividade e usabilidade em escala foi 
                        o que conseguimos acelerar com a experiência de ter dentro 
                        da empresa jovens profissionais do Vai na Web.</S.Bold> Não apenas 
                        novos produtos mas principalmente novas experiências com grande 
                        colaboração e alto nível de responsabilidade individual.”
                    </S.DescriptionElson>
                   
                    <S.IdentificationElson>
                        <S.IdentificationElsonText>
                            <S.Name>Elson Cordeiro</S.Name>
                            <S.Office>Diretor de Operações e Serviços</S.Office>
                        </S.IdentificationElsonText>
                        <S.IdentificationElsonCompany>
                            <S.ImageElsonCompany src={ElsonCompany} />
                        </S.IdentificationElsonCompany>
                    </S.IdentificationElson>
                </S.DepositionsSlideElson>

            </S.DepositionsSlides>
        </S.Depositions>
    )
}

export default Depositions;