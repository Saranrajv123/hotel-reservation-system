import React, { Fragment, useContext } from 'react';
import RoomContext from '../Context';
import { Title } from './Title';

export const RoomFilter = (props) => {
    const { handleChange, filterData  } = useContext(RoomContext);

    let types = ["All", ...[...new Set(props.rooms.map(item => item.type))]];

    const renderRoomFilter = () => {
        return (
            <div className="filter-container">
                <Title title="search rooms" />
                {renderForm()}
            </div>
        )
    }

    const renderForm = () => {
        return (
            <form className="filter-form">
                <select
                onChange={handleChange}
                value={filterData.type}
                name="type"
                className="form-control"
                >
                    {types.map((item, index) => {
                        return (
                        <option value={item} key={index}>{item}</option>
                        )
                    })}
                    
                </select>
            </form>
        )
    }
    return (
        <Fragment>
            <div>{renderRoomFilter()}</div>
        </Fragment>
    )
}
