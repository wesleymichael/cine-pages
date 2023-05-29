import { Button, Form, TextArea } from "../../components/styled";
import { Input } from "../../components/styled";
import { useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { AddPostContainer, FormContainer } from "./styles";

export default function NewPost() {
    const [form, setForm] = useState({ "description": "", "img": "" });
    const [isLoading, setIsLoading] = useState(false);
    const {setActiveAddPost, loadPosts} = usePost();
    const { auth } = useAuth();

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
