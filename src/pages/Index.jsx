import React, { useEffect, useState } from "react";
import { Rooms } from "./Rooms";
import { SingleRoom } from "./SingleRoom";
import { Home } from "./Home";
import { Error } from "./Error";
import { Route, Switch } from "react-router-dom";
import { RoomProvider } from "../Context";
import Data from "../Data";

function Index() {
  const [rooms, setrooms] = useState([]);
  const [featuredRooms, setfeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let rooms = formatRoomsData(Data);
    let featuredRooms = rooms.filter(room => room.featured === true);

    setrooms(rooms);
    setfeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setloading(false);
  }, []);

  const formatRoomsData = data => {
    console.log("data :", data);
    let tempData =
      data &&
      data.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });
        const rooms = { ...item.fields, images, id };
        return rooms;
      });
    return tempData;
  };

  const getSingleRoomData = slug => {
    console.log("slug :", slug);
    let room = [...rooms];
    return room.find(item => item.slug === slug);
  };
  return (
    <>
      {/* <Navbar /> */}
      <RoomProvider
        value={{
          featuredRooms,
          rooms,
          sortedRooms,
          loading,
          getSingleRoomData: getSingleRoomData
        }}
      >
        <Switch>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </RoomProvider>
    </>
  );
}

export default Index;
