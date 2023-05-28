import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import { FaHeart } from "react-icons/fa";

export default function Feed() {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const { posts, loadPosts } = usePost();

    useEffect(() => {
        if (!auth.token) {
            navigate("/signin");
        } else {
            loadPosts();
        }
    }, []);

    return (
        <>
            <Sidebar />
            <Container>
                {posts.map((p) => (
                    <Post key={p.post.id}>
                        <HeaderPost>
                            <ImgUser src={p.userImg} alt={p.username} />
                            <p>
                                {p.username} -{" "}
                                {new Date(p.post.createdAt).toLocaleString()}
                            </p>
                        </HeaderPost>
                        <Main>
                            <img src={p.post.img} alt={p.post.id} />
                        </Main>
                        <FooterPost>
                            <LikeContainer>
                                <LikeIcon />
                                <LikeCount>{p.post.likes}</LikeCount>
                            </LikeContainer>
                            <Description>{p.post.description}</Description>
                        </FooterPost>
                    </Post>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    margin-top: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
`;

const FooterPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
`;

const ImgUser = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

const Main = styled.div`
    height: 0;
    padding-bottom: 75%;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const LikeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const LikeIcon = styled(FaHeart)`
    color: red;
    margin-right: 5px;
`;

const LikeCount = styled.span`
    font-size: 14px;
`;

const Description = styled.p`
    margin-bottom: 14px;
`;