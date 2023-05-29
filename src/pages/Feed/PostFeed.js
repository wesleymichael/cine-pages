import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostFeed({ postData, loadPosts }) {
    const [liked, setLiked] = useState(postData.post.liked);
    const { auth } = useAuth();

    useEffect(() => {
        setLiked(postData.post.liked);
    }, [postData.post.liked]);

    const handleLike = async () => {
        try {
            if (liked) {
                await api.dislikePost(auth.token, postData.post.id);
            } else {
                await api.likePost(auth.token, postData.post.id);
            }
            setLiked(!liked);
            loadPosts();
        } catch (error) {
            console.error("Erro ao curtir ou descurtir o post:", error);
        }
    };

    return (
        <Post key={postData.post.id}>
            <HeaderPost>
                <Link to={`/${postData.username}`}><ImgUser src={postData.userImg} alt={postData.username} /></Link>
                <p>
                    <Link to={`/${postData.username}`}>{postData.username}</Link> - {" "}
                    {new Date(postData.post.createdAt).toLocaleString()}
                </p>
            </HeaderPost>
            <Main>
                <img src={postData.post.img} alt={postData.post.id} />
            </Main>
            <FooterPost>
                <LikeContainer onClick={handleLike}>
                    {liked ? <LikeIcon /> : <NoLikeIcon />}
                    {postData.post.likes === 0 ? "Postagem ainda não curtida!" : (
                        `Curtido por ${postData.post.likes} ${postData.post.likes === 1 ? "pessoa" : "pessoas"}`
                    )}
                </LikeContainer>
                <Description>{postData.post.description}</Description>
            </FooterPost>
        </Post>
    )
}

const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
    margin-top: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    a{
        color: #000;
    }
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

const LikeContainer = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 8px;
    cursor: pointer;
    svg{
        margin-right: 14px;
        font-size: 16px;
    }
`;

const LikeIcon = styled(AiFillHeart)`
    color: red;
`;

const NoLikeIcon = styled(AiOutlineHeart)`
    color: black;
`;

const Description = styled.p`
    margin-bottom: 14px;
`;