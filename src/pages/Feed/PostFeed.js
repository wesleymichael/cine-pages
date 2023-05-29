import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Description, FooterPost, HeaderPost, ImgUser, LikeContainer, LikeIcon, Main, NoLikeIcon, Post } from "./styles";

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
                    <Link to={`/${postData.username}`}><span>{postData.username}</span></Link> - {" "}
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
                <Description><span>{postData.username}</span>{postData.post.description}</Description>
            </FooterPost>
        </Post>
    )
}
