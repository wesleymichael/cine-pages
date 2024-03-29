import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineLogout } from "react-icons/md"
import { BsPlusCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import api from "../services/api"
import useAuth from "../hooks/useAuth"
import NewPost from "../pages/Feed/NewPost";
import usePost from "../hooks/usePost"
import { ContainerSideBar } from "./styled"
import { toast } from "react-toastify"

export default function Sidebar() {
    const navigate = useNavigate();
    const {auth, logout} = useAuth();
    const {activeAddPost, setActiveAddPost, loadPostsUsername} = usePost();
    
    async function handleLogout(){
        try {
            await api.logout(auth.token);
            logout();
            navigate("/signin");
        } catch {
            toast("Erro ao fazer logout, tente novamente");
        }
    }
    return (
        <>
        {activeAddPost && 
            <NewPost />
        }
        <ContainerSideBar>
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
            <div onClick={() => setActiveAddPost(true)}>
                <Link>
                    <BsPlusCircle />
                    <p>Publicar</p>
                </Link>
            </div>

            <div>
                <Link to={`/${auth.user.username}`} onClick={() => loadPostsUsername(auth.user.username)}>
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
        </ContainerSideBar>
        </>
    )
}
