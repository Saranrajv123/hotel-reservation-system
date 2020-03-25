import React, { Fragment, useState } from 'react';
import { FeaturedRoom } from './components/FeaturedRoom';
// import { RoomContext } from './pages/Home';

const RoomContext = React.createContext();
// const RoomContext = React.createContext();
export const RoomProvider = RoomContext.Provider;

export default RoomContext;


// const RoomProvier = ({ children }) => {
//     const [greeting, setGreeting] = useState("Hello context");
//     const [name, setName] = useState("React");
//     // const [state, setstate] = useState({
//     //     greeting: "Hello context",
//     //     name: "React Hooks"
//     // });

//     return (
//         <Fragment>
//             <RoomContext.Provider value={greeting, name}>
//                 {children}
//             </RoomContext.Provider>
//         </Fragment>
//     )
// }

// // const RoomConsumer = RoomContext.Consumer;
// export {
//     // RoomConsumer,
//     RoomContext,
//     RoomProvier

// }

