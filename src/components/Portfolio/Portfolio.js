import React from 'react';
import './Portfolio.css'
import pathIconPortfolio from '../../images/icon_portfolio.svg'

const Portfolio = () => {
        return (
            <section className='portfolio'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-item'>Статичный сайт <img src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></li>
                    <li className='portfolio__list-item'>Адаптивный сайт <img src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></li>
                    <li className='portfolio__list-item'>Одностраничное приложение <img src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></li>
                </ul>
            </section>
        );
    }

export default Portfolio;