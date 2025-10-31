import './conta.scss'
import { Link } from "react-router-dom";

export default function ContaUsuario() {
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
           <Link to='/'><i class="fa-solid fa-house"></i></Link>

          </nav>
        </div>
      </header>
            
           
            <div className="biografia">
                <h2>Sua biografia</h2>
                <h3>nome de usuario <i class="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>Geovanna</p>
                <h3>Cep <i class="fa-regular fa-pen-to-square icon-editar"></i></h3>
                <p>048415</p>
                <h3>Genero <i class="fa-regular fa-pen-to-square icon-editar"></i> </h3>
                <p>feminino</p>
                <h3></h3>
            </div>
            <div className='sair-conta'>

            <h3>Sair da conta <i class="fa-solid fa-right-from-bracket  icon-editar"></i></h3>
            <h3> adicionar conta <i class="fa-solid fa-user-plus  icon-editar"></i></h3>

            </div>
        </div>
    );
}