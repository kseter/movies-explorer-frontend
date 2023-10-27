import React from 'react';
import './Login.css';
import logoPath from '../../images/logo.svg';
import useValidationForm from '../../utils/useValidationForm';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {

    const { values, handleChange, isValid, isInputValid, errors } = useValidationForm();

    const handleRegisterSubmit =(e)=> {
        e.preventDefault();
        onLogin(values.useremail, values.userpassword);
    };

    return (
            <main className='signin'>
                <section className='signin__container'>
                    <Link to='/' className='signin__logo-link'><img src={logoPath} alt='Logo' 
                    className='signin__logo'/></Link>
                    <h1 className='signin__title'>Рады видеть!</h1>
                    <form className='signin__form' onSubmit={handleRegisterSubmit} > 
                        <label className='signin__label'>E-mail</label>
                        <input 
                        onChange={handleChange} 
                        type='email' 
                        className={`signin__input ${isInputValid.useremail === undefined 
                            || isInputValid.useremail ? '' : 'signin__input_invalid'}`}
                        id='useremail' 
                        name='useremail' 
                        pattern='^[?:[a-zA-Z0-9]+\\.]+@+[a-zA-Z0-9]+.+[A-z]'
                        value={values.useremail ?  values.useremail : ''}
                        required 
                        placeholder='Email'></input>
                        <span className='signin__error'>{errors.useremail}
                        { isInputValid.useremail === undefined || isInputValid.useremail ? '' : ' Email должен быть в формате ivanivanov@mail.com'}</span>
                        <label className='signin__label'>Пароль</label>
                        <input 
                        onChange={handleChange}
                        type='password' 
                        className={`signin__input ${isInputValid.userpassword === undefined 
                            || isInputValid.userpassword ? '' : 'signin__input_invalid'}`}
                        id='userpassword' 
                        name='userpassword' 
                        value={values.userpassword ?  values.userpassword : ''} 
                        required 
                        minLength={5}
                        placeholder='Пароль'
                        ></input>
                        <span className='signin__error'>{errors.userpassword}</span>
                        <button 
                        type='submit' 
                        className={`signin__submit-btn ${isValid ? '' : 'signin__submit-btn_disabled'}`}
                        >Войти</button>
                    </form>
                    <div className='signin__paragraph-container'>
                        <p className='signin__paragraph'>Еще не зарегистрированы?</p> 
                        <Link to='/signup' className='signin__link'>&nbsp;Регистрация</Link>
                    </div>
                </section>
        </main>
    );
};

export default Login;