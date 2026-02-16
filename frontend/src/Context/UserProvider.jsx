import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
    const [userId, setId] = useState(null)
    const [token, setToken] = useState("")

    return(
        <UserContext.Provider
        value={{userId, setId, token, setToken}}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider