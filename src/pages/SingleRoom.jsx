import React, { useContext, Fragment } from "react";
import RoomContext from "../Context";
import { Banner } from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import defaultImgae from "../images/defaultBcg.jpeg";

export const SingleRoom = props => {
  console.log("props :", props);
  const { getSingleRoomData } = useContext(RoomContext);
  let singleRoomData = getSingleRoomData(props.match.params.slug);
  console.log("singleRoomdata :", singleRoomData);

  const renderSingleRoomData = () => {
    if (!singleRoomData) {
      return (
        <div className="error">
          <h3>No such room</h3>
          <Link to="/rooms">Back to rooms</Link>
        </div>
      );
    } else {
      return (
        <Fragment>
          <StyledHero image={singleRoomData.images[0] || defaultImgae}>
            <Banner title={`${singleRoomData.name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </StyledHero>

          <section className="single-room">
            <div className="single-room-images">
              {singleRoomData.images.map(image => {
                return <img src={image} alt={image.name} />;
              })}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>Details</h3>
                <p>{singleRoomData.description}</p>
              </article>

              <article className="info">
                <h3>Info</h3>
                <h6>price: ${singleRoomData.price}</h6>
                <h6>Size: {singleRoomData.size} SQFT</h6>
                <h6>
                  max capacity:{" "}
                  {singleRoomData.capacity > 1
                    ? `${singleRoomData.capacity} People`
                    : `${singleRoomData.capacity} Person`}
                </h6>
                <h6>
                  {singleRoomData.pets ? "pets allowed" : "no pets allowed"}
                </h6>
                <h6>{singleRoomData.breakfast && "free breakfast included"}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {singleRoomData.extras.map((extra, index) => {
                return <li key={index}>{extra}</li>;
              })}
            </ul>
          </section>
        </Fragment>
      );
    }
  };

  return <Fragment>{renderSingleRoomData()}</Fragment>;
};
