import useAuth from "../../hooks/useAuth"
import { useEffect, useState } from "react";
import api from "../../services/api";
import {ContainerBG, ContainerFollow } from "./styles";
import FollowProfile from "./FollowProfile";

export default function Following({ username, setShowFollowing }) {
    const { auth } = useAuth();
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const promise = api.getFollowing(auth.token, username);
        promise.then(res => {
            setFollowers(res.data);
        });
        promise.catch((error) => {
            console.log(error.response.data);
        });
    }, []);

    return (
        <>
            <ContainerBG onClick={() => setShowFollowing(false)} />
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
