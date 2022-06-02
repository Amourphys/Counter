import React from 'react';
import './Button.css'

type ButtonPropsType = {
    title: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    // onSetClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled: boolean
    className: string
}

const Button = (props: ButtonPropsType) => {
    const { title, onClick, disabled, className } = props
    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;