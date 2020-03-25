import React, { Fragment, useState, useEffect } from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { FeaturedRoom } from '../components/FeaturedRoom';
import { RoomProvider } from '../Context';
import Data from "../Data";


export const Home = () => {
    const [rooms, setrooms] = useState([]);
    const [featuredRooms, setfeaturedRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        let rooms = formatRoomsData(Data);
        console.log('rooms :', rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);

        setrooms(rooms);
        setfeaturedRooms(featuredRooms);
        setSortedRooms(rooms);
        setloading(false);

    }, []);

    console.log('featuredRooms :', featuredRooms);

    const formatRoomsData = (data) => {
        console.log('data :', data);
        let tempData = data && data.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url;
            });
            const rooms = {...item.fields,images, id }
            return rooms;
        })
        return tempData;

    }

    return (
       <Fragment>
           {/* <input 
            type="text"
            onChange={(e) => setstate(e.target.value)}
           /> */}
           <Hero>
               <Banner title="luxurious rooms" subTitle="Deluxe rooms staring at $299">
                   <Link to="/rooms" className="btn-primary">our rooms</Link>
               </Banner>
           </Hero>
           <Services />
           <RoomProvider value={{featuredRooms, rooms,sortedRooms, loading}}>
           <FeaturedRoom />
           </RoomProvider>
       </Fragment>
    )
}
