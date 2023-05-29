import React, { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Description, FooterPost, Image, LikeContainer, LikeIcon, Main, NoLikeIcon, Post } from "./styles";

export default function PostRender({ post, loadPostsUsername }) {
    const [liked, setLiked] = useState(post.liked);
    const { auth } = useAuth();

    useEffect(() => {
        setLiked(post.liked);
    }, [post.liked]);

    const handleLike = async () => {
        try {
            console.log(post.liked, liked)
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
                    {post.likes === 0 ? "Postagem ainda não curtida!" : (
                        `Curtido por ${post.likes} ${post.likes === 1 ? "pessoa" : "pessoas"}`
                    )}
                </LikeContainer>
                <Description>{post.description}</Description>
            </FooterPost>
        </Post>
    );
}
