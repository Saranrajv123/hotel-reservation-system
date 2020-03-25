import React from 'react';

const RoomContext = React.createContext();
export const RoomProvider = RoomContext.Provider;

export default RoomContext;


// const RoomProvier = ({ children }) => {
//     const [greeting, setGreeting] = useState("Hello context");
//     const [name, setName] = useState("React");

//     return (
//         <Fragment>
//             <RoomContext.Provider value={{greeting: greeting, name: name}}>
//                 {children}
//             </RoomContext.Provider>
//         </Fragment>
//     )
// }

// const RoomConsumer = RoomContext.Consumer;

// export {
//     RoomConsumer,
//     RoomContext,
//     RoomProvier
// }
