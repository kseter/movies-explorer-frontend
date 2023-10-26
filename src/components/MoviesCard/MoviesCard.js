import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css'

const MoviesCard = ({movie, onDelete, onSavedBtn, savedMovies, onAdd}) => {
    const { pathname } = useLocation()
    const [isMovieAdded, setIsMovieAdded] = useState(false)

    useEffect(() => {
        if(pathname === '/movies') {
            setIsMovieAdded(savedMovies.some(m => movie.id === m.movieId))
        }
    }, [pathname, movie.id, setIsMovieAdded, savedMovies])

    function handleSaveBtnClick() {
        if(savedMovies.some(m => movie.id === m.movieId)) {
            setIsMovieAdded(true);
            onAdd(movie)
        } else {
            setIsMovieAdded(false);
            onAdd(movie)
        }
    }

    function handleTimeConversion(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);
        return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
    }

        return (
            <li className='card'>
              <div className='card__container'>
                    <div className='card__pic-container'>
                    {pathname === '/movies' ? 
                    <div>
                    <button type='button' 
                    onClick={handleSaveBtnClick} 
                    className={`card__save-btn ${isMovieAdded && 'card__save-btn_inactive'}`}>Сохранить</button>
                    <button type='button' 
                    onClick={handleSaveBtnClick} 
                    className={`card__saved-btn ${isMovieAdded && 'card__save-btn_active'}`}>
                        <div className='card__icon-saved'></div>
                        </button>
                    </div>
                     :                  
                     <button type='button' onClick={() => onDelete(movie._id)} className='card__delete-btn'>
                     <div className='card__icon-delete'></div></button>}
                    <img 
                    src={pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` 
                    : movie.image} 
                    alt='Изображение фильма' 
                    className='card__pic'></img>
                    </div>
            <div className='card__container-text'>
                <p className='card__name'>{movie.nameRU}</p>
                <div className='card__info-container'>
                    <p className='card__duration'>{handleTimeConversion(movie.duration)}</p>
                </div>
            </div>
                </div>
        </li>




        //     <li className='card'>
        //         {!isSaved && <div className='card__container'>
        //             <div className='card__pic-container'>
        //             <button type='button' onClick={handleSaveBtnClick} className={`card__save-btn ${isMovieAdded && 'card__save-btn_inactive'} `}>Сохранить</button>
        //             <img src={`https://api.nomoreparties.co${movie.image.url}`} alt='Изображение фильма' className='card__pic'></img>
        //             <button type='button' onClick={handleSaveBtnClick} className={`card__saved-btn ${isMovieAdded && 'card__save-btn_active'}`}>
        //             <div className='card__icon-saved'></div></button>
        //             {deleteBtn && <button type='button' className='card__delete-btn'>
        //             <div className='card__icon-delete'></div></button>}
        //     </div>
        //     <div className='card__container-text'>
        //         <p className='card__name'>{movie.nameRU}</p>
        //         <div className='card__info-container'>
        //             <p className='card__duration'>{movie.duration}</p>
        //         </div>
        //     </div>
        //         </div>}
        //         {isSaved && <div className='card__container_saved'>
        //         <div className='card__pic-container'>
        //         <img src={savedMovies.image} alt='Изображение фильма' className='card__pic'></img>
        //         <button type='button' className='card__delete-btn'>
        //         <div className='card__icon-delete'></div></button>
        //     </div>
        //     <div className='card__container-text'>
        //         <p className='card__name'>{savedMovies.nameRU}</p>
        //         <div className='card__info-container'>
        //             <p className='card__duration'>{savedMovies.duration}</p>
        //         </div>
        //     </div>
        //         </div>}
        // </li>
        
        );
};

export default MoviesCard;