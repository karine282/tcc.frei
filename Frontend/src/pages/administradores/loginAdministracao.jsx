import './loginAdministracao.scss'
import { Link } from "react-router-dom";

export default function LoginAdministracao(){
    return(
       <div className="container-loginAdm">
        <h2 className="logo">Localiza<span>LivreSP</span></h2>
        <div className='loginadm'> 
        <h1 className='titulo'>Painel Administrativo</h1>

        <input type='email' placeholder='email'/>
        <input type='password' placeholder='senha'/>
        <Link to='/painel-administrativo'>
        <button>Entrar</button>
        </Link>
        </div>
       </div>
    );
}

