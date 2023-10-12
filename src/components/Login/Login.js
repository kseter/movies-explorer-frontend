import React from 'react';
import './Login.css';
import logoPath from '../../images/logo.svg';

const Login = () => {
    return (
            <section className='signin'>
                <img src={logoPath} alt='Лого' className='signin__logo'/>
                <h2 className='signin__title'>Рады видеть!</h2>
                <form className='signin__form'> 
                    <label className='signin__label' for='useremail'>E-mail</label>
                    <input type='email' className='signin__input'id='useremail' name='useremail' value=''></input>
                    <label className='signin__label' for='userpassword'>Пароль</label>
                    <input type='password' className='signin__input' id='userpassword' name='userpassword' value=''></input>
                    <button type='submit' className='signin__submit-btn'>Войти</button>
                </form>
                <div className='signin__paragraph-container'>
                    <p className='signin__paragraph'>Еще не зарегистрированы?</p> 
                    <a href='/signin' className='signin__link'>&nbsp;Регистрация</a>
                </div>
        </section>
    );
};

export default Login;