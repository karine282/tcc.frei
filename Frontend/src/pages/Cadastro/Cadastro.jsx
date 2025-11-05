import { useState } from "react";
import { Link } from "react-router-dom";
import './Cadastro.scss';
import api from "../../api";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [genero, setGenero] = useState("");
    const [cep, setCep] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const resposta = await api.post("/cadastro", {
                nome,
                email,
                genero,
                cep,
                senha
            });

            alert(" Cadastro realizado com sucesso!");
            console.log("Resposta da API:", resposta.data);
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro.response?.data || erro.message);
            alert(erro.response?.data?.erro || "Erro ao cadastrar. Tente novamente.");
        }

    };



    return (
        <div className="container-cadastro">
            {/* Inputs agora ficam à esquerda */}
            <div className="cadastro-esquerda">
                <h2 className="logo">Localiza<span>LivreSP</span></h2>

                <form onSubmit={handleCadastro}>
                    <input
                        type="text"
                        className="input-cadastro"
                        placeholder="usuário"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="email"
                        className="input-cadastro"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <select className="input-cadastro" value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="">Selecione o genero</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                        <option value="outro">outro</option>
                    </select>

                    <input
                        type="text"
                        className="input-cadastro"
                        placeholder="CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <input
                        type="password"
                        className="input-cadastro"
                        placeholder="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="submit">Criar</button>
                    {mensagem && <p className="mensagem">{mensagem}</p>}

                    <p className="link">
                        já tem uma conta? <Link to="/login">Entrar</Link>
                    </p>

                    
                        <Link to='/' className="link">Entrar sem cadastro</Link>
                    
                </form>
            </div>

            <div className="cadastro-direita">
                <img src="assets/images/login.jpg" alt="" />
                <h1>Seja bem-vindo!</h1>
                <p>crie uma conta para melhor experiência</p>
            </div>
        </div>
    );
}
