import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { BoxFollowers, ButtonFollow } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { toast } from "react-toastify";

export default function FollowProfile({profile}) {
    const [following, setFollowing] = useState(profile.isFollowing);
    const {loadPostsUsername} = usePost();
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
            loadPostsUsername(profile.username);
        } catch (error) {
            toast("Erro ao seguir usuário:", error.response.data);
        }
    };
    
    return (
        <BoxFollowers>
            <Link to={`/${profile.username}`} onClick={() => loadPostsUsername(profile.username)}>
                <div>
                    <img src={profile.img} alt={profile.username} />
                    <p>{profile.username}</p>
                </div>
            </Link>
            <div>
                {auth.user.username !== profile.username && (
                    following ? (
                        <ButtonFollow onClick={handleFollow}>Seguindo</ButtonFollow>
                    ) : (
                        <ButtonFollow onClick={handleFollow}>Seguir</ButtonFollow>
                    )
                )}
            </div>
        </BoxFollowers>
    )
}