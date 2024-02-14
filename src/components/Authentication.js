import React, { Children, createContext, useContext, useState } from 'react';


export const MyAuthenticated = createContext();


const Authentication = ({children}) => {
    const [authenticated, setAuthenticated] = useState(true)

    const updateState = (newState) => {
        setAuthenticated(newState);
      };
    
    return (
        <MyAuthenticated.Provider value={{authenticated,updateState}}>
            {children}
        </MyAuthenticated.Provider>
    );
};



export default Authentication;




// import React, { createContext, useContext, useState } from 'react';

// // Step 1: Create a context
// export const MyContext = createContext();

// // Step 2: Create a component that provides the context values
// const MyProvider = ({ children }) => {
//   const [count, setCount] = useState(5);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <MyContext.Provider value={{ count, increment }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export default MyProvider