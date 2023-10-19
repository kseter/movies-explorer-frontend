import React from 'react';
import './NavTab.css'

const NavTab = ({name, link}) => {
        return (
            <div className='navtab'>
                <a href={link} className='navtab-btn'>{name}</a>
            </div>
        );
    }

export default NavTab;