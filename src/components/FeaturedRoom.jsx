import React, { Fragment, useContext, useEffect } from 'react'
import RoomContext  from '../Context';


export const FeaturedRoom = () => {
    const context = useContext(RoomContext)
    // const value = this.context;
    // console.log('contextType',contextType)

    useEffect(() => {
       console.log('conte', context)
    }, [])

    return (
       <Fragment>
           <div>
               Hello from featured Component {context}
           </div>
       </Fragment>
    )
}
