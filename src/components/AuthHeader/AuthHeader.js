import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './AuthHeader.css';

const AuthHeader = () => {
    return (
        <div className='auth-header'>
            <a href='/' className='auth-header__logo-link'><img src={logoPath} alt='Logo' 
                className='auth-header__logo'/></a>
                <div className='auth-header__links'>
                   <Link to='/movies' className='auth-header__link'>Фильмы</Link>
                   <Link to='/saved-movies' className='auth-header__link'>Сохраненные фильмы</Link>
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
                        <li><Link to='/' className='auth-header__menu-list-item' >Главная</Link></li>
                        <li><Link to='/movies' className='auth-header__menu-list-item auth-header__menu-list-item_current'>Фильмы</Link></li>
                        <li><Link to='/saved-movies"' className='auth-header__menu-account-btn'>Сохраненные фильмы</Link></li>
                        <li><Link to='/profile' className='auth-header__menu-list-item' >Аккаунт</Link></li>
                        </ul>
                        </div>
                </div>
        </div>
    );
};

export default AuthHeader;