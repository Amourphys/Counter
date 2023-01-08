import React, { useState } from 'react';
import './Display.css'

type DisplayPropsType = {
    title?: number | string
    className?: string
}

const Display = (props: DisplayPropsType) => {

    const { title, className } = props

    return (
        <div className='default-display'>
            <h1 className={className}>{title}</h1>
        </div>
    );
};

export default Display;