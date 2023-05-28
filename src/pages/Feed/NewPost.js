import styled from "styled-components";
import { Button, Form, TextArea } from "../../components/styled";
import { Input } from "../../components/styled";
import { useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function NewPost({ setActiveAddPost, loadPosts }) {
    const [form, setForm] = useState({ "description": "", "img": "" });
    const { auth } = useAuth()
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        const promise = api.addPost(auth.token, { ...form });
        promise.then((res) => {
            setIsLoading(false);
            setActiveAddPost(false);
            loadPosts();
        });
        promise.catch(() => {
            setIsLoading(false);
            alert('Erro, tente novamente');
        });
    }

    return (
        <>
            <AddPostContainer onClick={() => setActiveAddPost(false)}>
            </AddPostContainer>
            <FormContainer>
                <div>
                    <h1>Nova postagem</h1>
                </div>
                <Form onSubmit={handleSubmit}>
                    <TextArea
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        onChange={handleChange}
                        value={form.description}
                        disabled={isLoading}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Imagem"
                        name="img"
                        onChange={handleChange}
                        value={form.img}
                        disabled={isLoading}
                        required
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Postar"}
                    </Button>
                </Form>
            </FormContainer>
        </>
    )
}

const AddPostContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: rgba(85, 81, 81, 0.7);
`

const FormContainer = styled.div`
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