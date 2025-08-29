import React from "react";
import { useAuth } from "../Hooks/useAuth";
import Store from "../Components/Store";

export default function Templates() {
  const { token } = useAuth();

  if (!token) {
    return <p>Você não está logado. Volte para login.</p>;
  }

  return (
    <div className="container section">
      <h1 className="section-title">Templates Page</h1>
      <Store />
    </div>
  );
}
