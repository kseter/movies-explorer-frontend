import React from 'react';
import './MoviesCard.css'

const MoviesCard = ({name, link, time, savedBtnState, deleteBtn, isSaved}) => {
    if(!isSaved) {
        return (
            <div className='card'>
                <div className='card__pic-container'>
                    <button type='button' className='card__save-btn'>Сохранить</button>
                    <img src={link} alt='Изображение фильма' className='card__pic'></img>
                    {savedBtnState && <button type='button' className='card__saved-btn'>
                    <div className='card__icon-saved'></div></button>}
                    {deleteBtn && <button type='button' className='card__delete-btn'>
                    <div className='card__icon-delete'></div></button>}
                </div>
                <div className='card__container'>
                    <p className='card__name'>{name}</p>
                    <div className='card__info-container'>
                        <p className='card__duration'>{time}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='card'>
                <div className='card__pic-container'>
                    <img src={link} alt='Изображение фильма' className='card__pic'></img>
                    {savedBtnState && <button type='button' className='card__saved-btn'>
                    <div className='card__icon-saved'></div></button>}
                    {deleteBtn && <button type='button' className='card__delete-btn'>
                    <div className='card__icon-delete'></div></button>}
                </div>
                <div className='card__container'>
                    <p className='card__name'>{name}</p>
                    <div className='card__info-container'>
                        <p className='card__duration'>{time}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default MoviesCard;