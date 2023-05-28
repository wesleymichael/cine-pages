import {createContext, useState} from "react";
// import api from "../services/api";
// import useAuth from "../hooks/useAuth";

const LikeContext = createContext();

export function LikeProvider({children}) {
    const [liked, setLiked] = useState(false);
    //const {auth} = useAuth();

    return (
        <LikeContext.Provider value={{liked, setLiked}}>
            {children}
        </LikeContext.Provider>
    )
}

export default LikeContext;