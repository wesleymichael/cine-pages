import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_BORDER } from "../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 150px 0 25px;
`;

export const Input = styled.input`
    width: 300px;
    height: 45px;
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;

    &::placeholder{
        color: #DBDBDB;
    }
`;

export const TextArea = styled.textarea`
    width: 300px;
    height: 250px;
    resize: none;
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;

    &::placeholder{
        color: #DBDBDB;
    }
`;

export const Button = styled.button`
    width: 300px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4.5px;
    cursor: pointer;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
`;

export const StyledLink = styled(Link)`
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: #52B6FF;
`;

export const ContainerSideBar = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 18vw;
    position: fixed;
    border-right: 1px solid ${COLOR_BORDER};
    div{
        font-size: 20px;
        margin: 10px 15px;
        p{
            padding-left: 10px;
        }
        a{
            width: 100%;
            height: 100%;
            display: flex;
            color: black;
            display: flex;
            height: 35px;
            align-items: center;
        }
    }
    img{
        width: 25px;
        height: 25px;
        border-radius: 30px;
        object-fit: cover;
    }
    div:last-child{
        position: absolute;
        bottom: 10px;
    }
    h1{
        font-size: 35px;
        line-height: 40px;
        text-align: center;
        margin: 15px 0;
        padding-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 1024px) {
        h1{
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        p{
            display: none;
        }
        h1{
            font-size: 14px;
        }
        width: 80px;
        align-items: center;
    }

    @media (max-width: 480px) {
        h1{
            display: none;
        }
        width: 100vw;
        height: 70px;
        flex-direction: row;
        bottom: 0;
        z-index: 5;
        background-color: white;
        justify-content: space-around;
        div:last-child{
            position: static;
        }
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
`