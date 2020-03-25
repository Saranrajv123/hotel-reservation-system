import React, { Fragment, useContext, useEffect } from 'react'
import RoomContext  from '../Context';


export const FeaturedRoom = (props) => {
    // const {featuredRoom} = useContext(RoomContext)
    const value = useContext(RoomContext)
    // const value = this.context;
    // console.log('contextType',contextType)

    console.log('props.featuredRoom', props.featuredRooms)

    useEffect(() => {
       console.log('conte', value)
    }, [])

    return (
       <Fragment>
           <div>
               Hello from featured Component
           </div>
       </Fragment>
    )
}
