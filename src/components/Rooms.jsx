import React, { Fragment } from "react";
import DefaultImage from "../images/room-1.jpeg";
import { Link } from "react-router-dom";

export const Rooms = props => {
  const { name, slug, images, price } = props.rooms;
  return (
    <Fragment>
      <article className="rooms">
        <div className="img-container">
          <img src={images[0] || DefaultImage} alt="feature-img" />
          <div className="price-top">
            <h6>{price}</h6>
            <p>per room</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Feature
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </Fragment>
  );
};
