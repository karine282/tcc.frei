import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Senha:", senha);
    };

    return (
        <div className="container-login">
            <div className="login-esquerda">
                <h1>Seja bem-vindo!</h1>
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

                    <p className="link">
                        não tem uma conta? <Link to="/Cadastro">Criar</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
