import React  from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import useValidationForm from '../../utils/useValidationForm';
import { useEffect } from 'react';
import './Profile.css'

const Profile = ({ onUpdateProfileInfo, logOut, isUpdateSuccess, setIsEdit }) => {

    const currentUser = React.useContext(CurrentUserContext)
    const { values, handleChange, isInputValid, setValue } = useValidationForm();
    
    useEffect(() => {
        setValue('username', currentUser.name)
        setValue('useremail', currentUser.email)
      }, [currentUser, setValue]); 


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
                            name='useremail'
                            value={values.useremail ?  values.useremail : ''}
                            onChange={handleChange} 
                            className={`profile__info-value ${isInputValid.useremail === undefined 
                                || isInputValid.useremail ? '' : 'profile__info-value_invalid'}`}
                            ></input>
                    </div>
                        <span className={`profile__update-success ${isUpdateSuccess && 'profile__update-success_active'}`}>Данные обновлены</span>
                        <button 
                className='profile__update-btn'
                >Редактировать</button> 
                </form>
                <a href='/signin' type='button' onClick={logOut} className='profile__logout-btn'>Выйти из аккаунта</a>
                </section>
        </main>
    );
};

export default Profile;