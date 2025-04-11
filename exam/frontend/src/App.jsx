import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TestPage } from "./pages/Testpage";
import { AdminPanel } from "./pages/AdminPanel";
import { useEffect, useState } from "react";
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}