import { useEffect, useState } from "react";
import { Button, Container, Form, Input, StyledLink } from "../../components/styled";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const [form, setForm] = useState({"email": "", "password":""});
    const [isLoading, setIsLoading] = useState(false);
    const {auth, login} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
          navigate("/");
        }
      }, []);

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const promise = api.signin({...form});
        promise.then((res) => {
            setIsLoading(false);
            login(res.data);
            navigate("/");
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
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    { isLoading ? "Loading..." : "Entrar" }
                </Button>
            </Form>
            <StyledLink to="/signup">
                Ainda não tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    )
}