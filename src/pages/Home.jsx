import React, { Fragment, useEffect, useState } from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { FeaturedRoom } from '../components/FeaturedRoom';
import { RoomProvider } from '../Context';
import RoomsData from "../RoomsData";

// const RoomContext = React.createContext();

const Home = () => {

    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRoom, setFeaturedRoom] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let room = formatRoomsData(RoomsData);
        let featuredRoom = room.filter(item => item.featured === true);
        setFeaturedRoom(featuredRoom);
        setRooms(room);
        setSortedRooms(room);
        setLoading(false);
    },[])

    // console.log('rooms', rooms)

    const formatRoomsData = (roomsDataCollection) => {
        console.log('object', roomsDataCollection);
        let roomData = roomsDataCollection.map(item => {
            let id = item.sys.id;
            let getImages = getRoomsImages(item);
            const rooms = {...item.fields, images:getImages, id}
            return rooms;
        })
        return roomData;
    }

    const getRoomsImages = (item) => {
        return item.fields.images.map(data => data.fields.file.url);
    }

    return (
        <Fragment>
            <div>
                <Hero>
                    <Banner title="luxurious rooms" subTitle="Deluxe rooms staring at $299">
                        <Link to="/rooms" className="btn-primary">our rooms</Link>
                    </Banner>
                </Hero>
                <Services />
                <RoomProvider value={rooms}>
                    <FeaturedRoom featuredRooms={featuredRoom}/>
                </RoomProvider>
            </div>
        </Fragment>

    )
}

export { Home }
