import React from 'react';
import './Button.css';

interface Props {
    variant?: String,
    children: React.ReactNode,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    size?: String
}

const Button: React.FC<Props> = ({variant, children, handleClick, size}) => {
    return(
        <button
            className={`button ${variant} ${size}`}
            onClick={handleClick}>
            {children}
        </button>
    );
}


export default Button;