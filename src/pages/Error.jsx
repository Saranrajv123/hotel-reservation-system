import React, { Fragment } from 'react'
import { Hero } from '../components/Hero'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
       <Fragment>
           <Hero>
               <Banner title="404 not found">
                   <Link to="/" className="btn-primary">return home</Link>
               </Banner>
           </Hero>
       </Fragment>
    )
}
