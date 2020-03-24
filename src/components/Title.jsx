import React, { Fragment, useState } from 'react';

export const Title = ({ title }) => {
    return (
        <Fragment>
            <div className="section-title">
                <h4>{title}</h4>
            </div>
        </Fragment>
    )
}
