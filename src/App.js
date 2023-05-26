import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<h1>Inscrever-se</h1>} />
        <Route path="/sign-in" element={<h1>Login</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new-post" element={<h1>Adicionar postagem</h1>} />
        <Route path="/:username" element={<h1>Página do usuário</h1>} />
        <Route path="/followers" element={<h1>Seguidores</h1>} />
        <Route path="/following" element={<h1>Seguindo</h1>} />
      </Routes>
    </BrowserRouter>
  )
}