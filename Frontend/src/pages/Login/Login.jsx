import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import api from "../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState(""); // Para mostrar erros ou sucesso
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Chama a API de login
      const resposta = await api.post("/login", { email, senha });

      console.log("Resposta da API:", resposta.data);

      // Exibe mensagem de sucesso
      setMensagem(resposta.data.mensagem);

      // Salva os dados completos no localStorage (incluindo id, nome, email, cep, genero e token)
      localStorage.setItem("usuario", JSON.stringify({
        id: resposta.data.id,
        nome: resposta.data.nome,
        email: resposta.data.email,
        cep: resposta.data.cep,  // Adicionado: CEP
        genero: resposta.data.genero,  // Adicionado: Gênero
        token: resposta.data.token,
      }));

      // Redireciona para a página de conta
      navigate("/conta"); 

    } catch (erro) {
      console.error("Erro ao logar:", erro.response?.data || erro.message);

      // Mostra a mensagem de erro retornada pelo backend
      setMensagem(erro.response?.data?.erro || "Erro ao logar. Tente novamente.");
    }
  };

  return (
    <div className="container-login">
      <div className="login-esquerda">
        <h1>Seja bem-vindo de volta!</h1>
        <p>faça login para continuar</p>
      </div>

      <div className="login-direita">
        <h2 className="logo">Localiza<span>LivreSP</span></h2>

        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>

          {mensagem && <p className="mensagem">{mensagem}</p>}

          <p className="link" >Esqueceu a senha? <Link to="/TrocarSenha">Trocar </Link> </p>

          <p className="link">
            não tem uma conta? <Link to="/Cadastro">Criar</Link>
          </p>
          <Link to='/' className="link">Entrar sem cadastro</Link>

        </form>
      </div>
    </div>
  );
}