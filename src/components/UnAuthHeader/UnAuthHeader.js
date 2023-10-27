import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './UnAuthHeader.css';

const UnAuthHeader = () => {
    return (
        <div className='unauth-header'>
            <img src={logoPath} alt='Logo' className='unauth-header__logo'/>
            <div className='unauth-header__btn-container'>
                <Link className='unauth-header__reg-btn' to='/signup'>Регистрация</Link>
                <Link to='/signin' className='unauth-header__login-btn'>Войти</Link>
            </div>
        </div>
    );
};

export default UnAuthHeader;