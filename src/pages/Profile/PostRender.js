import React, { useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Description, FooterPost, Image, LikeContainer, LikeIcon, Main, NoLikeIcon, Post } from "./styles";
import usePost from "../../hooks/usePost";
import { toast } from "react-toastify";

export default function PostRender({ post, username }) {
    const [liked, setLiked] = useState(post.liked);
    const {loadPostsUsername} = usePost();
    const { auth } = useAuth();

    const handleLike = async () => {
        try {
            if (liked) {
                await api.dislikePost(auth.token, post.id);
            } else {
                await api.likePost(auth.token, post.id);
            }
            setLiked(!liked);
            loadPostsUsername(username);
        } catch (error) {
            toast("Erro ao curtir ou descurtir o post:", error.response.data);
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
                    {post.likes === 0 ? "Postagem ainda não curtida!" : (
                        `Curtido por ${post.likes} ${post.likes === 1 ? "pessoa" : "pessoas"}`
                    )}
                </LikeContainer>
                <Description>{post.description}</Description>
            </FooterPost>
        </Post>
    );
}
