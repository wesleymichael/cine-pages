import {createContext, useState} from "react";
import api from "../services/api";
import useAuth from "../hooks/useAuth";

const PostContext = createContext();

export function PostProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [usernameData, setUsernameData] = useState([]);
    const [following, setFollowing] = useState(usernameData.isFollowing);
    const [activeAddPost, setActiveAddPost] = useState(false);
    const {auth} = useAuth();

    function loadPosts(){
        const promise = api.getPosts(auth.token);
        
        promise.then((res) => {
            setPosts(res.data);
        });
    }

    function loadPostsUsername(username) {
        const promise = api.getPostsByUsername(auth.token, username);
        promise.then((res) => {
            setUsernameData(res.data[0]);
            setFollowing(res.data[0].isFollowing);
        })
    }

    return (
        <PostContext.Provider value={{loadPosts, activeAddPost, setActiveAddPost, posts, following, setFollowing, usernameData, setUsernameData, loadPostsUsername }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext;

