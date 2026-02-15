import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
    const [id, setId] = useState(null)
    const [token, setToken] = useState("")

    return(
        <UserContext.Provider
        value={{id, setId, token, setToken}}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider