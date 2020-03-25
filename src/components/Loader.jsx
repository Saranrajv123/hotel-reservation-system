import React, { Fragment } from 'react';
import LoaderImage from "../images/gif/loading-arrow.gif";

export const Loader = () => {
    return (
        <Fragment>
            <div className="loading">
                <h4>Room data loading...</h4>
                <img src={LoaderImage} alt="loading"/>
            </div>
        </Fragment>
    )
}
