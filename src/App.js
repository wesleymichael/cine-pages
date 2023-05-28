import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={ <Feed />} />
          <Route path="/:username" element={<h1>Página do usuário</h1>} />
          <Route path="/followers" element={<h1>Seguidores</h1>} />
          <Route path="/following" element={<h1>Seguindo</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}