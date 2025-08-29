import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
});

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error ao buscar os usuários", error);
    throw error;
  }
};

export const updateUsers = async (id, userData) => {
  try {
    const response = await api.put(`/users${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error ao buscar os usuários", error);
    throw error;
  }
};

//delete
export const deleteuser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
};

//login
export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    throw error;
  }
};
