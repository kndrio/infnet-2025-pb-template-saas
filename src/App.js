import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

import { CartProvider } from "./Hooks/CartContext";
import Templates from "./Pages/Templates";

import { useAuth } from "./Hooks/useAuth";

import "./styles.css";

export default function App() {
  const { token } = useAuth();
  //const [page, setPage] = useState(token ? "dashboard" : "home");

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-grow" tab-index="-1">
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/templates" element={<Templates />} />
            </Routes>
          </CartProvider>
        </main>
      </div>
    </Router>
  );
}
