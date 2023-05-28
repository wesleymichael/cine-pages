import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function PostRender({ post, loadPostsUsername }) {
    const [liked, setLiked] = useState(post.liked);
    const { auth } = useAuth();

    useEffect(() => {
        setLiked(post.liked);
    }, [post.liked]);

    const handleLike = async () => {
        try {
            if (liked) {
                await api.dislikePost(auth.token, post.id);
            } else {
                await api.likePost(auth.token, post.id);
            }
            setLiked(!liked);
            loadPostsUsername();
        } catch (error) {
            console.error("Erro ao curtir ou descurtir o post:", error);
        }
    };

    return (
        <Post>
            <Main>
                <Image src={post.img} alt={post.id} />
            </Main>
            <FooterPost>
                <LikeContainer onClick={handleLike}>
                    {liked ? <LikeIcon /> : <NoLikeIcon />}
                    Curtido por {post.likes} pessoas
                </LikeContainer>
                <Description>{post.description}</Description>
            </FooterPost>
        </Post>
    );
}

const Post = styled.div`
    display: flex;
    width: calc(50% - 10px);
    height: 400px;
    position: relative;
    border: 1px solid grey;
    margin-top: 40px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FooterPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
    padding: 12px;
    background-color: #fff;
`;

const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 75%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 14px;
`;
