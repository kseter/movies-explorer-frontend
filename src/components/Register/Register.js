import React from 'react';
import './Register.css';
import logoPath from '../../images/logo.svg';

const Register = () => {
    return (
        <section className='signup'>
            <img src={logoPath} alt='Лого' className='signup__logo'/>
            <h2 className='signup__title'>Добро пожаловать!</h2>
            <form className='signup__form' name='signup'> 
                <label className='signup__label'>Имя</label>
                <input type='text' className='signup__input' id='username' name='username' value='' ></input>
                <label className='signup__label'>E-mail</label>
                <input type='email' className='signup__input'id='useremail' name='useremail' value=''></input>
                <label className='signup__label'>Пароль</label>
                <input type='password' className='signup__input' id='userpassword' name='userpassword' value=''></input>
                <button type='submit' className='signup__submit-btn'>Зарегистрироваться</button>
            </form>
            <div className='signup__paragraph-container'>
                <p className='signup__paragraph'>Уже зарегистрированы?</p> 
                <a href='/signin' className='signup__link'>&nbsp;Войти</a>
            </div>
        </section>
    );
};

export default Register;