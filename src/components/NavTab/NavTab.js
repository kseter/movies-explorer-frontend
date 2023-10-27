import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css'

const NavTab = ({name, link}) => {
        return (
            <div className='navtab'>
                <Link to={link} className='navtab-btn'>{name}</Link>
            </div>
        );
    }

export default NavTab;