import React from 'react';
import * as S from './styles';

//Components
import PhotoEstudio from '../../../images/images/PhotoEstudio1.png';
import IconWhatsapp from '../../../images/images/icon_whatsapp.svg';
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
                            <S.Link 
                                href="https://forms.gle/RLVywB9qjBxoVjBv7" 
                                target="_blank"
                            >
                                <Button
                                    width='10.5rem'
                                    colorHover='#FFF'
                                >
                                    Inscreva-se
                                </Button>
                            </S.Link>
                            <S.Link
                                href="https://api.whatsapp.com/send?phone=5521982448898&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
                                target="_blank"
                            >
                                <S.IconWhats src={IconWhatsapp} alt="Icon WhatsApp" />
                            </S.Link>
                            <S.DownArrow src={downArrow} alt="Seta apontando para baixo" />
                        </S.BoxButton>
                    </S.BoxText>

                </S.BoxInfo>

                <S.BoxImgs>
                    <S.BoxEstudio>
                        <S.ImgEstudio src={PhotoEstudio} alt="Foto Estudio" />
                    </S.BoxEstudio>
                </S.BoxImgs>
            </S.BoxHeader>
        </S.Wrap>
    </S.Container>
);

export default SchoolHeader;