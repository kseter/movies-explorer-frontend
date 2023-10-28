import React, { Component } from 'react';
import Portfolio from '../Portfolio/Portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from "react-router-dom";
import './AboutMe.css'
import avatarPath from '../../images/avatar.jpg'

class AboutMe extends Component {
    render() {
        return (
            <section className='about-me' id='about-me'>
                <SectionTitle 
                title='Студент'/>
                <div className='about-me__container'>
                    <article className='about-me__content'>
                        <h3 className='about-me__content-title'>Виталий</h3>
                        <p className='about-me__content-description'>Фронтенд-разработчик, 30 лет</p>
                        <p className='about-me__content-text'>Я родился и живу в Саратове,
                        закончил факультет экономики СГУ. 
                        У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, 
                        а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб-разработке, 
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <Link to='https://github.com/kseter' className='about-me__content-link' target='_blank' rel='noreferrer'>Github</Link>
                    </article>
                    <img src={avatarPath} alt='Фото' className='about-me__pic'></img>
                </div>
                <Portfolio />
            </section>
        );
    }
}

export default AboutMe;