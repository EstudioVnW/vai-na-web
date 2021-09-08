import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles.js';

import logoFacebook from '../../images/icons/icon-facebook.svg';
import logoInstagram from '../../images/icons/icon-instagram.svg';
import logoMedium from '../../images/icons/icon-medium.svg';
import logoLinkedin from '../../images/icons/icon-linkedin.svg';
import logoYoutube from '../../images/icons/icon-youtube.svg';
import logoVnW from '../../images/icons/logo-VNW.svg';
import logoPacto from '../../images/icons/logo-pacto.png';
import logoOds from '../../images/icons/logo-ods.png';
import iconRow from '../../images/icons/icon-row.png';

const Footer = () => (
  <S.FooterContainer id="footer">
    <S.DivisionBackground />
    <S.DivisionContainer>
      <S.DivisionLine />
      <S.Division>
        <S.DivisionText>Mercado</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Carreira</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>tecnologia</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Mercado</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Carreira</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>tecnologia</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Mercado</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Carreira</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>tecnologia</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Mercado</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>Carreira</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
        <S.DivisionText>tecnologia</S.DivisionText>
        <S.LogoVnW src={logoVnW} alt="Logo Vai na Web" />
      </S.Division>
      <S.DivisionLine />
    </S.DivisionContainer>

    <S.Container>
      <S.Content>
        <div>
          <S.TextBox>
            <S.FooterText>
              Vai na Web tem por missão democratizar o acesso às tecnologias digitais avançadas, 
              reduzir as desigualdades e promover um futuro mais próspero e sustentável.
            </S.FooterText>
          </S.TextBox>
          <S.ImgBox>
            <S.FooterImg src={logoPacto} alt="Logo Pacto Global" />
            <S.FooterImg src={logoOds} alt="Logo Objetivos de Desenvolvimento Sustentável" />
          </S.ImgBox>
          <S.ImgBox>
            <S.ImgRow src={iconRow} alt="" />
          </S.ImgBox>
        </div>
        <div>
          <S.ContentBox>
            <div>
              <S.LinkBox>
                <S.LinkText>Acesso rápido</S.LinkText>
                <S.FooterLink>
                  <Link to="/">Sobre</Link>
                </S.FooterLink>
                <S.FooterLink>
                  <Link to="/servicos">Serviços</Link>
                </S.FooterLink>
                <S.FooterLink>
                  <Link to="/cases">Cases</Link>
                </S.FooterLink>
                <S.FooterLink>
                  <Link to="/modelo">Modelo</Link>
                </S.FooterLink>
                <S.FooterLink>
                  <Link to="/carreiras">Carreiras</Link>
                </S.FooterLink>
                {/* <S.FooterLink>
										<Link>Links Úteis</Link>
									</S.FooterLink> */}
                {/* <S.FooterLink>
										<Link>Perguntas Frequentes</Link>
									</S.FooterLink> */}
                {/* <S.FooterLink>
										<Link>Media Kit</Link>
									</S.FooterLink> */}
                <S.FooterLink>
                  <Link to="/reserve-seu-squad">Contato</Link>
                </S.FooterLink>
              </S.LinkBox>
            </div>
            <S.SocialBox>
              <S.FooterText>Fique conectado!</S.FooterText>
              <S.FooterText>
                Siga nossas redes sociais 
                e fique conectado com todas as novidades.
              </S.FooterText>
              <S.IconBox>
                <a href="https://www.facebook.com/vainaweb" target="_blank" rel="noopener noreferrer">
                  <S.Icon src={logoFacebook} alt="Logo Facebook" />
                </a>
                <a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer">
                  <S.Icon iconInst src={logoInstagram} alt="Logo Instagram" />
                </a>
                <a href="https://medium.com/@olavainaweb" target="_blank" rel="noopener noreferrer">
                  <S.Icon src={logoMedium} alt="Logo Medium" />
                </a>
                <a href="https://br.linkedin.com/company/vainaweb" target="_blank" rel="noopener noreferrer">
                  <S.Icon src={logoLinkedin} alt="Logo Linkedin" />
                </a>
                <a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w" target="_blank" rel="noopener noreferrer">
                  <S.Icon src={logoYoutube} alt="Logo Youtube" />
                </a>
              </S.IconBox>
            </S.SocialBox>
          </S.ContentBox>
        </div>
        <div>
          <a href="/" rel="noopener noreferrer">
            <S.Logo src={logoVnW} alt="Logo Vai na Web" />
          </a>
        </div>
      </S.Content>

      <S.Baseboard>
        <S.Text>Site desenvolvido com ❤️ por estudantes do Vai na Web · 2021</S.Text>
      </S.Baseboard>
    </S.Container>

  </S.FooterContainer>
);

export default Footer;
