import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Button, Container, Form, Input, StyledLink } from "../../components/styled";
import { toast } from "react-toastify";

export function Register(){
    const [form, setForm] = useState({"email": "", "username": "", "password":"", "img": ""});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        try {
            await api.signup({...form});
            setIsLoading(false);
            navigate("/signin");
        } catch(error) {
            setIsLoading(false);
            toast(`Erro ao criar usuário!`)
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
      }
    
      function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return usernameRegex.test(username);
      }
    
      function validateImgUrl(imgUrl) {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(imgUrl);
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
          pattern={validateEmail(form.email) ? undefined : "[^\\s]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"}
          title="Insira um email válido"
        />
        <Input
          type="text"
          placeholder="Nome do usuário"
          name="username"
          onChange={handleChange}
          value={form.username}
          disabled={isLoading}
          required
          pattern={validateUsername(form.username) ? undefined : "[a-zA-Z0-9_]+"}
          title="Username deve conter apenas letras, números e underline"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={form.password}
          disabled={isLoading}
          required
          minLength={6}
          title="A senha deve ter pelo menos 6 caracteres"
        />
        <Input
          type="text"
          placeholder="Foto de perfil"
          name="img"
          onChange={handleChange}
          value={form.img}
          disabled={isLoading}
          required
          pattern={validateImgUrl(form.img) ? undefined : "^(ftp|http|https):\\/\\/[^ \"].+$"}
          title="Insira uma URL válida"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Cadastrar"}
        </Button>
      </Form>
            <StyledLink to="/signin">
                Já tem uma conta? Faça login!
            </StyledLink>
        </Container>
    )
}
