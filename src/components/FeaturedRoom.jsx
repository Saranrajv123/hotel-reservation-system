import React, { Fragment } from 'react'
import { RoomConsumer, RoomContext } from '../Context'

export const FeaturedRoom = () => {
    const contextType = RoomContext;
    const value = this.context;
    console.log('contextType', value.name)

    return (
       <Fragment>
           <div>
               Hello from featured Component
           </div>
       </Fragment>
    )
}
