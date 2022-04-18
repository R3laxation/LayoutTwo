import React, {ReactNode} from 'react';
import styles from './style.module.scss';

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};

