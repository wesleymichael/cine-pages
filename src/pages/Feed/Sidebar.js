import styled from "styled-components"
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineLogout } from "react-icons/md"
import { BsPlusCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"

export default function Sidebar({user}) {
    const navigate = useNavigate();
    const {auth, logout} = useAuth();
    
    function handleLogout(){
        const promise = api.logout(auth.token);
        promise.then(() => {
            logout();
            navigate("/signin");
        });
        promise.catch(() => {
            alert('Erro ao fazer logout, tente novamente');
        });
    }
    return (
        <Container>
            <h1>CinePáginas</h1>
            <div>
                <Link to={"/"}>
                    <AiOutlineHome />
                    <p>Home</p>
                </Link>
            </div>
            <div>
                <Link to={"/search"}>
                    <AiOutlineSearch />
                    <p>Pesquisa</p>
                </Link>
            </div>
            <div>
                <Link to={"/new-post"}>
                    <BsPlusCircle />
                    <p>Publicar</p>
                </Link>
            </div>

            <div>
                <Link to={`/${auth.user.username}`}>
                    <img src={auth.user.img} alt={auth.user.username} />
                    <p>Perfil</p>
                </Link>
            </div>

            <div onClick={handleLogout}>
                <Link>
                    <MdOutlineLogout />
                    <p>Sair</p>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 300px;
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

