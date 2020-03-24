import React, { Fragment } from 'react';

export const Hero = ({ children, hero="defaultHero" }) => {
    return (
        <Fragment>
            <header className={hero}>
            {children}
            </header>
        </Fragment>
    )
}
