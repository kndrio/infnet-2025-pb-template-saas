import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import LoginForm from "../Components/LoginForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { token, login, logout, loading, error } = useAuth();

  const Navigate = useNavigate();
  const loginEmailRef = useRef(null);

  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      setIsLoginOpen(false);
      //Redirect
      Navigate("/dashboard");
    } catch {
      //erro tratado via hook
    }
  };

  const handleLogout = async () => {
    await logout();
    //Redirect
    Navigate("/");
  };

  //Setar foco no inputEmail
  useEffect(() => {
    if (isLoginOpen && loginEmailRef.current) {
      loginEmailRef.current.focus();
    }
  }, [isLoginOpen]);

  return (
    <>
      {/* SKIP LINK - precisa existir um <main id="main-content"> na página */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <header className="header">
        <div className="container header-container">
          <a href="/" className="logo">
            <div className="logo-icon"></div>
            <span>Solução SaaS</span>
          </a>

          <nav className="nav">
            <a href="#Feature" className="nav-link">
              Recursos
            </a>
            <a href="#Pricing" className="nav-link">
              Preços
            </a>
            <a href="#Testimonials" className="nav-link">
              Depoimentos
            </a>
            <a href="#Contacts" className="nav-link">
              Contatos
            </a>
            {token ? (
              <button onClick={handleLogout} className="button button-outline">
                Sair
              </button>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="button button-outline"
              >
                Entrar
              </button>
            )}

            <button className="button button-primary">Começar grátis</button>
          </nav>

          <button
            className="button button-outline mobile-menu-button"
            id="mobile-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            id="mobile-menu"
            className="nav-mobile"
            style={{ display: isMenuOpen ? "flex" : "none" }}
          >
            <a href="#Feature" className="nav-link">
              Recursos
            </a>
            <a href="#Pricing" className="nav-link">
              Preços
            </a>
            <a href="#Testimonials" className="nav-link">
              Depoimentos
            </a>
            <a href="#Contacts" className="nav-link">
              Contatos
            </a>
            {token ? (
              <button onClick={logout} className="button button-outline">
                Sair
              </button>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="button button-outline"
              >
                Entrar
              </button>
            )}
            <button className="button button-primary">Começar grátis</button>
          </div>
        </div>
      </header>
      {isLoginOpen && (
        <LoginForm
          onSubmit={handleLogin}
          onCancel={() => setIsLoginOpen(false)}
          loading={loading}
          error={error}
          emailRef={loginEmailRef}
        />
      )}
    </>
  );
}
