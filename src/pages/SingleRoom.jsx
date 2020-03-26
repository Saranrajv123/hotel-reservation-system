import React, {useContext} from 'react';
import RoomContext from "../Context";

export const SingleRoom = (props) => {
    console.log('props :', props);
    const {getSingleRoomData} = useContext(RoomContext);
    let singleRoomData = getSingleRoomData(props.match.params.slug);
    console.log('singleRoomdata :', singleRoomData);

    return (
        <div>
            Hello from single romm
        </div>
    )
}
