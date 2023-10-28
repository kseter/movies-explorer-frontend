import React, { useState }  from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import useValidationForm from '../../utils/useValidationForm';
import { useEffect } from 'react';
import './Profile.css'
import { Link } from 'react-router-dom';

const Profile = ({ onUpdateProfileInfo, logOut, isUpdateSuccess, isError }) => {

    const currentUser = React.useContext(CurrentUserContext)
    const { values, handleChange, isInputValid, setValue, reset } = useValidationForm();
    const [isEdit, setIsEdit] = useState(false)
    
    useEffect(() => {
        reset({ username: currentUser.name, useremail: currentUser.email})
    }, [reset, currentUser])

    useEffect(() => {
        if(values.username !== currentUser.name || values.useremail !== currentUser.email) {
            setIsEdit(true)
        } else {
            setIsEdit(false)
        }
      }, [values.username, values.useremail, currentUser.name, currentUser.email]); 


    const handleRegisterSubmit =(e)=> {
        e.preventDefault();
        onUpdateProfileInfo(values.username, values.useremail);
    };


    return (
        <main className='profile'>
            <section className='profile__container'>
                <h1 className='profile__title'>Привет, {values.username || ''}!</h1>
                <form className='profile__info' onSubmit={handleRegisterSubmit}>
                    <div className='profile__info-container'>
                            <label className='profile__info-title'>Имя</label>
                            <input 
                            type='text' 
                            id='profile-name' 
                            name='username' 
                            value={values.username ? values.username : ''} 
                            onChange={handleChange}
                            pattern='[\\\-a-zA-Zа-яёА-ЯЁ ]{2,30}'
                            className={`profile__info-value ${isInputValid.username === undefined 
                                || isInputValid.username ? '' : 'profile__info-value_invalid'}`}
                            minLength={2}
                            maxLength={30}
                            ></input>
                        </div>
                    <div className='profile__info-container'>
                            <label className='profile__info-title'>E-mail</label>
                            <input 
                            type='text' 
                            id='profile-email' 
                            pattern='^[?:[a-zA-Z0-9]+\\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+'
                            name='useremail'
                            value={values.useremail ?  values.useremail : ''}
                            onChange={handleChange} 
                            className={`profile__info-value ${isInputValid.useremail === undefined 
                                || isInputValid.useremail ? '' : 'profile__info-value_invalid'}`}
                            ></input>
                    </div>
                    { isError && <span className='profile__error'>Эта почта уже занята другим пользователем.</span>}
                        <span className={`profile__update-success ${isUpdateSuccess && 'profile__update-success_active'}`}>Данные обновлены</span>
                        <button 
                className='profile__update-btn'
                disabled={!isEdit}
                >Редактировать</button> 
                </form>
                <Link href='/signin' type='button' onClick={logOut} className='profile__logout-btn'>Выйти из аккаунта</Link>
                </section>
        </main>
    );
};

export default Profile;