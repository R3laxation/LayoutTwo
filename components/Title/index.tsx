import React, {ReactNode} from 'react';
import style from './style.module.scss';
import cl from "classnames";

interface TitleProps {
    size?: 'medium' | 'large',
    children: ReactNode,
}

export const Title: React.FC<TitleProps> = ({size='medium', children}) => {
    return(
        <h2>{children}</h2>
    )

};

