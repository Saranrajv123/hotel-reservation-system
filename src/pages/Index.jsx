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

  const [filterData, setFilterData] = useState({
    type: "All",
    maxPrice: 0,
    minPrice: 0,
    maxSize: 0,
    minSize: 0,
    price: 0,
    capacity: 0,
    breakfast: false,
    pets: false,
  });


  useEffect(() => {

    // filterRooms()
    let rooms = formatRoomsData(Data);
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size))


    setrooms(rooms);
    setfeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setloading(false);
    setFilterData({
      ...filterData,
      maxPrice,
      maxSize,
      price: maxPrice, 
    })
  }, []);

  useEffect(() => {
    filterRooms()
  }, [filterData])



  const formatRoomsData = data => {
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

  const handleChange = (event) => {
   setFilterData({
     ...filterData,
     [event.target.name]: event.target.value
   })
  }

  const filterRooms = () => {
    let tempRooms = [...rooms];
    if(filterData.type !== "All") {
      tempRooms = tempRooms.filter(item => item.type === filterData.type);
    }
    setSortedRooms(tempRooms);
  }

  const getSingleRoomData = slug => {
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
          getSingleRoomData: getSingleRoomData,
          handleChange: handleChange,
          filterData,
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
