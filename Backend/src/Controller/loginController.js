

import consultarUsuarioService from "../service/LoginService.js";

export async function loginController(req, res) {
  try {
    const { login, senha } = req.body;

    const usuario = await consultarUsuarioService(login, senha);

    res.status(200).json({
      message: "Login realizado com sucesso!",
      usuario
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}