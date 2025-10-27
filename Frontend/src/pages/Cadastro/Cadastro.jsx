import { useState } from "react";
import { Link } from "react-router-dom";
import './Cadastro.scss';

export default function Cadastro() {
    /*
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
    */

    const handleCadastro = async (e) => {
    e.preventDefault();

    const novoUsuario = {
        usuario,
        email,
        genero,
        cep,
        senha
    };

    try {
        const response = await fetch('http://localhost:5010/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUsuario)
        });

        const data = await response.json();
        console.log('Resposta do servidor:', data);

        alert(data.message);
        
        // Se quiser, pode redirecionar:
        // navigate('/login');
        
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar usuário!');
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

                    <select className="input-cadastro"  value={genero} onChange={(e) => setGenero(e.target.value)}>
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
