import React, { Component } from 'react';
import Portfolio from '../Portfolio/Portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css'
import avatarPath from '../../images/avatar.jpg'

class AboutMe extends Component {
    render() {
        return (
            <section className='about-me'>
                <SectionTitle 
                title='Студент'/>
                <div className='about-me__container'>
                    <article className='about-content'>
                        <h3 className='about-content-title'>Виталий</h3>
                        <p className='about-content-description'>Фронтенд-разработчик, 30 лет</p>
                        <p className='about-content-text'>Я родился и живу в Саратове,
                        закончил факультет экономики СГУ. 
                        У меня есть жена и дочь. Я люблю слушать музыку, 
                        а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб-разработке, 
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a href='https://github.com/kseter' className='about-content-link'>GitHub</a>
                    </article>
                    <img src={avatarPath} alt='Фото' className='about-me__pic'></img>
                </div>
                <Portfolio />
            </section>
        );
    }
}

export default AboutMe;