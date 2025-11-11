// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         name: 'tabuli',
//         email: 'tabuli@#gkj.com'
//     })
//     const authData = {
//         user,
//         setUser,
//     }
//     return <AuthContext value={authData}>{children}</AuthContext>;
// };

// export default AuthProvider;


import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        user: "tabuli",
        email: "tabuil@gmail.com",
    })
    const authData = {
        user,
        setUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;