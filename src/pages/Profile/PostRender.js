import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

export default function PostRender({ post }) {
    return (
        <Post>
            <Main>
                <Image src={post.img} alt={post.id} />
            </Main>
            <FooterPost>
                <Likes>
                    <LikeIcon/>
                    {post.likes}
                </Likes>
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

const Likes = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
  }
`;
const LikeIcon = styled(FaHeart)`
  color: red;
  margin-right: 5px;
`;

const Description = styled.p`
  font-size: 14px;
`;
