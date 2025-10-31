import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Inicio from './pages/Inicio/Inicio.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Cultura from './pages/Cultura/Cultura.jsx';
import Login from './pages/Login/Login.jsx';
import Lazer from './pages/Lazer/Lazer.jsx';
import Esporte from './pages/Esporte/Esporte.jsx';
import Desenvolvedores from './pages/Desenvolvedores/Desenvolvedores.jsx';
import Senha from './pages/senha/senha.jsx';
import RecuperarSenha from "./pages/senha/recuperarSenha.jsx";
import ResetarSenha from "./pages/senha/resetarSenha.jsx";
import ContaUsuario from './pages/conta/conta.jsx';
import NaoEncontrado from './pages/notfound/notfound.jsx';


export default function Navegador() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Cultura" element={<Cultura />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Lazer" element={<Lazer />} />
        <Route path="/Esporte" element={<Esporte />} />
        <Route path="/Desenvolvedores" element={<Desenvolvedores />} />
        <Route path="/TrocarSenha" element={<Senha />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/resetar-senha" element={<ResetarSenha />} />
        <Route path="/conta" element={<ContaUsuario />} />
        <Route path="/*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}
