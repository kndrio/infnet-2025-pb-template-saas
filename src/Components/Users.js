import React, { useState, useEffect } from "react";
import { fetchUsers } from "../Services/Users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) {
    return <p> Carregando Users...</p>;
  }

  if (error) {
    return <p>Erro no carregamento dos Users: {error.message}</p>;
  }

  return (
    <section className="section section-bg-gray">
      <div className="section-header">
        <div className="section-title">
          <h2>Usuários</h2>
          <p className="section-description">
            Nosso principal business são pessoas.
          </p>
        </div>
        <div className="features-grid">
          {users.map((user, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <img src={user.avatar} />
              </div>
              <h3 className="feature-title">
                {user.id} - {user.first_name} {user.last_name}
              </h3>
              <p className="feature-description">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;