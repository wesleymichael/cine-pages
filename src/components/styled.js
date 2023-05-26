import { Link } from "react-router-dom";
import styled from "styled-components";

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