import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Button, Container, Form, Input, StyledLink } from "../../components/styled";

export function Register(){
    const [form, setForm] = useState({"email": "", "username": "", "password":"", "img": ""});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const promise = api.signup({...form});

        promise.then(() => {
            setIsLoading(false);
            navigate("/signin");
        });
        promise.catch(() => {
            setIsLoading(false);
            alert('Erro, tente novamente');
        });
    }
    
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="text"
                    placeholder="Nome do usuário"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="text"
                    placeholder="Foto de perfil"
                    name="img"
                    onChange={handleChange}
                    value={form.img}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    { isLoading ? "Loading..." : "Cadastrar" }
                </Button>
            </Form>
            <StyledLink to="/signin">
                Já tem uma conta? Faça login!
            </StyledLink>
        </Container>
    )
}
