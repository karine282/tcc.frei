import './administradores.scss'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Administracao() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("usuario"))?.token;
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUsuarios = async () => {
      try {
        const resposta = await api.get("/admin/usuarios", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuarios(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
        setMensagem("Erro ao carregar usuários");
      }
    };

    fetchUsuarios();
  }, [navigate]);

  const handleExcluir = async (id) => {
    if (!window.confirm("Deseja realmente excluir este usuário?")) return;
    try {
      const token = JSON.parse(localStorage.getItem("usuario"))?.token;
      await api.delete(`/admin/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsuarios(usuarios.filter((u) => u.id !== id));
      setMensagem("Usuário excluído com sucesso!");
    } catch (erro) {
      console.error("Erro ao excluir:", erro);
      setMensagem("Erro ao excluir usuário");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <div className="container-painel">
      <header className="painel-header">
        <h1>Painel Administrativo</h1>
        <button className="btn-logout" onClick={handleLogout}>Sair</button>
      </header>

      {mensagem && <p className="mensagem">{mensagem}</p>}

      <table className="tabela-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Gênero</th>
            <th>CEP</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.genero}</td>
                <td>{usuario.cep}</td>
                <td>
                  <button className="btn-excluir" onClick={() => handleExcluir(usuario.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>Nenhum usuário cadastrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
