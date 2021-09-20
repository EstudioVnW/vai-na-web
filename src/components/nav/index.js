/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import Button from '../button/Button';

import * as S from './styles';

// images
import logo from '../../images/icons/logo-VNW.svg';

const Menu = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  let widthViewPort;

  if (typeof document !== 'undefined') {
    widthViewPort = document.documentElement.clientWidth;
  }

  const handleMenu = () => {
    setNavMobile(!navMobile);
  };

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);

    if (window.pageYOffset > 0) {
      if (scrollPosition > window.pageYOffset) {
        setIsScrolled('up');
      } else {
        setIsScrolled('down');
      }
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const isDesktop = widthViewPort > 769;

  const redirectToContact = () => {
    navigate('/reserve-seu-squad/');
  };

  const { home } = props;

  return (
    <S.Menu
      home={home}
      isScrolled={isScrolled}
      hiddenMenu={isScrolled === 'down'}
    >
      <S.Figure>
        <Link to="/">
          <S.Logo src={logo} alt="Logotipo" />
        </Link>
      </S.Figure>
      <S.MenuOpen
        isShow={navMobile}
        onClick={handleMenu}
      >
        <span />
      </S.MenuOpen>
      <S.Wrap isShow={navMobile}>

        <S.NavList>
          <S.NavItem
            home={home}
            isScrolled={isScrolled}
          >
            <Link
              activeStyle={{ fontWeight: '700', borderBottom: '0.2rem solid currentColor' }}
              to="/servicos"
            >
              Serviços
            </Link>
          </S.NavItem>
          <S.NavItem
            home={home}
            isScrolled={isScrolled}
          >
            <Link
              activeStyle={{ fontWeight: '700', borderBottom: '0.2rem solid currentColor' }}
              to="/cases"
            >
              Cases
            </Link>
          </S.NavItem>
          <S.NavItem
            home={home}
            isScrolled={isScrolled}
          >
            <Link
              activeStyle={{ fontWeight: '700', borderBottom: '0.2rem solid currentColor' }}
              to="/modelo"
            >
              Modelo
            </Link>
          </S.NavItem>
          <S.NavItem
            home={home}
            isScrolled={isScrolled}
          >
            <Link
              activeStyle={{ fontWeight: '700', borderBottom: '0.2rem solid currentColor' }}
              to="/carreiras"
            >
              Carreiras
            </Link>
          </S.NavItem>
          <S.NavItem
            home={home}
            isScrolled={isScrolled}
          >
            <Link
              activeStyle={{ fontWeight: '700', borderBottom: '0.2rem solid currentColor' }}
              to="/blog"
            >
              Blog
            </Link>
          </S.NavItem>
        </S.NavList>

        <S.BottomList isShow={navMobile}>
          {/* <S.BottomLink to={'/#'} >Media Kit</S.BottomLink>
          <S.BottomLink to={'/#'} >Perguntas Frequentes</S.BottomLink> */}
          <S.BottomLink to="/reserve-seu-squad">Contato</S.BottomLink>
        </S.BottomList>

        {isDesktop && (
          <Button
            width="14rem"
            border={home ? '#FFAC2D' : '#0e2762'}
            color={home ? '#FFAC2D' : '#fbd4b2'}
            background="#0F2B92"
            colorHover="#FFF"
            funcAction={redirectToContact}
          >
            Reserve seu Squad!
          </Button>
        )}
      </S.Wrap>
    </S.Menu>
  );
};

export default Menu;
