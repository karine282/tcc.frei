// src/pages/Senha/Senha.jsx
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../api";
import './senha.scss';

export default function Senha() {
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // pega token da URL

  // Se estiver na tela de "recuperar senha" 
  const handleRecuperarSenha = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/recuperar-senha", { email });
      setMensagem(res.data.mensagem);
    } catch (err) {
      setMensagem(err.response?.data?.erro || "Erro ao solicitar recuperação");
    }
  };

  // Se estiver na tela de "resetar senha" 
  const handleResetarSenha = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/resetar-senha", { token, novaSenha });
      setMensagem(res.data.mensagem);
      setTimeout(() => navigate("/login"), 2000); // redireciona para login
    } catch (err) {
      setMensagem(err.response?.data?.erro || "Erro ao resetar senha");
    }
  };

  return (
    <div className="container-senha">
      <h2 className="logo">Localiza<span>LivreSP</span></h2>
      <div className="formulario">
        <form onSubmit={token ? handleResetarSenha : handleRecuperarSenha}>
          <h2 className="titulo">
            {token ? "Redefinir Senha" : "Recuperação de Senha"}
          </h2>

          {!token && (
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          {token && (
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
          )}

          <button type="submit">{token ? "Atualizar" : "Enviar link"}</button>

          {mensagem && <p className="mensagem">{mensagem}</p>}
        </form>
      </div>
    </div>
  );
}
