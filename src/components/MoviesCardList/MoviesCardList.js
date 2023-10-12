import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
import pathDesign from '../../images/33design.jpg'
import pathHundred from '../../images/100yearsdesign.jpg'
import pathBanksy from '../../images/Banksy.jpg'
import pathBooksellers from '../../images/booksellers.jpg'
import pathExplotion from '../../images/realityexplotion.jpg'
import pathFreedomrun from '../../images/runfreedom.jpg'
import pathGermany from '../../images/germanynight.jpg'
import pathGimeDanger from '../../images/gimmedanger.jpg'
import pathJenis from '../../images/jenis.jpg'
import pathJump from '../../images/jump.jpg'
import pathHarvi from '../../images/Harvi.jpg'
import pathWaves from '../../images/waves.jpg'

const MoviesCardList = ({isSaved}) => {
    if (!isSaved) {
        return (
            <section className='movies'>
                <MoviesCard 
                name='33 слова о дизайне'
                link={pathDesign}
                time='1ч 17м'
                />
                <MoviesCard 
                name='Киноальманах «100 лет дизайна»'
                link={pathHundred}
                time='1ч 17м'
                savedBtnState={true}
                isSaved={true}/>
                <MoviesCard 
                name='В погоне за Бенкси'
                link={pathBanksy}
                time='1ч 17м'/>
                <MoviesCard 
                name='Баския: Взрыв реальности'
                link={pathExplotion}
                time='1ч 17м'/>
                <MoviesCard 
                name='Бег это свобода'
                link={pathFreedomrun}
                time='1ч 17м'/>
                <MoviesCard 
                name='Книготорговцы'
                link={pathBooksellers}
                time='1ч 17м'
                savedBtnState={true}
                isSaved={true}/>
                <MoviesCard 
                name='Когда я думаю о Германии ночью'
                link={pathGermany}
                time='1ч 17м'/>
                <MoviesCard 
                name='Gimme Danger: История Игги и The Stooges'
                link={pathGimeDanger}
                time='1ч 17м'/>
                <MoviesCard 
                name='Дженис: Маленькая девочка грустит'
                link={pathJenis}
                time='1ч 17м'/>
                <MoviesCard 
                name='Соберись перед прыжком'
                link={pathJump}
                time='1ч 17м'/>
                <MoviesCard 
                name='Пи Джей Харви: A dog called money'
                link={pathHarvi}
                time='1ч 17м'/>
                <MoviesCard 
                name='По волнам: Искусство звука в кино'
                link={pathWaves}
                time='1ч 17м'/>
            </section>
        );
    } else {
        return (
            <section className='movies'>
                <MoviesCard 
                name='33 слова о дизайне'
                link={pathDesign}
                time='1ч 17м'
                deleteBtn={true}
                isSaved={true}
                />
                <MoviesCard 
                name='Киноальманах «100 лет дизайна»'
                link={pathHundred}
                time='1ч 17м'
                deleteBtn={true}
                isSaved={true}/>
                <MoviesCard 
                name='В погоне за Бенкси'
                link={pathBanksy}
                time='1ч 17м'
                deleteBtn={true}
                isSaved={true}/>
            </section>
        );
    }
};

export default MoviesCardList;