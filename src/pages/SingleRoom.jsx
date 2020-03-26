import React, { useContext, Fragment } from "react";
import RoomContext from "../Context";
import { Hero } from "../components/Hero";
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
        <StyledHero image={singleRoomData.images[0] || defaultImgae }>
          <Banner title={`${singleRoomData.name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
      );
    }
  };

  return <Fragment>{renderSingleRoomData()}</Fragment>;
};
