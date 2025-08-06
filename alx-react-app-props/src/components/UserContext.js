import {Children, createContext, useContext} from 'react';

const UserContext = createContext();

export function UserProvider({}) {
    const userData = {
        name: "Jane Doe",
        email: "jane.doe@example.com"
    };

    return (
        <UserContext.Provider value={userData}>
            { Children }
        </UserContext.Provider>
    );
}

export function useUser (){
    return useContext(UserContext);
}

export default UserContext;