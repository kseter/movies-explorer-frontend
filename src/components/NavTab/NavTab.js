import React from 'react';
import './NavTab.css'

const NavTab = ({name}) => {
        return (
            <div>
                <button className='navtab-btn'>{name}</button>
            </div>
        );
    }

export default NavTab;