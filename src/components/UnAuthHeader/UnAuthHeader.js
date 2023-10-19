import React from 'react';
import logoPath from '../../images/logo.svg';
import './UnAuthHeader.css';

const UnAuthHeader = () => {
    return (
        <div className='unauth-header'>
            <img src={logoPath} alt='Logo' className='unauth-header__logo'/>
            <div className='unauth-header__btn-container'>
                <a className='unauth-header__reg-btn' href='/signup'>Регистрация</a>
                <a href='/signin' className='unauth-header__login-btn'>Войти</a>
            </div>
        </div>
    );
};

export default UnAuthHeader;