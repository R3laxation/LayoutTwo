import React from 'react';
import styles from './style.module.scss';
import cl from "classnames";

interface SocialNetworksProps {
}

const socialNetworks = [
    {id: 1, title: 'Discord', className: 'Discord', link: 'https://discord.com/'},
    {id: 2, title: 'Twitter', className: 'Twitter', link: 'https://twitter.com/'},
    {id: 3, title: 'AndDesign', className: 'AndDesign', link: 'https://ant.design/'},
];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
    return (
        <ul className={styles.socialNetworks}>
            {socialNetworks.map(socialNetwork => (
                <li key={socialNetwork.id} className={styles.socialNetworksItem}>
                    <a
                        href={socialNetwork.link}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={cl(styles.socialNetworksItemLink, styles[`socialNetworks${socialNetwork.className}`])}
                    >{socialNetwork.title}</a>
                </li>
            ))};
        </ul>
    );
};

