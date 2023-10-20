import React from 'react';
import './Portfolio.css'
import pathIconPortfolio from '../../images/icon_portfolio.svg'

const Portfolio = () => {
        return (
            <section className='portfolio'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-item'><a className='portfolio__link' 
                    href='https://kseter.github.io/how-to-learn-new/' target='_blank' rel='noreferrer'>Статичный сайт <img 
                    src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></a></li>
                    <li className='portfolio__list-item'><a className='portfolio__link' 
                    href='https://kseter.github.io/russian-travel/' target='_blank' rel='noreferrer'>Адаптивный сайт <img 
                    src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></a></li>
                    <li className='portfolio__list-item'><a className='portfolio__link' 
                    href='https://kseter.github.io/mesto/' target='_blank' rel='noreferrer'>Одностраничное приложение <img 
                    src={pathIconPortfolio} alt='Иконка стрелка' 
                    className='portfolio__icon'></img></a></li>
                </ul>
            </section>
        );
    }

export default Portfolio;