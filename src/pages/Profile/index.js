import styled from "styled-components";
import Sidebar from "../Feed/Sidebar";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import PostRender from "./PostRender";

export default function Profile() {
    const { username } = useParams();
    const [usernameData, setUsernameData] = useState([]);
    const { auth } = useAuth();

    function loadPostsUsername() {
        const promise = api.getPostsByUsername(auth.token, username);
        
        promise.then((res) => {
            setUsernameData(res.data[0]);
        })
    }

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
                            <span>{username}</span>
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
                            <PostRender post={post} loadPostsUsername={loadPostsUsername} key={post.id}  />
                        ))
                    }
                </ContainerPost>
            </Container>
        </>
    )
}

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
    span{
        margin-bottom: 25px;
    }
    div{
        display: flex;
        gap: 40px;
    }
`

const ProfileContainer = styled.div`
    display: flex;
    margin: 40px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid red;
    img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        object-fit: cover;
        margin: 0 70px;
    }
`