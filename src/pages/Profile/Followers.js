import useAuth from "../../hooks/useAuth"
import { useEffect, useState } from "react";
import api from "../../services/api";
import {ContainerBG, ContainerFollow } from "./styles";
import FollowProfile from "./FollowProfile";

export default function Followers({ username, setShowFollowers}) {
    const { auth } = useAuth();
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const promise = api.getFollowers(auth.token, username);
        promise.then(res => {
            setFollowers(res.data);
        });
        promise.catch((error) => {
            console.log(error.response.data);
        });
    }, []);

    return (
        <>
            <ContainerBG onClick={() => setShowFollowers(false)} />
            <ContainerFollow>
                <div><h1>Seguidores</h1></div>

                {followers && (
                    followers.map(profile => (
                        <FollowProfile profile={profile} key={profile.id}/>
                    ))
                )}

            </ContainerFollow>
        </>
    )
}
