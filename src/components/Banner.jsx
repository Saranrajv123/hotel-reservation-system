import React, { Fragment } from 'react'

export const Banner = ({ children, title, subTitle }) => {
    return (
        <Fragment>
            <div className="banner">
                <h1>{title}</h1>
                <div />
                <p>{subTitle}</p>
                {children}
            </div>
        </Fragment>
    )
}
