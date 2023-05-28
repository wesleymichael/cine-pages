import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Feed from "./pages/Feed";
import { PostProvider } from "./contexts/PostContext";
import Profile from "./pages/Profile";
import { LikeProvider } from "./contexts/LikeContext";

export default function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <LikeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/" element={<Feed />} />
              <Route path="/:username" element={<Profile />} />
              <Route path="/followers" element={<h1>Seguidores</h1>} />
              <Route path="/following" element={<h1>Seguindo</h1>} />
            </Routes>
          </BrowserRouter>
        </LikeProvider>
      </PostProvider>
    </AuthProvider>
  )
}