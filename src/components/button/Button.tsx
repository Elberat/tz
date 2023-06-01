import React from 'react';
import { FC, ButtonHTMLAttributes } from 'react';
import './Button.css';

export enum colorEnum {
    DANGER = 'red',
    PRIMARY = 'blue',
    DEFAULT = 'white',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: colorEnum;
}

const Button: FC<ButtonProps> = props => {
    const { color, children, ...otherProps } = props;
    return (
        <button
            className='button'
            style={{
                backgroundColor: color,
                color: color === 'white' ? 'black' : 'white',
                border: color === 'white' ? '1px solid black' : 'none',
            }}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
