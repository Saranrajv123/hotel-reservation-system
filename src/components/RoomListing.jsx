import React, { Fragment } from 'react'
import { Rooms } from './Rooms'

export const RoomListing = (props) => {
    if (props.rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unforturnetely no rooms availble for your matched search</h3>
            </div>
        )
    }

    const renderRooms = () => {
        return (
            <section className="roomslist">
                <div className="roomslist-center">
                    {props.rooms.map(item => {
                        return (
                            <Rooms key={item.id} rooms={item} />
                        )
                    })}
                </div>
            </section>
        )
    }

    return (
        <Fragment>
            {renderRooms()}
        </Fragment>
    )
}
