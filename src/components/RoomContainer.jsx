import React, { Fragment } from 'react';
import { RoomFilter } from './RoomFilter';
import { RoomListing } from './RoomListing';
import {Loader} from "./Loader";
import { RoomConsumerWrapper } from '../Context';

const RoomContainer = ({context}) => {

    if(context.loading) {
        return <Loader />
    }
    return (
        <Fragment>
            <RoomFilter rooms={context.rooms}/>
            <RoomListing rooms={context.sortedRooms}/>
        </Fragment>
       
    )
}

export default RoomConsumerWrapper(RoomContainer);

// export const RoomContainer = () => {
//     return (
//         <Fragment>
//             <RoomConsumer>
//                 {(value) => {
//                     console.log('value', value)
//                     return (
//                         <div>
//                         <RoomFilter />
//                         <RoomListing />
//                     </div>
//                     )
//                 }}
//             </RoomConsumer>
          
//         </Fragment>
//     )
// }
