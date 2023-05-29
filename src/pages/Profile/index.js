import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import PostRender from "./PostRender";
import Followers from "./Followers";
import { ButtonFollow, Container, ContainerPost, Info, ProfileContainer } from "./styles";
import Following from "./Following";

export default function Profile() {
    const { username } = useParams();
    const [usernameData, setUsernameData] = useState([]);
    const [following, setFollowing] = useState(usernameData.isFollowing);
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const { auth } = useAuth();

    function loadPostsUsername(username) {
        const promise = api.getPostsByUsername(auth.token, username);
        promise.then((res) => {
            setUsernameData(res.data[0]);
            setFollowing(res.data[0].isFollowing);
        })
    }

    const handleFollow = async () => {
        try {
            const body = {username}
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

    useEffect(() => loadPostsUsername(username), []);

    return (
        <>
            {showFollowers && 
                <Followers username={username} setShowFollowers={setShowFollowers} loadPostsUsername={loadPostsUsername}/>
            }
            {showFollowing && 
                <Following username={username} setShowFollowing={setShowFollowing} loadPostsUsername={loadPostsUsername}/>
            }
            <Sidebar />
            <Container>
                <div>
                    <ProfileContainer>
                        <div>
                            <img src={usernameData.imgUser} alt={usernameData.imgUser} />
                        </div>
                        <Info>
                            <div>
                                <span>{usernameData.username}</span>
                                {auth.user.username !== usernameData.username && (
                                    following ? (
                                        <ButtonFollow onClick={handleFollow}>Seguindo</ButtonFollow>
                                    ) : (
                                        <ButtonFollow onClick={handleFollow}>Seguir</ButtonFollow>
                                    )
                                )}
                            </div>
                            <div>
                                <p>{usernameData.postsUsername?.length} publicações</p>
                                <p onClick={() => setShowFollowers(true)}>{usernameData.followers} seguidores</p>
                                <p onClick={() => setShowFollowing(true)}>{usernameData.following} seguindo</p>
                            </div>
                        </Info>
                    </ProfileContainer>
                </div>
                <ContainerPost>
                    {usernameData.postsUsername &&
                        usernameData.postsUsername.map(post => (
                            <PostRender post={post} loadPostsUsername={loadPostsUsername} key={post.id} />
                        ))
                    }
                </ContainerPost>
            </Container>
        </>
    )
}
