import styled from "styled-components"
import { COLOR_BORDER } from "../../constants/colors"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export const ContainerFollow = styled.div`
    height: 60vh;
    width: 20vw;
    min-width: 300px;
    margin: 0 auto; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: rgba(14, 15, 16, 1);
    border-radius: 20px;
    >div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        width: 100%;
        color: white;
        font-size: 25px;
        border-bottom: 1px solid ${COLOR_BORDER};
    }
`

export const BoxFollowers = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-size: 18px;
    div{
        display: flex;
        align-items: center;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 60px;
        object-fit: cover;
    }
    p{
        padding-left: 10px;
    }
`
export const ContainerBG = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: rgba(85, 81, 81, 0.7);
`
export const Post = styled.div`
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

export const FooterPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0;
    padding: 12px;
    background-color: #fff;
`;

export const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 75%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 14px;
`;

export const ButtonFollow = styled.button`
    padding: 5px;
    height: 30px;
    width: 70px;
    text-align: center;
    background-color: #ffffff;
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    :hover {
        background-color: #f0f0f0;
    }
    :focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(240, 240, 240, 0.5);
    }

`

export const ContainerPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

export const Container = styled.div`
    width: 82vw;
    height: 100vh;
    position: absolute;
    right: 0;
    padding: 0 10vw;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
        display: flex;
        gap: 40px;
    }
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    margin: 40px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid ${COLOR_BORDER};
    img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        object-fit: cover;
        margin: 0 70px;
    }
`
