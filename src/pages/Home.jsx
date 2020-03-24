import React, { Fragment } from 'react'
import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';


export const Home = () => {
    return (
       <Fragment>
           <Hero>
               <Banner title="luxurious rooms" subTitle="Deluxe rooms staring at $299">
                   <Link to="/rooms" className="btn-primary">our rooms</Link>
               </Banner>
           </Hero>
           <Services />
       </Fragment>
    )
}
