import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

const Main = () => {
        return (
            <div>
                <main className='main'>
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                </main>
                <Footer />
            </div>
        );
    }

export default Main;