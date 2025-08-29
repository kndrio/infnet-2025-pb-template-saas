import { useState, useCallback } from "react";
import { login as loginService } from "../Services/Users";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = useCallback(async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginService(credentials);
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setError(error.response?.data?.error || "Erro desconhecido");
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  return { token, login, logout, loading, error };
}
