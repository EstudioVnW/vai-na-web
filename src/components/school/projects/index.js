import React from 'react';
import * as S from './styles';

//Components
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
            <S.Title>Veja alguns de nossos estudantes</S.Title>

            <S.BoxSlide>
                <S.Slide>

                    <S.Project>
                        <S.Img src={StarWars} alt="Site do StarWars" />
                        <S.BoxDesc>
                            <S.Name>Lívia Viera, 17 anos</S.Name>
                            <S.Address>Riacho dos Cavalos, Paraíba</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Portflow} alt="Site do Portflow" />
                        <S.BoxDesc>
                            <S.Name>Amanda Gorni, 22 anos</S.Name>
                            <S.Address>Itaboraí, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={TheWitcher} alt="Site do TheWitcher" />
                        <S.BoxDesc>
                            <S.Name>Ryan Cardoso, 19 anos</S.Name>
                            <S.Address>Del Castilho, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Life} alt="Site do aluno Anthony" />
                        <S.BoxDesc>
                            <S.Name>Anthony Nathan, 17anos</S.Name>
                            <S.Address>Jardim dos Cavalos, Paraíba</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={Crespos} alt="Site Crespos" />
                        <S.BoxDesc>
                            <S.Name>Alice Coelho, 21 anos</S.Name>
                            <S.Address>Baixada Fluminense, Nova Iguaçu</S.Address>
                        </S.BoxDesc>
                    </S.Project>


                    <S.Project>
                        <S.Img src={PMap} alt="Site do Luan" />
                        <S.BoxDesc>
                            <S.Name>Luan Pires, 26 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>


                    <S.Project>
                        <S.Img src={Dandara} alt="Site da Dandara" />
                        <S.BoxDesc>
                            <S.Name>Dandara Nogueira, 22 anos</S.Name>
                            <S.Address>Favela do Arará, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>


                    <S.Project>
                        <S.Img src={BoasPraticas} alt="Site BoasPraticas" />
                        <S.BoxDesc>
                            <S.Name>Pâmela, 23 anos</S.Name>
                            <S.Address>Leme, São Paulo</S.Address>
                        </S.BoxDesc>
                    </S.Project>


                    <S.Project>
                        <S.Img src={Cactus} alt="Site da Tatiana" />
                        <S.BoxDesc>
                            <S.Name>Tatiana Correia, 24 anos</S.Name>
                            <S.Address>São Gonçalo, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>


                    <S.Project>
                        <S.Img src={SiteRenan} alt="Site do Renan" />
                        <S.BoxDesc>
                            <S.Name>Renan Anicieto, 26 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={SiteFelipe} alt="Site do Supernatural" />
                        <S.BoxDesc>
                            <S.Name>Felipe Silva, 22 anos</S.Name>
                            <S.Address>Complexo do Alemão, Rio de Janeiro</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                    <S.Project>
                        <S.Img src={SiteMarcus} alt="Site do Marcus" />
                        <S.BoxDesc>
                            <S.Name>Marcus Caetano</S.Name>
                            <S.Address>Luz, Nova Iguaçu</S.Address>
                        </S.BoxDesc>
                    </S.Project>

                </S.Slide>
            </S.BoxSlide>
        </S.Wrap>
    </S.Container>
);

export default ProjectsSchool;