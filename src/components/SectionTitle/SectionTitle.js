import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({title}) => {
    return (
        <div>
            <h2 className='section-title'>{title}</h2>
        </div>
    );
};

export default SectionTitle;