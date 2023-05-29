import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { BoxFollowers, ButtonFollow } from "./styles";
import api from "../../services/api";

export default function FollowProfile({profile, loadPostsUsername}) {
    const [following, setFollowing] = useState(profile.isFollowing);
    const { auth } = useAuth();

    const handleFollow = async () => {
        try {
            const body = {username: profile.username}
            if (following) {
                await api.unfollow(auth.token, body);
            } else {
                await api.follow(auth.token, body);
            }
            setFollowing(!following);
            loadPostsUsername();
        } catch (error) {
            console.error("Erro ao seguir usuário:", error.response.data);
        }
    };
    
    return (
        <BoxFollowers>
            <div>
                <img src={profile.img} alt={profile.username} />
                <p>{profile.username}</p>
            </div>
            <div>
                {auth.user.username !== profile.username && (
                    following ? (
                        <ButtonFollow onClick={handleFollow}>Seguindo</ButtonFollow>
                    ) : (
                        <ButtonFollow onClick={handleFollow}>Seguir</ButtonFollow>
                    )
                )
                }
            </div>
        </BoxFollowers>
    )
}