import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import api from "../../services/api";
import { COLOR_BORDER } from "../../constants/colors";
import { Link } from "react-router-dom";

export default function SearchUsers() {
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);

    function handleChange(e){
        setFilter(e.target.value);
        const promise = api.getUsers(e.target.value);
        promise.then((res) =>{
            setUsers(res.data);
        });
        promise.catch((error) =>{
            console.log(error);
        });
    }

    return (
        <>
            <Sidebar />
            <Container>
                <InputContainer>
                    <Input 
                        placeholder="Pesquisar" 
                        onChange={handleChange}
                        value={filter}
                    />
                    <Users>
                        {users.map(user => (
                           <Link to={`/${user.username}`} key={user.id}>
                                <div>
                                    <img src={user.img} alt={user.username}/>
                                    <h1>{user.username}</h1>
                                </div>
                           </Link>
                        ))}
                    </Users>
                </InputContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 82vw;
    height: 100vh;
    display: flex;
    position: absolute;
    right: 0;
    padding: 0 10vw;
    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0 0 70px 0;
    }
    
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 50px auto;
    border: 1px solid ${COLOR_BORDER};
    border-radius: 4px;
    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        border: none;
        margin: 0;
    }
`;

const Input = styled.input`
    width: 90%;
    margin: 20px auto;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #ccc;
    border-radius: 4px;
    outline: none;

`;

const Users = styled.div`
    width: 90%;
    margin-top: 20px;
    border-radius: 4px;
    margin: 20px auto;
    div{
        display: flex;
        align-items: center;
        margin: 15px;
        color: black;
        img{
            width: 70px;
            height: 70px;
            border-radius: 70px;
            object-fit: cover;
            margin-right: 10px;
        }
    }
    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 0;
        padding: 0;

        div > img{
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
    }
`
