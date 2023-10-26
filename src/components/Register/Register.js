import React from 'react';
import './Register.css';
import logoPath from '../../images/logo.svg';
import useValidationForm from '../../utils/useValidationForm';

const Register = ({ onRegister }) => {

    const { values, handleChange, isValid, isInputValid, errors } = useValidationForm();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        onRegister(values.username, values.useremail, values.userpassword);
    };


    return (
        <main className='signup'>
            <section className='signup__container'>
                <a href='/' className='signup__logo-link'><img src={logoPath} alt='Logo' 
                className='signup__logo'/></a>
                <h1 className='signup__title'>Добро пожаловать!</h1>
                <form className='signup__form' name='signup' onSubmit={handleRegisterSubmit}> 
                    <label className='signup__label'>Имя</label>
                    <input 
                    onChange={handleChange} 
                    type='text' 
                    className={`signup__input ${isInputValid.username === undefined 
                        || isInputValid.username ? '' : 'signup__input_invalid'}`} 
                    id='username' 
                    name='username' 
                    value={values.username ? values.username : ''} 
                    placeholder='Имя' 
                    required={true}
                    minLength={2}
                    maxLength={30}
                    ></input>
                    <span className='signup__error'>{errors.username}</span>
                    <label className='signup__label'>E-mail</label>
                    <input 
                    onChange={handleChange}  
                    type='email' 
                    name='useremail' 
                    className={`signup__input ${isInputValid.useremail === undefined 
                        || isInputValid.useremail ? '' : 'signup__input_invalid'}`} 
                    id='useremail' 
                    value={values.useremail ? values.useremail : ''} 
                    required={true}
                    placeholder='Email'></input>
                    <span className='signup__error'>{errors.useremail}</span>
                    <label className='signup__label'>Пароль</label>
                    <input 
                    onChange={handleChange}  
                    type='password' 
                    className='signup__input' 
                    id='userpassword' 
                    name='userpassword' 
                    value={values.userpassword ? values.userpassword : ''} 
                    required 
                    placeholder='Пароль'
                    minLength={2}
                    maxLength={30}
                    ></input>
                     <span className='signup__error'>{errors.userpassword}</span>
                    <button type='submit'
                     className={`signup__submit-btn ${isValid ? '' : 'signup__submit-btn_disabled'}`}
                     >Зарегистрироваться</button>
                </form>
                <div className='signup__paragraph-container'>
                    <p className='signup__paragraph'>Уже зарегистрированы?</p> 
                    <a href='/signin' className='signup__link'>&nbsp;Войти</a>
                </div>
            </section>
        </main>
    );
};

export default Register;