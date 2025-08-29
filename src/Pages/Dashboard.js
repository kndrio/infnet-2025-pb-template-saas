import React from "react";
import { useAuth } from "../Hooks/useAuth";
import Users from "../Components/Users";

export default function Dashboard() {
  const { token } = useAuth();

  if (!token) {
    return <p>Você não está logado. Volte para login.</p>;
  }

  return (
    <div className="container section">
      <h1 className="section-title">Dashboard Page</h1>
      <p>Bem vindo ao painel!</p>
      <Users />
    </div>
  );
}
