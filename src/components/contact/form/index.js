import React, { useState } from 'react';

import * as S from './styles';

//Icons
import localIcon from '../../../images/icons/localIcon.svg';
import mailIcon from '../../../images/icons/mailIcon.svg';
import phoneIcon from '../../../images/icons/phoneIcon.svg';

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

const Form = () => {
    const [formContent, setFormContent] = useState({})
    const [status, setStatus] = useState('')

    const handleChange = (ev) => {
        setFormContent({
            ...formContent,
            [ev.target.name]: ev.target.value,
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formContent })
        })
            .then(() => {
                setStatus('Email enviado com sucesso')
            })
            .catch(() => {
                setStatus('Algo deu errado, tente novamente mais tarde')
            })
    }

    return (
        <S.Contato>
            <S.ContatoContainer>
                <S.FormContainer>
                    <S.FormTitle>Contato</S.FormTitle>
                    <S.FormText>Você está a um click de destravar seu backlog com os squads estendidos do Vai na Web
                        e formar sua nova força de trabalho.</S.FormText>
                    <S.FormText>Entraremos em contato em até 24h. Não enviamos spam.</S.FormText>
                    
                    <S.Form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify
                        onSubmit={handleSubmit}
                    >
                        <S.FormLabel>
                            Nome
                            <S.FormInput name="text" type="text" onChange={handleChange} />
                        </S.FormLabel>

                        <S.FormLabel>
                            Email
                            <S.FormInput name="email" type="email" onChange={handleChange} />
                        </S.FormLabel>

                        <S.FormLabel>
                            Telefone
                            <S.FormInput name="tel" type="tel" onChange={handleChange} />
                        </S.FormLabel>
                        <S.FormLabelMsg>
                            Mensagem
                            <S.MsgInput name="message" type="text" onChange={handleChange} />
                        </S.FormLabelMsg>
                        {status}
                        <S.FormBtn>
                            <S.Btn>Enviar!</S.Btn>
                        </S.FormBtn>
                    </S.Form>
                </S.FormContainer>

                <S.Sidebar>
                    <S.SideBox>
                        <S.SideIcon src={localIcon} alt="" />
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
