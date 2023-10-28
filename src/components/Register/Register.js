import React from 'react';
import './Register.css';
import logoPath from '../../images/logo.svg';
import useValidationForm from '../../utils/useValidationForm';
import { Link } from 'react-router-dom';

const Register = ({ onRegister, isError }) => {
    const { values, handleChange, isValid, isInputValid, errors } = useValidationForm();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        onRegister(values.username, values.useremail, values.userpassword);
    };

    return (
        <main className='signup'>
            <section className='signup__container'>
                <Link to='/' className='signup__logo-link'><img src={logoPath} alt='Logo' 
                className='signup__logo'/></Link>
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
                    pattern='[\\\-a-zA-Zа-яёА-ЯЁ ]{2,30}'
                    value={values.username ? values.username : ''} 
                    placeholder='Иван' 
                    required={true}
                    minLength={2}
                    maxLength={30}
                    ></input>
                    <span className='signup__error'>{errors.username} 
                    {isInputValid.username === undefined || isInputValid.username ? '' : ' Имя может содержать только буквы(от 2-30), пробел или дефис.'}</span>
                    <label className='signup__label'>E-mail</label>
                    <input 
                    onChange={handleChange}  
                    type='email' 
                    name='useremail'
                    pattern='^[?:[a-zA-Z0-9]+\\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+'
                    className={`signup__input ${isInputValid.useremail === undefined 
                        || isInputValid.useremail ? '' : 'signup__input_invalid'}`} 
                    id='useremail' 
                    value={values.useremail ? values.useremail : ''} 
                    required={true}
                    placeholder='ivanivanov@mail.com'></input>
                    <span className='signup__error'>{errors.useremail} 
                    {isInputValid.useremail === undefined || isInputValid.useremail ? '' : ' Email должен быть в формате ivanivanov@mail.com'}</span>
                    { isError && <span className='signup__error'>Эта почта уже занята другим пользователем.</span>}
                    <label className='signup__label'>Пароль</label>
                    <input 
                    onChange={handleChange}  
                    type='password' 
                    className='signup__input' 
                    id='userpassword' 
                    name='userpassword' 
                    value={values.userpassword ? values.userpassword : ''} 
                    required 
                    minLength={5}
                    placeholder='Пароль'
                    ></input>
                     <span className='signup__error'>{errors.userpassword}</span>
                    <button type='submit'
                     className={`signup__submit-btn ${isValid ? '' : 'signup__submit-btn_disabled'}`}
                     >Зарегистрироваться</button>
                </form>
                <div className='signup__paragraph-container'>
                    <p className='signup__paragraph'>Уже зарегистрированы?</p> 
                    <Link to='/signin' className='signup__link'>&nbsp;Войти</Link>
                </div>
            </section>
        </main>
    );
};

export default Register;