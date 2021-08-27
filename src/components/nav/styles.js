import styled from 'styled-components';
import { Link } from 'gatsby';

export const Menu = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  width: 100%;
  height: 6rem;
  box-shadow: ${(props) => ((props.isScrolled || !props.home) ? '0px 8px 40px #00000019' : 'none')};
  background: ${(props) => ((props.isScrolled || !props.home) ? '#fff' : 'transparent')};
  z-index: 10;

  @media (min-width: 2200px) {
    height: 8rem;
  }

  @media (max-width: 1200px) {
    padding: 0 5%;
  }

  @media (max-width: 1024px) {
    box-shadow: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7.25rem;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0.09, 0.68, 0.53);

  button {
    font-size: 1.05rem;
    
    @media (min-width: 2200px) {
      font-size: 1.6rem;
    }
  }
  
  @media (max-width: 1220px) {
    padding-left: 0;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: ${(props) => (props.isShow ? '0' : '100%')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 5rem;
    width: 100vw;
    height: 100vh;
    background: #00145D;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    height: 51vh;
  }
`;

export const NavItem = styled.li`
  width: 5.5rem;
  margin-right: 0.85rem;
  text-align: center;
  font-size: 1.04em;
  line-height: 1.813rem;
  color: ${(props) => ((props.isScrolled || !props.home) ? '#0F2B92' : '#FDE7A9')};

  a {
    padding: 0.25rem 0;
    text-decoration: none;
    color: currentColor;
    border-bottom: 0.2rem solid transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      border-bottom: 0.2rem solid ${(props) => (props.home ? 'currentColor' : 'none')};
      font-weight: bold;
    }
  }

  @media (min-width: 2200px) {
    width: 9rem;
    font-size: 1.6rem;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    width: 5.45rem;
    color: #FDE7A9;
    font-size: 1.938rem;
    line-height: 2.313rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.15rem solid currentColor;
    width: auto;
  }
`;

export const Figure = styled.figure`
  @media (max-width: 768px) {
    z-index: 1;
  }
`;

export const Logo = styled.img`
  display: flex;
  width: 5rem;

  @media (min-width: 2200px) {
    width: 9rem;
  }
`;

export const MenuOpen = styled.div`
  display: none;
  justify-content: flex-end;
  width: 2.4rem;

  &:before,
  &:after,
  & span {
    content: "";
    display: block;
    margin: 8px 0;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: #FDE7A9;
    transition: 0.5s;
  }
  &:before {
    transform: ${(props) => (props.isShow ? 'translateY(12px) rotate(-135deg) scale(1.2)' : 'translateY(0) rotate(0)')};
  }
  &:after {
    transform: ${(props) => (props.isShow ? 'translateY(-10px) rotate(135deg) scale(1.2)' : 'translateY(0) rotate(0)')};
  }
  span {
    transform: ${(props) => (props.isShow ? 'scale(0)' : '')};
  } 

  @media (max-width: 768px) {
    display: block;
    z-index: 1;
  }
`;

export const BottomList = styled.ul`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
`;

export const BottomLink = styled(Link)`
  color: #fff;
  font-size: 1.1em;
  line-height: 2.2;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
