import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import usePost from "../../hooks/usePost";
import PostFeed from "./PostFeed";

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
                {posts.map((postData) => (
                    <PostFeed postData={postData} loadPosts={loadPosts} key={postData.post.id}/>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 18vw;
    @media (max-width: 768px) {
        margin-left: calc(80px);   
    }
    @media (max-width: 480px) {
        margin-left: 0;
    }
`;
