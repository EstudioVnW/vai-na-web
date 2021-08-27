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
  const [sendingForm, setSendingForm] = useState(undefined);

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

    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )

    const errorName = !formContent?.name?.length && 'Campo não preenchido';
    const errorEmail = !formContent?.email?.length ? 'Campo não preenchido' : !pattern.test(formContent.email) && 'Email inválido';
    const errorTel = !formContent?.tel?.length ? 'Campo não preenchido' : formContent?.tel?.replace(/\D+/g, '').length < 11 && 'Telefone inválido';
    const errorMessage = !formContent?.message?.length && 'Campo não preenchido';

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
      setStatus('');
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
        setFormContent({});
        setStatus('Email enviado com sucesso');
        setTimeout(() => {setSendingForm(undefined)}, 500);
        console.log('sucesso');
      })
      .catch(() => {
        setStatus('Algo deu errado, tente novamente mais tarde');
        setTimeout(() => {setSendingForm(false)}, 500);
        console.log('falha');
      })
  }

  const handleFocus = (ev) => {
    setSelectedInput(ev.target.name)

  }

  const handleClear = (id) => {
    document.getElementById(id).value = ''
  }

  return (
    <S.Contato>
      <S.ContatoContainer>
        <S.FormContainer>
          <S.FormTitle>Contato</S.FormTitle>
          <S.FormText>
            Nos conte sobre o seu desafio de negócio.
            <br/>Entraremos em contato em até 24h. Não enviamos spam.
          </S.FormText>
          <S.Form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
            onSubmit={handleSubmit}
          >
            <S.FormLabel
              selected={selectedInput === 'name'}
              isError={errors.name}
            >
              Nome
              <S.FormInput
                id='inpName'
                name="name"
                value={formContent?.name || ''}
                type="text"
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {selectedInput === 'name' && formContent?.name?.length
                ? <S.BtnLimpar onClick={() => handleClear('inpName')}>Limpar</S.BtnLimpar>
                : errors?.name && <S.ErroInput>Campo não preenchido</S.ErroInput>
              }
            </S.FormLabel>

            <S.FormLabel
              selected={selectedInput === 'email'}
              isError={errors.email}
            >
              Email
              <S.FormInput
                id='inpEmail'
                name="email"
                value={formContent?.email || ''}
                type="email"
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {selectedInput === 'email' && formContent?.email?.length
                ? <S.BtnLimpar onClick={() => handleClear('inpEmail')}>Limpar</S.BtnLimpar>
                : errors?.email && <S.ErroInput>Campo não preenchido</S.ErroInput>
              }
            </S.FormLabel>

            <S.FormLabel
              selected={selectedInput === 'tel'}
              isError={errors.tel}
            >
              Telefone
              <S.FormInput
                id='inpTel'
                name="tel"
                value={formContent?.tel ? phoneMask(formContent?.tel) : ''}
                type="tel"
                onChange={handleChange}
                onFocus={handleFocus}
              />
              {selectedInput === 'tel' && formContent?.tel?.length
                ? <S.BtnLimpar onClick={() => handleClear('inpTel')}>Limpar</S.BtnLimpar>
                : errors?.tel && <S.ErroInput>Campo não preenchido</S.ErroInput>
              }
            </S.FormLabel>
            <S.FormLabelMsg
              selected={selectedInput === 'message'} 
              isError={errors.message}
            >
              Mensagem
              {selectedInput === 'message' && formContent?.message?.length
                ? <S.BtnLimparMsg
                    onClick={() => handleClear('inpMessage')}
                  >
                    Limpar
                  </S.BtnLimparMsg>
                : errors?.message && <S.ErroInput>{errors?.message}</S.ErroInput>
              }
              <S.MsgInput
                id='inpMessage'
                name="message"
                value={formContent?.message || ''}
                type="text" 
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </S.FormLabelMsg>
            {status}
            <S.FormBtn>
              { sendingForm === false || errors.name || errors.email || errors.tell || errors.message
                ?
                  <>
                    <S.BtnError>
                      Falha no envio
                    </S.BtnError>
                    <S.TextError>
                      Alguns campos estão vazios. Por favor, preencher todos 
                      os campos para enviar.
                    </S.TextError>
                  </>
                :
                  <S.Btn isLoading={sendingForm}>
                    {sendingForm ? 'Enviando' : 'Enviar!'}
                  </S.Btn>
              }
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
              <S.SideText>+55 (21) 9 8244-8898</S.SideText>
            </S.SideInfo>
          </S.SideBox>
        </S.Sidebar>
      </S.ContatoContainer>
    </S.Contato>
  );
}

export default Form;