import React, { Fragment, useContext, useEffect } from "react";
import RoomContext from "../Context";
import { Loader } from "./Loader";
import { Rooms } from "./Rooms";
import { Title } from "./Title";

export const FeaturedRoom = () => {
  const { rooms, featuredRooms, sortedRooms, loading } = useContext(
    RoomContext
  );

//   useEffect(() => {
//     roomsItem()
//   }, [])

  const roomsItem = () => {
    return rooms.map(item => {
      return <Rooms rooms={item} key={item.id} />;
    });
  };

  return (
    <Fragment>
      <div className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loader /> : roomsItem}
        </div>
      </div>
    </Fragment>
  );
};
