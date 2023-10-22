import React from 'react';
import './Techs.css'


const Techs = () => {
        return (
            <section className='techs' id='techs'>
                <div className='techs__section-container'>
                    <h2 className='techs__section-title'>Технологии</h2>
                    <article className='techs__content'>
                    <h3 className='techs__content-title'>7 технологий</h3>
                    <p className='techs__content-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='techs__content-tab-container'>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>HTML</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>CSS</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>JS</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>React</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>Git</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>Express.js</p>
                        </li>
                        <li className='techs__content-tab'>
                            <p className='techs__content-tab-text'>mongoDB</p>
                        </li>
                    </ul>
                    </article>
                </div>
            </section>
        );
    }

export default Techs;