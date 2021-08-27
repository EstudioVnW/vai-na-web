import React from 'react';
import { navigate } from 'gatsby';

import * as S from './styles';

import Button from '../../button/Button';

const redirectToContact = () => {
    navigate('/reserve-seu-squad/');
}

const Participate = () => (

    <S.Participate>
        <S.BoxParticipate>
            <S.BoxTitle>
                <S.TitleButton>Participe dessa revolução.</S.TitleButton>
                <S.SubtitleButton>Junte-se a nós!</S.SubtitleButton>
                <S.BoxButton>
                    <Button
                        width="17rem"
                        border="#00145D"
                        color="#FED5B2"
                        background="#0F2B92"
                        colorHover='#FFF'
                        funcAction={redirectToContact}
                    >
                        Reserve seu Squad!
                    </Button>
                </S.BoxButton>
            </S.BoxTitle>
            <S.BoxDecription>
                <S.Description>Contratando o Vai na Web você resolve os seus problemas 
                    de negócio, investe na formação de milhares de jovens e ainda ganha acesso 
                    a uma fonte de profissionais, com muita diversidade e inclusão, para compor 
                    a próxima geração de talentos da sua empresa.
                </S.Description>
            </S.BoxDecription>
        </S.BoxParticipate>
    </S.Participate>
    
);

export default Participate;