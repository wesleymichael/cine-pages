import useAuth from "../../hooks/useAuth"
import { useEffect, useState } from "react";
import api from "../../services/api";
import {ContainerBG, ContainerFollow } from "./styles";
import FollowProfile from "./FollowProfile";
import { toast } from "react-toastify";

export default function Followers({ username, setShowFollowers}) {
    const { auth } = useAuth();
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.getFollowers(auth.token, username);
                setFollowers(res.data);
            } catch(error) {
                toast(error.response.data);
            }
        };
        fetchData();
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
