import {createContext, useState} from "react";
import api from "../services/api";
import useAuth from "../hooks/useAuth";

const PostContext = createContext();

export function PostProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [activeAddPost, setActiveAddPost] = useState(false);
    const {auth} = useAuth();

    function loadPosts(){
        const promise = api.getPosts(auth.token);
        
        promise.then((res) => {
            setPosts(res.data);
        });
    }

    return (
        <PostContext.Provider value={{loadPosts, activeAddPost, setActiveAddPost, posts}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext;

