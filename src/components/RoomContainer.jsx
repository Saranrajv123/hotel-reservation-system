import React, { Fragment } from 'react';
import { RoomFilter } from './RoomFilter';
import { RoomListing } from './RoomListing';

export const RoomContainer = () => {
    return (
        <Fragment>
            <div>
                <RoomFilter />
                <RoomListing />
            </div>
        </Fragment>
    )
}
