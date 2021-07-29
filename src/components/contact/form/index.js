import React, { useState } from 'react';

import * as S from './styles';
import {phoneMask} from '../../../utils/utils';
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
  const [formContent, setFormContent] = useState({});
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedInput, setSelectedInput] = useState(undefined);
  const [sendingForm, setSendingForm] = useState(false)

  const handleChange = (ev) => {
    setFormContent({
      ...formContent,
      [ev.target.name]: ev.target.value,
    });

    let newErrors = {
      ...errors,
      [ev.target.name]: false,
    }

    setErrors(newErrors);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSelectedInput(undefined)
    const errorName = !formContent?.name?.length;
    const errorEmail = !formContent?.email?.length;
    const errorTel = !formContent?.tel?.length;
    const errorMessage = !formContent?.message?.length;

    if (!errorName && !errorEmail && !errorTel && !errorMessage) {
      postForm();
    } else {
      const isErrors = {
        name: errorName,
        email: errorEmail,
        tel: errorTel,
        message: errorMessage
      };

      setErrors(isErrors);
    }
  }

  const postForm = () => {
    setSendingForm(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formContent })
    })
      .then(() => {
        setStatus('Email enviado com sucesso')
        setTimeout(() => {setSendingForm(false)}, 500)
        
      })
      .catch(() => {
        setStatus('Algo deu errado, tente novamente mais tarde')
        setTimeout(() => {setSendingForm(false)}, 500)
      })
      
  }

  const handleFocus = (ev) => {
    setSelectedInput(ev.target.name)

  }

  const handleClear = (id) => {
    document.getElementById(id).value = ''
  }
console.log(sendingForm)
  return (
    <S.Contato>
      <S.ContatoContainer>
        <S.FormContainer>
          <S.FormTitle>Contato</S.FormTitle>
          <S.FormText>Você está a um click de destravar seu backlog com os squads estendidos do Vai na Web
            e formar sua nova força de trabalho.</S.FormText>
          <S.FormText>Entraremos em contato em até 24h. Não enviamos spam.</S.FormText>
          {console.log(errors)}
          <S.Form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
            onSubmit={handleSubmit}
          >
            <S.FormLabel selected={selectedInput === 'name'} isError={errors.name}>
              Nome
              <S.FormInput id='inpName' name="name" type="text" onChange={handleChange} onFocus={handleFocus} />
              {selectedInput === 'name' && <S.BtnLimpar onClick={() => handleClear('inpName')}>Limpar</S.BtnLimpar>}
            </S.FormLabel>

            <S.FormLabel selected={selectedInput === 'email'} isError={errors.email}>
              Email
              <S.FormInput id='inpEmail' name="email" type="email" onChange={handleChange} onFocus={handleFocus} />
              {selectedInput === 'email' && <S.BtnLimpar onClick={() => handleClear('inpEmail')}>Limpar</S.BtnLimpar>}
            </S.FormLabel>

            <S.FormLabel selected={selectedInput === 'tel'} isError={errors.tel}>
              Telefone
              <S.FormInput id='inpTel' name="tel" value={formContent?.tel ? phoneMask(formContent?.tel) : ''} type="tel" pattern="[0-9]{11}" onChange={handleChange} onFocus={handleFocus} />
              {selectedInput === 'tel' && <S.BtnLimpar onClick={() => handleClear('inpTel')}>Limpar</S.BtnLimpar>}
            </S.FormLabel>
            <S.FormLabelMsg selected={selectedInput === 'message'} isError={errors.message}>
              Mensagem
              {selectedInput === 'message' && <S.BtnLimparMsg onClick={() => handleClear('inpMessage')}>Limpar</S.BtnLimparMsg>}
              <S.MsgInput id='inpMessage' name="message" type="text" onChange={handleChange} onFocus={handleFocus} />
            </S.FormLabelMsg>
            {status}
            <S.FormBtn>
              <S.Btn isLoading={sendingForm} >{sendingForm ? 'Enviando' : 'Enviar!'}</S.Btn>
            </S.FormBtn>
          </S.Form>
          {errors.name && <p>Não foi possível completar seu envio, clique no ícone para reenviar.</p>}
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
              <S.SideText>+55 (21) 9 8244-8898</S.SideText>
            </S.SideInfo>
          </S.SideBox>
        </S.Sidebar>
      </S.ContatoContainer>
    </S.Contato>
  );
}

export default Form;
