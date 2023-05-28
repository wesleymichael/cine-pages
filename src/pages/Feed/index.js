import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import Sidebar from "./Sidebar";
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
    max-width: 800px;
    margin: 0 auto;
`;
