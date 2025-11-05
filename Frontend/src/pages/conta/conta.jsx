import './conta.scss';
import { Link, useNavigate } from "react-router-dom"; // Adicione useNavigate para redirecionamento
import { useState, useEffect } from 'react';

export default function ContaUsuario() {
    const [usuario, setUsuario] = useState({}); // Estado para armazenar dados do usuário
    const navigate = useNavigate();

    useEffect(() => {
        const dadosUsuario = localStorage.getItem('usuario');
        if (dadosUsuario) {
            setUsuario(JSON.parse(dadosUsuario));
        } else {
            alert('Você precisa fazer login primeiro!');
            navigate('/login'); // Ajuste para sua rota de login
        }
    }, [navigate]);

    return (
        <div className="container-conta">
            <header className="inicio">
                <div className="container comeco">
                    <div className="logo">Localiza<span>LivreSP</span></div>
                    <nav className="nave">
                        <Link to="/Cultura">Cultura</Link>
                        <Link to="/Esporte">Esporte</Link>
                        <Link to="/Lazer">Lazer</Link>
                        <Link to='/conta' className='titulo-cabecalho'>Sua conta</Link>
                        <Link to='/'><i className="fa-solid fa-house"></i></Link>
                    </nav>
                </div>
            </header>
            
            <div className="biografia">
                <h2>Sua biografia</h2>
                <h3>Nome de usuário <i className="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>{usuario.nome || 'Carregando...'}</p> 
                <h3>CEP <i className="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>{usuario.cep || 'Carregando...'}</p> 
                <h3>Gênero <i className="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>{usuario.genero || 'Carregando...'}</p> 
                <h3>Email <i className="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>{usuario.email || 'Carregando...'}</p> 
            </div>
            <div className='sair-conta'>
                <h3 onClick={() => {
                    localStorage.removeItem('usuario'); // Remove dados ao sair
                    navigate('/login'); // Redireciona para login
                }}>Sair da conta <i className="fa-solid fa-right-from-bracket icon-editar"></i></h3>
            </div>
        </div>
    );
}