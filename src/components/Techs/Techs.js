import React from 'react';
import './Techs.css'


const Techs = () => {
        return (
            <section className='techs'>
                <div className='techs__section-container'>
                <h2 className='techs__section-title'>Технологии</h2>
                <article className='techs__content'>
                <h3 className='techs__content-title'>7 технологий</h3>
                <p className='techs__content-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__content-tab-container'>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>HTML</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>CSS</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>JS</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>React</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>Git</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>Express.js</p>
                </div>
                <div className='techs__content-tab'>
                    <p className='techs__content-tab-text'>mongoDB</p>
                </div>
                </div>
                </article>
                </div>
            </section>
        );
    }

export default Techs;