import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './senha.scss'



export default function Senha() {
    return (
        <div className="container-senha">
            <h2 className="logo">Localiza<span>LivreSP</span></h2>

            <div className="formulario">
                <form>
                    <h2 className="titulo">Recuperação de senha</h2>
                    <input type="email" placeholder="digite seu email" />
                    <input type="password" placeholder="sua nova senha" />
                    <button type="submit"> atualizar</button>
                    <Link to='/Cadastro'> <i class="fa-regular fa-circle-left icone-esquerda"></i>  </Link>
                    <Link to='/Login'> <i class="fa-regular fa-circle-right icone-direita"></i>  </Link>

                    
                </form>




            </div>

        </div>
    );
}