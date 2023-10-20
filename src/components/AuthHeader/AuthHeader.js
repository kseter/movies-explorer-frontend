import React from 'react';
import logoPath from '../../images/logo.svg';
import './AuthHeader.css';

const AuthHeader = () => {
    return (
        <div className='auth-header'>
            <img src={logoPath} alt='Logo' className='auth-header__logo'/>
                <div className='auth-header__links'>
                    <a href='/movies' className='auth-header__link'>Фильмы</a>
                    <a href='/saved-movies' className='auth-header__link'>Сохраненные фильмы</a>
                </div>
                <a href='/profile' className='auth-header__account-btn'>Аккаунт</a>
                <div className='auth-header__menu'>
                    <input className='auth-header__menu-input' id="menu" type="checkbox"></input>
                    <label className="auth-header__icon" htmlFor="menu">
                        <span className='auth-header__icon-span'></span>
                        <span className='auth-header__icon-span'></span>
                        <span className='auth-header__icon-span'></span>
                    </label>
                    <div className='auth-header__menu-overlay'></div>
                        <div className='auth-header__menu-pad'>
                        <ul className='auth-header__menu-list'>
                            <li><a className='auth-header__menu-list-item' href="/">Главная</a></li>
                            <li><a className='auth-header__menu-list-item auth-header__menu-list-item_current' href="/movies">Фильмы</a></li>
                            <li><a className='auth-header__menu-list-item' href="/saved-movies">Сохраненные фильмы</a></li>
                            <li><a href="/profile"className='auth-header__menu-account-btn'>Аккаунт</a></li>
                        </ul>
                        </div>
                </div>
        </div>
    );
};

export default AuthHeader;