import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 18vw;
    position: fixed;
    border-right: 1px solid grey;
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
        font-size: 30px;
        line-height: 40px;
        text-align: center;
        margin: 15px 0;
        padding-bottom: 15px;
        border-bottom: 1px solid grey;
    }

`