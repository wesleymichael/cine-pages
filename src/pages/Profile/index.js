import styled from "styled-components";
import Sidebar from "../Feed/Sidebar";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import PostRender from "./PostRender";
import { COLOR_BORDER } from "../../constants/colors";

export default function Profile() {
    const { username } = useParams();
    const [usernameData, setUsernameData] = useState([]);
    const [following, setFollowing] = useState(usernameData.isFollowing);
    const { auth } = useAuth();

    function loadPostsUsername() {
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

    useEffect(loadPostsUsername, []);

    return (
        <>
            <Sidebar />
            <Container>
                <div>
                    <ProfileContainer>
                        <div>
                            <img src={usernameData.imgUser} alt={usernameData.imgUser} />
                        </div>
                        <Info>
                            <div>
                                <span>{username}</span>
                                {auth.user.username !== username && (
                                    following ? (
                                        <ButtonFollow onClick={handleFollow}>Seguindo</ButtonFollow>
                                    ) : (
                                        <ButtonFollow onClick={handleFollow}>Seguir</ButtonFollow>
                                    )
                                )}
                            </div>
                            <div>
                                <p>{usernameData.postsUsername?.length} publicações</p>
                                <p>{usernameData.followers} seguidores</p>
                                <p>{usernameData.following} seguindo</p>
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

const ButtonFollow = styled.button`
    padding: 5px;
    height: 30px;
    width: 70px;
    text-align: center;
    background-color: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    :hover {
        background-color: #f0f0f0;
    }
    :focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(240, 240, 240, 0.5);
    }

`

const ContainerPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Container = styled.div`
    width: 82vw;
    height: 100vh;
    position: absolute;
    right: 0;
    padding: 0 10vw;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
        display: flex;
        gap: 40px;
    }
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`

const ProfileContainer = styled.div`
    display: flex;
    margin: 40px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLOR_BORDER};
    img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        object-fit: cover;
        margin: 0 70px;
    }
`