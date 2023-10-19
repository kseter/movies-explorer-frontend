import React from 'react';
import './Profile.css'

const Profile = ({name, email}) => {
    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {name}!</h1>
            <div className='profile__info'>
                <div className='profile__info-container'>
                        <p className='profile__info-title'>Имя</p>
                        <p className='profile__info-value'>{name}</p>
                    </div>
                <div className='profile__info-container'>
                        <p className='profile__info-title'>E-mail</p>
                        <p className='profile__info-value'>{email}</p>
                </div>
            </div>
            <button type='button' className='profile__update-btn'>Редактировать</button>
            <a href='/signin' type='button' className='profile__logout-btn'>Выйти из аккаунта</a>
        </main>
    );
};

export default Profile;