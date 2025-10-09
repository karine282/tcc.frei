import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Inicio from './pages/Inicio/Inicio.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Cultura from './pages/Cultura/Cultura.jsx';
import Login from './pages/Login/Login.jsx';
import Lazer from './pages/Lazer/Lazer.jsx';

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

      </Routes>
    </BrowserRouter>
  );
}
