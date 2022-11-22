import React, {ReactNode} from 'react';
import style from './style.module.scss';

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

