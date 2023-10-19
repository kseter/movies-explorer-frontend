import React from 'react';
import './Register.css';
import logoPath from '../../images/logo.svg';

const Register = () => {
    return (
        <main className='signup'>
            <img src={logoPath} alt='Лого' className='signup__logo'/>
            <h1 className='signup__title'>Добро пожаловать!</h1>
            <form className='signup__form' name='signup'> 
                <label className='signup__label'>Имя</label>
                <input type='text' className='signup__input' id='username' name='username' value='' 
                required placeholder='Имя' minLength='2' maxLength='32' readOnly></input>
                <label className='signup__label'>E-mail</label>
                <input type='email' className='signup__input'id='useremail' name='useremail' value='' 
                required placeholder='Email' readOnly></input>
                <label className='signup__label'>Пароль</label>
                <input type='password' className='signup__input' id='userpassword' name='userpassword' 
                value='' required placeholder='Пароль' minLength='2' maxLength='32' readOnly></input>
                <button type='submit' className='signup__submit-btn'>Зарегистрироваться</button>
            </form>
            <div className='signup__paragraph-container'>
                <p className='signup__paragraph'>Уже зарегистрированы?</p> 
                <a href='/signin' className='signup__link'>&nbsp;Войти</a>
            </div>
        </main>
    );
};

export default Register;