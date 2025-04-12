import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await fetch("http://localhost:8000/api/auth/login/", {
          method: "POST",
          headers: { Authorization: `Token ${token}` },
        });
        const data = await res.json();
        if (data.user) setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<div className="p-8">トップページ</div>} />
      </Routes>
    </Router>
  );
}

export default App;