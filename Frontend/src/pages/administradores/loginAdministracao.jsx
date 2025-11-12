  import './loginAdministracao.scss'
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import api from "../../api";


  export default function LoginAdministracao(){

      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");
      const [mensagem, setMensagem] = useState("");
      const navigate = useNavigate(); 
    
      const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const resposta = await api.post("/loginAdm", { email, senha });
    
          console.log("Resposta da API:", resposta.data);
    
          setMensagem(resposta.data.mensagem);
    
          localStorage.setItem("usuario", JSON.stringify({
            id: resposta.data.id,
            email: resposta.data.email,
            token: resposta.data.token,
          }));
    
          navigate("/painel-administrativo"); 
    
        } catch (erro) {
          console.error("Erro ao logar:", erro.response?.data || erro.message);
    
          setMensagem(erro.response?.data?.erro || "Erro ao logar. Tente novamente.");
        }
      };
      return(
        <div className="container-loginAdm">
          <Link to="/" className='link'>
          <h2 className="logo">Localiza<span>LivreSP</span></h2>
          </Link>
          <div className='loginadm'> 
          <h1 className='titulo'>Painel Administrativo</h1>

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

          </form>
          </div>
        </div>
      );
  }

