import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Feed from "./pages/Feed";
import { PostProvider } from "./contexts/PostContext";
import Profile from "./pages/Profile";
import SearchUsers from "./pages/Users";

export default function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/" element={<Feed />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/search" element={<SearchUsers />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  )
}