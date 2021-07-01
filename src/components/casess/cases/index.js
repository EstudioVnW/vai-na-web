import React from 'react';
import * as S from './styles';

//Imgs
import Sirio from '../../../images/images/sirio.png';
import Proadi from '../../../images/images/proadi.png';
import Reg from '../../../images/images/Reg.png';
import Its from '../../../images/images/its.png';
import Lai from '../../../images/images/lai.png';
import Quickcash from '../../../images/images/QuickCash.png';
import QuickcashDesktop from '../../../images/images/quickcashDesktop.png';
import QuickcashMobile from '../../../images/images/quickcashMobile.png';
import Votorantim from '../../../images/images/votorantim.png';
import VotorantimDesktop from '../../../images/images/votorantimDesktop.png';
import VotorantimMobile from '../../../images/images/votorantimMobile.png';

const TesteCases = () => (
    <S.CasesContainer>
        <S.Case>
            <S.InfoBox>
                <S.CaseTitle>Inovando no sistema de atendimento do SUS</S.CaseTitle>
                <S.CaseText>
                    Em colaboração com o Hospital Sírio-Libanês e o PROADI-SUS, desenvolvemos o Regula
                    Mais Brasil 2.0, um sistema de telemedicina para regular as filas de espera para consultas com
                    médicos especialistas de cinco capitais do Brasil.
                </S.CaseText>
                <S.CaseText>
                    Através da integração das jornadas de médicos, enfermeiros, atendentes e consultores
                    de saúde otimizamos o tempo de atendimento e diagnóstico dos pacientes, aumentando a eficiência na
                    resolutividade da Atenção Primária à Saúde.
                </S.CaseText>
                <S.Hashtag>#Design #React #Redux #Dynamo #StyledComponents</S.Hashtag>
                <S.Client>
                    <S.ClientBox>
                        <S.ClientText>cliente</S.ClientText>
                        <S.LogoBox>
                            <S.CaseLogo src={Sirio} alt="" />
                            <S.CaseLogo src={Proadi} alt="" />
                        </S.LogoBox>
                    </S.ClientBox>
                    <S.Date>
                        <S.ClientText>
                            ano
                            <span>2020</span>
                        </S.ClientText>
                    </S.Date>
                </S.Client>
            </S.InfoBox>
            <S.ImgBox>
                <S.CaseImg src={Reg} alt="" />
            </S.ImgBox>
        </S.Case>

        <S.Reverse>
            <S.InfoBox>
                <S.CaseTitle>Mapeando a Lei de Acesso à Informação</S.CaseTitle>
                <S.CaseText>
                    Baseado nos dados do monitoramento Escala Brasil Transparente - Avaliação 360º,
                    realizado pela Controladoria-Geral da União (CGU), o Vai na Web desenvolveu um mapa vivo. O objetivo
                    foi ajudar o ITS Rio na campanha nacional que incentiva os cidadãos a criarem projetos de lei de
                    iniciativa popular para regulamentar a Lei de Acesso à Informação (LAI) que, apesar de estar
                    sancionada há oito anos, ainda não é cumprida em 86% dos municípios do Brasil.
                </S.CaseText>
                <S.CaseText>
                    Sem acesso às informações públicas, o cidadão não consegue acessar plenamente seus
                    direitos básicos e nem fiscalizar o poder público. Para o Vai na Web, foi uma honra contribuir com
                    essa iniciativa.
                </S.CaseText>
                <S.Hashtag>#Design #React.js #Kepler.gl</S.Hashtag>
                <S.Client>
                    <S.ClientBox>
                        <S.ClientText>cliente</S.ClientText>
                        <S.LogoBox>
                            <S.CaseLogo src={Its} alt="" />
                        </S.LogoBox>
                    </S.ClientBox>
                    <S.Date>
                        <S.ClientText>
                            ano
                            <span>2021</span>
                        </S.ClientText>
                    </S.Date>
                </S.Client>
            </S.InfoBox>
            <S.ImgBox>
                <S.CaseImg src={Lai} alt="" />
            </S.ImgBox>
        </S.Reverse>

        <S.Case>
            <S.InfoBox>
                <S.CaseTitle>Fortalecendo a inclusão financeira na África</S.CaseTitle>
                <S.CaseText>
                    Quick Cash é uma Fintech especializada na concepção de serviços digitais que promove
                    a inclusão financeira da população rural africana. Mesmo com um oceano de distância, o Vai na Web
                    ajudou a Quick Cash a realizar o design e o desenvolvimento de um novo site, mais dinâmico,
                    multi-telas e multi-dispositivos, apoiando a expansão do negócio social para cinco diferentes
                    países: Costa do Marfim; Nigéria; Togo; Mali e Burkina Faso.
                </S.CaseText>
                <S.Hashtag>#Design #HTML5 #CSS3 #JavaScript</S.Hashtag>
                <S.Client>
                    <S.ClientBox>
                        <S.ClientText>cliente</S.ClientText>
                        <S.LogoBox>
                            <S.CaseLogo src={Quickcash} alt="" />
                        </S.LogoBox>
                    </S.ClientBox>
                    <S.Date>
                        <S.ClientText>
                            ano
                            <span>2019</span>
                        </S.ClientText>
                    </S.Date>
                </S.Client>
            </S.InfoBox>
            <S.ImgBox>
                <S.DesktopImg src={QuickcashDesktop} alt="" />
                <S.MobileImg src={QuickcashMobile} alt="" />
            </S.ImgBox>
        </S.Case>

        <S.Reverse>
            <S.InfoBox>
                <S.CaseTitle>Premiando a educação pública de qualidade</S.CaseTitle>
                <S.CaseText>
                    Desenvolvimento do design e programação de um site responsivo e dinâmico para apoiar
                    a realização do prêmio Parceria Votorantim pela Educação (PVE). O prêmio valoriza os melhores
                    trabalhos de gestão educacional, escolar e de mobilização comunitária, além de contribuir para
                    inspirar a replicação de boas ações em mais de 104 municípios distribuídos em 17 Estados
                    brasileiros.
                </S.CaseText>

                <S.Hashtag>#Design #HTML5 #CSS3 #JavaScript</S.Hashtag>
                <S.Client>
                    <S.ClientBox>
                        <S.ClientText>cliente</S.ClientText>
                        <S.LogoBox>
                            <S.CaseLogo src={Votorantim} alt="" />
                        </S.LogoBox>
                    </S.ClientBox>
                    <S.Date>
                        <S.ClientText>
                            ano
                            <span>2018</span>
                        </S.ClientText>
                    </S.Date>
                </S.Client>
            </S.InfoBox>
            <S.ImgBox>
                <S.DesktopImg src={VotorantimDesktop} alt="" />
                <S.MobileImg src={VotorantimMobile} alt="" />
            </S.ImgBox>
        </S.Reverse>
    </S.CasesContainer>
);

export default TesteCases;
