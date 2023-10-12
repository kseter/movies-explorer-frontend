import React from 'react';
import logoPath from '../../images/logo.svg';
import './UnAuthHeader.css';

const UnAuthHeader = () => {
    return (
        <div className='unauth-header'>
            <img src={logoPath} alt='Logo' className='unauth-header__logo'/>
            <div className='unauth-header__btn-container'>
                <button className='unauth-header__reg-btn'>Регистрация</button>
                <button className='unauth-header__login-btn'>Войти</button>
            </div>
        </div>
    );
};

export default UnAuthHeader;