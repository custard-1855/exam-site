import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const logout = async () => {
    const token = localStorage.getItem("token");
    await fetch("http://localhost:8000/api/auth/logout/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">ホーム</Link>
        {user && <Link to="/dashboard" className="mr-4">ダッシュボード</Link>}
        {user && <Link to="/admin" className="mr-4">管理</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">ログアウト</button>
        ) : (
          <>
            <Link to="/login" className="mr-4">ログイン</Link>
            <Link to="/register">新規登録</Link>
          </>
        )}
      </div>
    </nav>
  );
}
