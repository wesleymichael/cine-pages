import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import PostRender from "./PostRender";
import Followers from "./Followers";
import { ButtonFollow, Container, ContainerPost, Info, ProfileContainer } from "./styles";
import Following from "./Following";
import usePost from "../../hooks/usePost";

export default function Profile() {
    const { username } = useParams();
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const {usernameData, following, setFollowing, loadPostsUsername} = usePost();
    const { auth } = useAuth();

    const handleFollow = async () => {
        try {
            const body = {username}
            if (following) {
                await api.unfollow(auth.token, body);
            } else {
                await api.follow(auth.token, body);
            }
            setFollowing(!following);
            loadPostsUsername(username);
        } catch (error) {
            console.log("Erro ao seguir usuário:", error.response.data);
        }
    };

    useEffect(() => loadPostsUsername(username), []);

    return (
        <>
            {showFollowers && 
                <Followers username={username} setShowFollowers={setShowFollowers} />
            }
            {showFollowing && 
                <Following username={username} setShowFollowing={setShowFollowing} />
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
                                <span onClick={() => setShowFollowers(true)}>{usernameData.followers} seguidores</span>
                                <span onClick={() => setShowFollowing(true)}>{usernameData.following} seguindo</span>
                            </div>
                        </Info>
                    </ProfileContainer>
                </div>
                <ContainerPost>
                    {usernameData.postsUsername &&
                        usernameData.postsUsername.map(post => (
                            <PostRender post={post} username={usernameData.username} key={post.id} />
                        ))
                    }
                </ContainerPost>
            </Container>
        </>
    )
}
