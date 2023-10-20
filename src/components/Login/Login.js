import React from 'react';
import './Login.css';
import logoPath from '../../images/logo.svg';

const Login = () => {
    return (
            <main className='signin'>
                <section className='signin__container'>
                    <a href='/' className='signin__logo-link'><img src={logoPath} alt='Logo' 
                    className='signin__logo'/></a>
                    <h1 className='signin__title'>Рады видеть!</h1>
                    <form className='signin__form'> 
                        <label className='signin__label' for='useremail'>E-mail</label>
                        <input type='email' className='signin__input'id='useremail' name='useremail' value='' required placeholder='Email'></input>
                        <label className='signin__label' for='userpassword' minLength='2' maxLength='32' readOnly>Пароль</label>
                        <input type='password' className='signin__input' id='userpassword' name='userpassword' value='' 
                        required placeholder='Пароль' minLength='2' maxLength='32' readOnly></input>
                        <button type='submit' className='signin__submit-btn'>Войти</button>
                    </form>
                    <div className='signin__paragraph-container'>
                        <p className='signin__paragraph'>Еще не зарегистрированы?</p> 
                        <a href='/signup' className='signin__link'>&nbsp;Регистрация</a>
                    </div>
                </section>
        </main>
    );
};

export default Login;