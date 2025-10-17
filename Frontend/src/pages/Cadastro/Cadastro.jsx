import { useState } from "react";
import { Link } from "react-router-dom";
import './Cadastro.scss';

export default function Cadastro() {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [genero, setGenero] = useState("");
    const [cep, setCep] = useState("");
    const [senha, setSenha] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        console.log({
            usuario,
            email,
            genero,
            cep,
            senha
        });
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
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input 
                        type="email" 
                        className="input-cadastro"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="input-cadastro"
                        placeholder="gênero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
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

                    <p className="link">
                        já tem uma conta? <Link to="/login">Entrar</Link>
                    </p>
                </form>
            </div>

            <div className="cadastro-direita">
                <h1>Seja bem-vindo!</h1>
                <p>crie uma conta para melhor experiência</p>
            </div>
        </div>
    );
}
