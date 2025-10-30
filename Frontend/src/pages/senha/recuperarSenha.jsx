import { useState } from "react";
import api from "../../api";
import "./senha.scss";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post("/recuperar-senha", { email });
      setMensagem(resp.data.mensagem);
    } catch (err) {
      setMensagem(err.response?.data?.erro || "Erro ao enviar e-mail");
    }
  };

  return (
    <div className="container-senha">
      <h2>Recuperação de Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar link</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
