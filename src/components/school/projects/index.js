import React from 'react';
import * as S from './styles';

import StarWars from '../../../images/images/studentProjects/starWars.png';
import Portflow from '../../../images/images/studentProjects/portflow.png';
import TheWitcher from '../../../images/images/studentProjects/theWitcher.png';
import Life from '../../../images/images/studentProjects/life.png';
import Crespos from '../../../images/images/studentProjects/Component 115.png';
import PMap from '../../../images/images/studentProjects/Component 116.png';
import Dandara from '../../../images/images/studentProjects/Component 117.png';
import BoasPraticas from '../../../images/images/studentProjects/boasPraticas.png';
import Cactus from '../../../images/images/studentProjects/Cactus.png';
import SiteRenan from '../../../images/images/studentProjects/siteRenan.png';
import SiteFelipe from '../../../images/images/studentProjects/siteFelipe.png';
import SiteMarcus from '../../../images/images/studentProjects/siteMarcus.png';

const ProjectsSchool = () => (
    <S.Container>
        <S.Wrap>
            <S.Title>Veja alguns trabalhos feitos por nossos estudantes</S.Title>

            <S.BoxSlide>
                <S.Slide>

                    <S.Project>
                        <S.Img src={StarWars} alt="Site StarWars" />
                        <S.Link href="https://liviavieira.github.io/STAR-WARS/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Lívia Vieira, 17 anos</S.Name>
                            <S.Address>Riacho dos Cavalos, Paraíba</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Portflow} alt="Site Portflow" />
                        <S.Link href="https://amandagorni.github.io/Portflow-Page/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Amanda Gorni, 22 anos</S.Name>
                            <S.Address>Itaboraí, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={TheWitcher} alt="Site The Witcher" />
                        <S.Link href="https://codepen.io/ryan-cardoso-the-sasster/full/ExNryvK" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Ryan Cardoso, 19 anos</S.Name>
                            <S.Address>Del Castilho, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Life} alt="Site Beat" />
                        <S.Link href="https://anthonyzzin.github.io/Beat/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Anthony Nathan, 17 anos</S.Name>
                            <S.Address>Riacho dos Cavalos, Paraíba</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Crespos} alt="Site Crespos" />
                        <S.Link href="https://alicecomoura.github.io/crespos/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Alice Coelho, 21 anos</S.Name>
                            <S.Address>Baixada Fluminense, Nova Iguaçu</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>


                    <S.Project>
                        <S.Img src={PMap} alt="Site Countdown" />
                        <S.Link href="https://luanpires94.github.io/countdown-time/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Luan Pires, 26 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>


                    <S.Project>
                        <S.Img src={Dandara} alt="Site da Dandara" />
                        <S.Link href="https://rhayssadandara.github.io/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Dandara Nogueira, 22 anos</S.Name>
                            <S.Address>Favela do Arará, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>


                    <S.Project>
                        <S.Img src={BoasPraticas} alt="Site Boas Praticas" />
                        <S.Link href="https://pamelaferreiralima.github.io/desafio-boas-praticas/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Pâmela, 23 anos</S.Name>
                            <S.Address>Leme, São Paulo</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>


                    <S.Project>
                        <S.Img src={Cactus} alt="Site Cacto da Tatiana" />
                        <S.Link href="https://tati2.github.io/desenho-cacto-position/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Tatiana Correia, 24 anos</S.Name>
                            <S.Address>São Gonçalo, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>


                    <S.Project>
                        <S.Img src={SiteRenan} alt="Site League of Legends" />
                        <S.Link href="https://renananiceto.github.io/-first-screen-lee-sin/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Renan Aniceto, 26 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={SiteFelipe} alt="Site Supernatural" />
                        <S.Link href="https://felipesilva99.github.io/SPN/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Felipe Silva, 22 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                    <S.Project>
                        <S.Img src={SiteMarcus} alt="Site Amigão" />
                        <S.Link href="https://caetanomarcus.github.io/Amicao/" target="_blank">
                        <S.BoxDesc>
                            <S.Name>Marcus Caetano, 29 anos</S.Name>
                            <S.Address>Luz, Nova Iguaçu</S.Address>
                        </S.BoxDesc>
                        </S.Link>
                    </S.Project>

                </S.Slide>
            </S.BoxSlide>
        </S.Wrap>
    </S.Container>
);

export default ProjectsSchool;