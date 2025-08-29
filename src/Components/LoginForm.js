import React, { useState, useCallback } from "react";

export default function LoginForm({
  onSubmit,
  onCancel,
  loading,
  error,
  emailRef,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ email, password });
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onCancel();
        return;
      }
    },
    [onCancel]
  );

  return (
    <div
      className="login-form-backdrop"
      role="dialog"
      aria-modal="true"
      onKeyDown={handleKeyDown}
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar na sua conta</h2>
        {error && <p className="error">{error}</p>}

        <label htmlFor="email">
          E-mail
          <input
            id="email"
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <div className="buttons">
          <button
            type="submit"
            className="button button-primary"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <button
            type="button"
            className="button button-outline"
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
