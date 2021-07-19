import React from 'react';
import * as S from './styles';

//Components
import PhotoEstudio from '../../../images/images/PhotoEstudio1.png';
import IconWhatsapp from '../../../images/images/icon_whatsapp.svg';
import EstudioLogo from '../../../images/images/escolaLogo.svg';
import downArrow from '../../../images/images/downArrow.svg';
import Button from '../../button/Button';

const SchoolHeader = () => (
    <S.Container>
        <S.Wrap>
            <S.BoxHeader>
                <S.BoxInfo>
                    <S.BoxTitle>
                        <S.TitleBar>//</S.TitleBar>
                        <S.Title>
                            Construa uma carreira de sucesso na tecnologia
                        </S.Title>
                    </S.BoxTitle>

                    <S.BoxText>
                        <S.Paragraph>Aulas dinâmicas, práticas e 100% ao vivo!</S.Paragraph>
                        <S.BoxButton>
                            <Button
                                width='10.5rem'
                            >
                                Inscreva-se
                            </Button>
                            <S.Link
                                href="https://web.whatsapp.com/"
                                target="_blank"
                            >
                                <S.IconWhats src={IconWhatsapp} alt="Icon WhatsApp" />
                            </S.Link>            
                            <S.DownArrow src={downArrow} alt="Seta apontando para baixo"/>
                        </S.BoxButton>
                    </S.BoxText>

                </S.BoxInfo>

                <S.BoxImg>
                    <S.Logo src={EstudioLogo} alt="Logo Vai na Web" />
                    <S.ImgEstudio src={PhotoEstudio} alt="Foto Estudio" />
                </S.BoxImg>
            </S.BoxHeader>
        </S.Wrap>
    </S.Container>
);

export default SchoolHeader;