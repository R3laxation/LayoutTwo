import React, {ReactNode} from 'react';
import style from './style.module.scss';

interface TitleProps {
    children: ReactNode[],
}

export const Title: React.FC<TitleProps> = ({children}) => {
    return (
            <h2>{children}</h2>
    );
};

