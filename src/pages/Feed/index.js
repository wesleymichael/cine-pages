import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import api from "../../services/api";
import styled from "styled-components";

export default function Feed(){
    const [posts, setPosts] = useState([]);
    const {auth} = useAuth();
    
    function loadPosts(){
        const promise = api.getPosts(auth.token);
        
        promise.then((res) => {
            setPosts(res.data);
        });
    }

    useEffect(loadPosts, []);
    
    return(
        <Container>
            {posts.map (p => (
                <Post key={p.post.id}>
                    <HeaderPost>
                        <ImgUser src={p.userImg} alt={p.username} />
                        <p>{p.username} ... {p.post.createdAt.slice(0, 10)} às {p.post.createdAt.slice(11, 19)}</p>
                    </HeaderPost>
                    <Main>
                        <img src={p.post.img} alt={p.post.id}/>
                    </Main>
                    <FooterPost>
                        <p>Likes: {p.post.likes}</p>
                        <p>{p.post.description}</p>
                    </FooterPost>
                </Post>
            ) )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
`

const Post = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    position: relative;
    border: 1px solid grey;
    margin-top: 40px;
`

const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
`

const FooterPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
`

const ImgUser = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 60px;
    object-fit: cover;
    margin: 0 7px;
`

const Main = styled.div`
    height: 340px;
    width: 100%;
    position: absolute;
    top: 80px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`