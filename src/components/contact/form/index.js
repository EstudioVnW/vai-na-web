import React from 'react';

import * as S from './styles';

//Icons
import localIcon from '../../../images/icons/localIcon.svg';
import mailIcon from '../../../images/icons/mailIcon.svg';
import phoneIcon from '../../../images/icons/phoneIcon.svg';

const Form = () => {
    return (
        <S.Contato>
            <S.ContatoContainer>
                <S.FormContainer>
                    <S.FormTitle>Contato</S.FormTitle>
                    <S.FormText>Você está a um click de destravar seu backlog com os squads estendidos do Vai na Web
                        e formar sua nova força de trabalho.</S.FormText>
                    <S.FormText>Entraremos em contato em até 24h. Não enviamos spam.</S.FormText>
                    
                    <S.Form>
                        <S.FormLabel>
                            Nome
                            <S.FormInput type="text" />
                        </S.FormLabel>

                        <S.FormLabel>
                            Email
                            <S.FormInput type="email" />
                        </S.FormLabel>

                        <S.FormLabel>
                            Telefone
                            <S.FormInput type="tel" />
                        </S.FormLabel>

                        <S.FormLabelMsg>
                            Mensagem
                            <S.MsgInput></S.MsgInput>
                        </S.FormLabelMsg>

                        <S.FormBtn>
                            <S.Btn>Enviar!</S.Btn>
                        </S.FormBtn>
                    </S.Form>
                </S.FormContainer>

                <S.Sidebar>
                    <S.SideBox>
                        <S.SideIcon src={localIcon} alt="não foi" />
                        <S.SideInfo>
                            <S.SideTitle>Endereço</S.SideTitle>
                            <S.SideText>Rua Gomes Lopes, 12 - Associação de Moradores do Morro dos Prazeres, Santa
                                Teresa - Rio de Janeiro. CEP: 20241-266.</S.SideText>
                        </S.SideInfo>
                    </S.SideBox>

                    <S.SideBox>
                        <S.SideIcon src={mailIcon} alt="" />
                        <S.SideInfo>
                            <S.SideTitle>Email</S.SideTitle>
                            <S.SideText>ola@vainaweb.com.br</S.SideText>
                        </S.SideInfo>
                    </S.SideBox>

                    <S.SideBox>
                        <S.SideIcon src={phoneIcon} alt="" />
                        <S.SideInfo>
                            <S.SideTitle>Telefone</S.SideTitle>
                            <S.SideText>+55 (21) 9 0000-0000</S.SideText>
                        </S.SideInfo>
                    </S.SideBox>
                </S.Sidebar>
            </S.ContatoContainer>
        </S.Contato>
    );
}

export default Form;
