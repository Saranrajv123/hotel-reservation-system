import React, { Fragment, Consumer, useState } from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { FeaturedRoom } from '../components/FeaturedRoom';
import { RoomProvider } from '../Context';

const RoomContext = React.createContext();

const Home = () => {

    const [state, setstate] = useState("Hello");
    const [greeting, setGreeting] = useState("greeting");

    return (
        <Fragment>
            <div>

                <Hero>
                    <Banner title="luxurious rooms" subTitle="Deluxe rooms staring at $299">
                        <Link to="/rooms" className="btn-primary">our rooms</Link>
                    </Banner>
                </Hero>
                <Services />
                <RoomProvider value={state, greeting}>
                    <FeaturedRoom />
                </RoomProvider>
            </div>
        </Fragment>

    )
}

export { Home, RoomContext }
