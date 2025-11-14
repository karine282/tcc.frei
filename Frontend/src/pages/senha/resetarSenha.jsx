import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import "./senha.scss";

export default function ResetarSenha() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); 
  const [novaSenha, setNovaSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post("/resetar-senha", { token, novaSenha });
      setMensagem(resp.data.mensagem);
    } catch (err) {
      setMensagem(err.response?.data?.erro || "Erro ao redefinir senha");
    }
  };

  return (
    <div className="container-senha">
      <h2>Redefinir Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Digite sua nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
        />
        <button type="submit">Atualizar senha</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
