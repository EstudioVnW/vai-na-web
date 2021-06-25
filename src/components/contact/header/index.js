import React from 'react';

import * as S from './styles';

//Imgs
import HImg from '../../../images/images/headerImgContact.png';
import HImgMobile from '../../../images/images/headerImgMobileContact.png';

const Header = () => {
    return (
        <S.Hheader>
            <S.HeaderContainer>
                <S.HeaderImg src={HImg} alt="Garoto usando um Óculos VR"/>
                <S.HeaderImgMobile src={HImgMobile} alt="Garoto usando um Óculos VR"/>
            </S.HeaderContainer>
        </S.Hheader>        
    );
}

export default Header;
