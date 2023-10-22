import React, { Component } from 'react';
import './AboutProject.css'

class AboutProject extends Component {
    render() {
        return (
            <section id='project' className='about' aria-label="">
                <h2 className='about__title'>О проекте</h2>
                <div className='about__article-container'>
                    <article className='about__content'>
                        <h3 className='about__content-title'>Дипломный проект включал 5 этапов</h3>
                        <p className='about__content-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article className='about__content'>
                        <h3 className='about__content-title'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about__content-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                </div>
                <div className='about__timeline'>
                    <div className='about__first-week'>
                    <p className='about__weeks-text'>1 неделя</p>
                    </div>
                    <div className='about__four-weeks'>
                    <p className='about__weeks-text about__weeks-text_white'>4 недели</p>
                    </div>
                    <p className='about__weeks-description'>Back-end</p>
                    <p className='about__weeks-description'>Front-end</p>
                </div>
            </section>
        );
    }
}

export default AboutProject;