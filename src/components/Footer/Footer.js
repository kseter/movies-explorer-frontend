import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
        return (
            <footer className='footer'>
                <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                <p className='footer__year'>© 2020</p>
                <div className='footer__links'>
                <Link to='https://practicum.yandex.ru/' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</Link>
                <Link to='https://github.com/kseter' className='footer__link'  target='_blank' rel='noreferrer'>Github</Link>
                </div>
                </div>
            </footer>
        );
    }

export default Footer;