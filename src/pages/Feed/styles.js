import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Post = styled.div`
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

export const HeaderPost = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
    span{
        font-weight: bold;
    }
`;

export const FooterPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
`;

export const ImgUser = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const Main = styled.div`
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

export const LikeContainer = styled.button`
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

export const LikeIcon = styled(AiFillHeart)`
    color: red;
`;

export const NoLikeIcon = styled(AiOutlineHeart)`
    color: black;
`;

export const Description = styled.p`
    margin-bottom: 14px;
    span{
        padding-right: 7px;
        font-weight: bold;
    }
`;

export const AddPostContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: rgba(85, 81, 81, 0.7);
`

export const FormContainer = styled.div`
    height: 600px;
    width: 600px;
    margin: 0 auto; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: rgba(14, 15, 16, 0.9);
    border-radius: 30px;
    form{
        margin-top: 40px;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        h1{
            color: white;
            font-size: 25px;
        }
    }  
`