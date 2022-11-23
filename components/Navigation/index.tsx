import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';

interface NavigationProps {
}

const links = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Factions', href: '/'},
    {id: 3, title: 'AntDesign', href: '/'},
];


export const Navigation: React.FC<NavigationProps> = ({}) => {
    return (
        <nav>
            <ul>
                <li>
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.id}
                        >
                            {link.title}
                        </Link>
                    ))}
                </li>
            </ul>
        </nav>
    );
};

